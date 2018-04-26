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

export const getVS = vsId => state => state[vsId];

export const getLinkedServiceNodes = (vs, fromNode, service, direction = OUTGOING) => {
  const otherNode = EdgeDir[direction].otherNode;
  const edges = fromNode[direction][service] || [];
  const nodeIds = edges.map(id => vs.edges[id][otherNode]);
  return nodeIds.map(i => vs.nodes[i]);
}

// TODO: figure out best way to curry fn
export const getLinkedNodes = vsId => (state, fromNode, service, direction = OUTGOING) => {
  const vs = getVS(vsId)(state);
  if (!service) {
    const allOutgoing = Object.keys(fromNode[direction]).map(service =>
      getLinkedServiceNodes(vs, fromNode, service, direction)
    );
    return [].concat.apply([], allOutgoing);
  }
  else return getLinkedServiceNodes(vs, fromNode, service, direction);
}

// TODO: figure out best way to curry fn (copy of above...)
export const _getLinkedNodes = (vs, fromNode, service, direction = OUTGOING) => {
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

const _find = (layer, nodes, vs) => {
  if (!layer) return nodes;

  const { _filter = () => true } = layer;
  const filteredNodes = nodes.filter(n => _filter(n.data));
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
    linkedServices.map(s => _find(layer[s], childNodesMap[s], vs))
  )
}

export const find = vsId => (state, query, fromId) => {
  const vs = state[vsId];
  const startId = fromId || vs.rootId;
  const startNode = vs.nodes[startId];

  return _find(query, [startNode], vs);
}

export const getIds = vsId => (state, query) =>
  find(vsId)(state, query).map(n => n.id);

export const mapEntity = (state, props) => state[props.vsId].nodes[props.id].data;

export const mapEdge = (state, props) => {
  const edgeId = [props.id, props.parentId].sort().join('-');
  return state[props.vsId].edges[edgeId];
}
