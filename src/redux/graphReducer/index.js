import Action, { Atype } from './graphActions';

const INIT_STATE = { nodes: {}, edges: {} };

export const DEFAULT_NODE_TYPE = 'node';

export const edgeDirection = {
  OUTGOING: 'outgoing',
  INCOMING: 'incoming',
}

const initNode = (
  id = undefined,
  data = {},
  incoming = {},
  outgoing = {},
  nodeType = DEFAULT_NODE_TYPE
) => ({ id, data, incoming, outgoing, nodeType });

const initEdge = (
  id = undefined,
  data = {},
  origin = undefined,
  destin = undefined
) => ({ id, data, origin, destin });

const allEdges = node => ['incoming', 'outgoing'].reduce((all, dir) => {
  const edgesInDirection = Object.keys(node[dir]).reduce((list, nodeType) =>
    list.concat(node[dir][nodeType]), []);
  return all.concat(edgesInDirection);
}, []);

const defaultNodeDataReducer = (data, action) => {
  switch (action.type) {
    case Atype.UPDATE_NODE: {
      return action.data;
    }
    default: return data
  }
};
const defaultEdgeDataReducer = (data, action) => {
  switch (action.type) {
    case Atype.UPDATE_EDGE: {
      return action.data;
    }
    default: return data
  }
};
const defaultEdgeListReducer = (edgeList = [], action) => {
  const { id } = action;
  switch (action.type) {
    case Atype.ADD_EDGE: {
      return edgeList.concat(id)
    }
    case Atype.DELETE_EDGE: {
      const newList = edgeList.slice();
      newList.splice(newList.indexOf(id), 1);
      return newList;
    }
    default: return edgeList
  }
};

const edgeListWithTypes = (map = {}, action) => {
  switch (action.type) {
    case Atype.ADD_EDGE:
    case Atype.DELETE_EDGE: {
      const { direction, outgoingType = DEFAULT_NODE_TYPE, incomingType = DEFAULT_NODE_TYPE } = action;
      const nodeType = direction.OUTGOING ? outgoingType : incomingType;
      const updatedEdgeType = defaultEdgeListReducer(map[nodeType], action);

      const newMap = Object.assign({}, map);

      if (updatedEdgeType.length) newMap[nodeType] = updatedEdgeType;
      else delete newMap[nodeType];

      return newMap;
    }
    default: return map
  }
}

export const createNodesReducer = (
  dataReducer = defaultNodeDataReducer,
) => (state = {}, action) => {
  switch (action.type) {
    case Atype.ADD_NODE: {
      const { id, data, incoming, outgoing, nodeType } = action;
      const initialData = dataReducer(data, action);

      const node = initNode(id, initialData, incoming, outgoing, nodeType);
      return Object.assign({}, state, { [id]: node });
    }
    case Atype.UPDATE_NODE: {
      const { id, nodeType } = action;
      let node = state[id];
      if (node) node = Object.assign({}, node, {
        data: dataReducer(node.data, action),
        nodeType: nodeType || node.nodeType
      });
      return Object.assign({}, state, { [id]: node });
    }
    case Atype.CLEAR_NODE: {
      const nState = Object.assign({}, state);
      delete nState[action.id];
      return nState;
    }
    case Atype.ADD_EDGE:
    case Atype.DELETE_EDGE: {
      const { origin, destin } = action;
      const originNode = state[origin] || {};
      const destinNode = state[destin] || {};

      const outgoingType = originNode.nodeType;
      const incomingType = destinNode.nodeType;

      const packedAction = Object.assign({}, action, { outgoingType, incomingType });
      const edgeFrom = Object.assign({}, packedAction, { direction: edgeDirection.OUTGOING });
      const edgeTo = Object.assign({}, packedAction, { direction: edgeDirection.INCOMING });

      const outgoing = edgeListWithTypes(originNode.outgoing, edgeFrom);
      const incoming = edgeListWithTypes(destinNode.incoming, edgeTo);

      return Object.assign({}, state, {
        [origin]: Object.assign({}, originNode, { outgoing }),
        [destin]: Object.assign({}, destinNode, { incoming }),
      })
    }
    default: return state;
  }
}

export const createEdgesReducer = (dataReducer = defaultEdgeDataReducer) =>
  (state = {}, action) => {
    switch (action.type) {
      case Atype.ADD_EDGE: {
        const { id, data, origin, destin } = action;
        const initialData = dataReducer(data, action);

        const edge = initEdge(id, initialData, origin, destin);
        return Object.assign({}, state, { [id]: edge });
      }
      case Atype.UPDATE_EDGE: {
        const { id } = action;
        let edge = state[id];
        if (edge) edge = Object.assign({}, edge, { data: dataReducer(edge.data, action) });
        return Object.assign({}, state, { [id]: edge});
      }
      case Atype.DELETE_EDGE: {
        const nState = Object.assign({}, state);
        delete nState[action.id];
        return nState;
      }
      default: return state;
    }
  }

export const createGraphReducer = (
  nodesReducer = createNodesReducer(),
  edgesReducer = createEdgesReducer()
) => {
  const graphreducer = (state = INIT_STATE, action) => {
    // pack data from state onto actions here.
    let packOntoAction = {};

    switch (action.type) {
      case Atype.ADD_EDGE: {
        const { origin, destin, id } = action;
        const { nodes = {}, edges = {} } = state;

        if (edges[id] || !nodes[origin] || !nodes[destin]) return state;
        break;
      }
      case Atype.DELETE_EDGE: {
        const edge = state.edges[action.id];
        if (edge) packOntoAction = edge;
        break;
      }
      case Atype.DELETE_NODE: {
        const node = state.nodes[action.id];
        if (node) {
          const deleteEdgesThenNode = allEdges(node)
            .map(id => Action.deleteEdge(state.edges[id]))
            .concat(Action.clearNode(node));

          return deleteEdgesThenNode
            .reduce((state, action) => {
              return graphreducer(state, action)
            }, state);
        }
        break;
      }
      default: break;
    }
    return {
      nodes: nodesReducer(state.nodes, Object.assign({}, action, packOntoAction)),
      edges: edgesReducer(state.edges, Object.assign({}, action, packOntoAction)),
    }
  }
  return graphreducer
}

const graphreducer = createGraphReducer();

export default graphreducer;
