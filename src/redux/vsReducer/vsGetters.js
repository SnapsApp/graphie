import { getEdgeId } from './common.js';
import { getEntityData, getEdgeData } from '../dataReducer/dataGetters';

const OUTGOING = 'outgoing';
const INCOMING = 'incoming';
const ORIGIN = 'origin';
const DESTIN = 'destin';

export const EdgeDir = {
  [OUTGOING]: {
    self: ORIGIN,
    otherNode: DESTIN
  },
  [INCOMING]: {
    self: DESTIN,
    otherNode: ORIGIN
  }
}

export const getVS = (state, props) =>  {
  const vsId = props.vsId || props.vsContext.vsId;
  return state.vs[vsId];
}

export const getLinkedServiceEdges = (vs, fromNode, service, direction = OUTGOING) =>
  fromNode[direction][service].map(id => vs.edges[id]);

export const getLinkedServiceNodes = (vs, fromNode, service, direction = OUTGOING) => {
  const otherNode = EdgeDir[direction].otherNode;
  const edges = fromNode[direction][service] || [];
  const nodeIds = edges.map(id => vs.edges[id][otherNode]);
  return nodeIds.map(i => vs.nodes[i]);
}

// TODO: figure out best way to curry fn
export const getLinkedNodes = (vs, fromNode, service, direction = OUTGOING) => {
  if (!service) {
    const allOutgoing = Object.keys(fromNode[direction]).map(service =>
      getLinkedServiceNodes(vs, fromNode, service, direction)
    );
    return [].concat.apply([], allOutgoing);
  }
  else return getLinkedServiceNodes(vs, fromNode, service, direction);
}

// const find = vsId => (state, layer, service, nodes) => {
const serviceKeys = obj => {
  const specialKeys = ['_filter']
  return Object.keys(obj).filter(k => !specialKeys.includes(k));
}

const toObjOfArrays = (map, key) => {
  map[key] = [];
  return map;
};

const _find = (layer, nodes, vs, data) => {
  if (!layer) return nodes;

  const { _filter = () => true } = layer;
  const filteredNodes = nodes.filter(n => _filter(data[n.nodeType][n.id]));
  const linkedServices = serviceKeys(layer);

  if (!linkedServices.length) return filteredNodes;

  const childNodesMap = linkedServices.reduce(toObjOfArrays, {});

  filteredNodes.forEach(n => {
    linkedServices.forEach(s => {
      const outgoingNodes = getLinkedServiceNodes(vs, n, s);
      childNodesMap[s] = childNodesMap[s].concat(outgoingNodes);
    })
  })

  return [].concat.apply([],
    linkedServices.map(s => _find(layer[s], childNodesMap[s], vs, data))
  )
}

export const find = vsId => (state, query, fromId) => {
  const vs = getVS(state, { vsId });
  const startId = fromId || vs.rootId;
  const startNode = vs.nodes[startId];

  let qObj = query;
  if (typeof query === 'string') {
    const q = query.split('.').reduce((state, service) => {
      let { layer, obj } = state;
      if (!layer) layer = obj;

      layer[service] = {};
      state.layer = layer[service];

      return state;
    }, {
      layer: undefined,
      obj: {}
    });
    qObj = q.obj;
  }

  return _find(qObj, [startNode], vs, state.data);
}

export const getIds = vsId => (state, query) =>
  find(vsId)(state, query).map(n => n.id);

export const getEntityState = (state, props) => getVS(state, props).nodes[props.id];

export const getEdgeState = (state, props) => {
  const { id, parentId } = props;
  const edgeId = [id, parentId].sort().join('-');
  return getVS(state, props).edges[edgeId];
}

export const getOrderedChildren = (state, props) => {
  const { parentId, service } = props;
  if (!service) console.log(`no service provided for getOrderedChildren for ${ parentId }`);
  const vs = getVS(state, props);
  const parentNode = vs.nodes[parentId];
  const services = service ? [service] : Object.keys(parentNode.outgoing);

  const orderedEdges = services.map(
    s => getLinkedServiceEdges(vs, parentNode, s).sort(
      (a, b) => a.data.edge.orderIndex - b.data.edge.orderIndex
    )
  );

  const ids = [].concat.apply([], orderedEdges).map(e => e.destin);

  return ids;
}

export const mapEntity = (state, props) => {
  const node = getEntityState(state, props);
  const service = node.nodeType;

  return Object.assign({},
    getEntityData(state, { service, id: props.id }),
    node.data.entity
  );
}

// TODO: test
export const mapEdge = (state, props) => {
  const { parentId, id } = props;
  const parentProps = Object.assign({}, props, { id: parentId });

  if (!parentId) return;

  const node = getEntityState(state, props);
  const parentNode = getEntityState(state, parentProps);

  const data = getEdgeData(state, {
    service: node.nodeType,
    id,
    parentId,
    parentService: parentNode.nodeType
  });

  const edgeState = getEdgeState(state, props) || {};

  const edge = Object.assign({},
    data,
    edgeState.data.edge
  );

  return edge;
}

// structure graphing
export const graph = structure => (s, props) => {
  const vsState = getVS(s, props);
  const dataState = s.data;
  const grapher = new StructureGrapher(structure, vsState, dataState);
  return grapher.getPostBody();
}

export class StructureGrapher {
  static makeDelink = (pService, parentId, cService, childId) =>
  `${ pService }/${ parentId }/delinks/${ cService }/${ childId }`

  static idToEdgesMap = edgesState => Object.keys(edgesState).reduce((map, edgeKey) => {
    const { edge, updateStatus } = edgesState[edgeKey].data;
    const childId = edge.childId;
    const parentId = edge.parentId;

    if (!map[childId]) map[childId] = [];
    if (!map[parentId]) map[parentId] = [];

    map[childId].push({
      data: Object.assign({}, edge, { relation: 'object' }),
      updateStatus
    });
    map[parentId].push({
      data: Object.assign({}, edge, { relation: 'subject' }),
      updateStatus
    });
    return map;
  }, {}) // { [id]: { data, updateStatus } };

  static getEdgesForId = (edgeMap, id) => edgeMap[id].reduce((acc, edge) => {
    const { data } = edge;
    const isChild = data.childId === id;
    const service = isChild ? data.childService : data.parentService;

    acc.hasUpdatedEdges = acc.hasUpdatedEdges || edge.updateStatus === 'updated';
    if (!acc[service]) acc[service] = { edges: {} };

    acc[service].edges[id] = data;

    return acc;
  }, {
    edges: {}, // { service: { edges { [id]: edgeData } } }
    hasUpdatedEdges: false
  })

  constructor(...args) {
    this.initState(...args);
  }
  initState(structure, vsState, dataState, orgId) {
    this.orgId = orgId;
    this.structure = structure;
    this.vsState = vsState;
    this.dataState = dataState;
    this.edgesMap = StructureGrapher.idToEdgesMap(vsState.edges);
    this.entitiesMap = this.makeEntitiesMap(vsState.nodes, dataState);
  }
  updateState(vsState) {
    this.initState(this.structure, vsState, this.dataState, this.orgId);
  }

  makeEntitiesMap() {
    const nodes = this.vsState.nodes;
    return Object.keys(nodes).reduce((map, id) => {
      const { entity: changes, updateStatus } = nodes[id].data;
      const service = nodes[id].nodeType;
      const entity = this.dataState[service][id];

      const newEntity = Object.assign({}, changes, entity);
      const { edges: newEdges, hasUpdatedEdges } = StructureGrapher.getEdgesForId(this.edgesMap, id);

      newEntity.edges = Object.assign(newEntity.edges, newEdges);

      if (updateStatus === 'new') newEntity.method = 'POST';
      if (hasUpdatedEdges && updateStatus === 'updated') newEntity.method = 'PATCH';

      map[id] = newEntity;
      return map;
    }, {}) // { [id]: entity }
  }

  getEntity(id) {
    return this.entitiesMap[id];
  }

  createStructureState() {
    const edgesMap = StructureGrapher.idToEdgesMap(this.vsState.edges);

    const entitiesMap = Object.keys(this.vsState.nodes).reduce((map, id) => {
      const { entity: changes, updateStatus } = this.vsState.nodes[id].data;
      const service = this.vsState.nodes[id].nodeType;
      const entity = this.dataState[service][id];

      const newEntity = Object.assign({}, changes, entity);
      const { edges: newEdges, hasUpdatedEdges } = StructureGrapher.getEdgesForId(edgesMap, id);

      newEntity.edges = Object.assign(newEntity.edges, newEdges);

      if (updateStatus === 'new') newEntity.method = 'POST';
      if (hasUpdatedEdges && updateStatus === 'updated') newEntity.method = 'PATCH';

      map[id] = newEntity;
      return map;
    }, {}); // { [id]: entity }

    // generate rootId
    const rootId = this.vsState.rootId;
    const rootNode = this.vsState.nodes[rootId];
    const rootService = rootNode.nodeType;

    const structureState = {
      [rootService]: this.structureFromState(this.structure[rootService], [this.getEntity(rootId)])
    }

    return structureState;
  }

  createDelinksArray = () => {
    return [];
  }

  structureFromState(structureLayer, data) {
    const services = Object.keys(structureLayer).filter(s => s !== 'data');
    if (!services.length) return { data };
    else {
      const childrenData = this.getChildrenForServices(data, services);
      return services.reduce((acc, service) => {
        acc[service] = this.structureFromState(structureLayer[service], childrenData[service]);
        return acc;
      }, { data });
    }
  }

  getChildrenForServices (parentEntities, services) {
    const vs = this.vsState;
    return services.reduce((acc, service) => {
      acc[service] = [].concat.apply([], parentEntities.map((parent) =>
        getLinkedServiceNodes(vs, vs.nodes[parent.id], service)
      ))
      .map(n => this.getEntity(n.id));

      return acc;
    }, {});
  }

  getPostBody() {
    const state = this.createStructureState();
    const delinks = this.createDelinksArray();
    return {
      orgId: this.orgId,
      structure: this.structure,
      state,
      delinks
    }
  }

}
