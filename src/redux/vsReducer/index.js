import { createGraphReducer, createNodesReducer, createEdgesReducer, INIT_STATE, allEdges } from '../graphReducer';
import { Atype as gAtype, default as gAction } from '../graphReducer/graphActions';
import { Atype as vsAtype } from './vsActions';
import { getLinkedServiceEdges } from './vsGetters';
import { addStandardEdgeData, getEdgeId } from './common';

const INIT_NODE_DATA = {
  entity: undefined,
  updateStatus: undefined,
};
const INIT_EDGE_DATA = {
  entity: undefined,
  updateStatus: undefined,
};

const nodeDataReducer = (nData = INIT_NODE_DATA, action) => {
  switch (action.type) {
    case gAtype.ADD_NODE: {
      const { updateStatus, data } = action;
      return {
        entity: updateStatus === 'new' ? data : {},
        updateStatus: updateStatus || nData.updateStatus
      }
    }
    case gAtype.UPDATE_NODE: {
      const { change, updateStatus } = action;
      return {
        entity: change === null ? undefined : Object.assign({}, nData.entity, change),
        updateStatus: updateStatus || nData.updateStatus
      }
    }
    default: return nData;
  }
}

// TODO: update
const edgeDataReducer = (eData = INIT_EDGE_DATA, action) => {
  switch (action.type) {
    case gAtype.ADD_EDGE: {
      const { data, updateStatus } = action;

      return {
        edge: data,
        updateStatus: updateStatus || eData.updateStatus
      }
    }
    case gAtype.UPDATE_EDGE: {
      const { data, updateStatus } = action;
      const newEdge = { ...eData.edge, ...data };

      return {
        edge: newEdge,
        updateStatus: updateStatus || eData.updateStatus
      }
    }
    default: return eData;
  }
}

const trashReducer = (trashed = INIT_STATE, action) => {
  switch (action.type) {
    case gAtype.DELETE_EDGE: {
      const { id, deleted } = action;
      const deletedEdges = Object.assign({}, trashed.edges, { [id]: deleted });
      return Object.assign({}, trashed, { edges: deletedEdges });
    }
    case gAtype.CLEAR_NODE: {
      const { id, deleted } = action;
      const deletedNodes = Object.assign({}, trashed.nodes, { [id]: deleted });
      return Object.assign({}, trashed, { nodes: deletedNodes });
    }
    default: return trashed
  }
}

const nodesReducer = createNodesReducer(nodeDataReducer);
const edgesReducer = createEdgesReducer(edgeDataReducer);
const graphReducer = createGraphReducer(nodesReducer, edgesReducer);

const vsreducer = (state = {}, action) => {
  const { vsId } = action;
  const vs = state[vsId];
  let packedAction = action;

  switch (action.type) {
    case vsAtype.CLEAR_VS: {
      const newState = Object.assign({}, state);
      delete newState[vsId];
      return newState
    }
    case vsAtype.ADD_VS: {
      const { actions = [{}], rootId } = action;
      const newState = actions.reduce(graphReducer, vs);
      newState.rootId = rootId;
      return Object.assign({}, state, { [vsId]: newState });
    }
    case vsAtype.SET_ROOT: {
      const { vsId, rootId } = action;
      const newVS = Object.assign({}, state[vsId], { rootId });
      return Object.assign({}, state, { [vsId]: newVS });
    }
    case vsAtype.REORDER_CHILDREN: {
      const { actions = [{}] } = action;
      const newState = actions.reduce(graphReducer, vs);
      newState.rootId = vs.rootId;
      return Object.assign({}, state, { [vsId]: newState });
    }
    case vsAtype.ADD_AND_LINK_ENTITY: {
      const { actions = [{}] } = action;
      const addAction = actions[0];
      const linkAction = actions[1];
      if (linkAction) {
        const { edgeData, origin, destin } = linkAction;
        const parent = vs.nodes[origin];
        const child = addAction;
        const orderIndex = getLinkedServiceEdges(vs, parent, child.nodeType).reduce((oi, edge) => {
          return Math.max(edge.orderIndex, oi)
        }, -1) + 1;

        linkAction.data = addStandardEdgeData(
          parent.id,
          parent.nodeType,
          child.id,
          child.nodeType,
          Object.assign({ orderIndex }, edgeData)
        );
      }
      const newState = actions.reduce(graphReducer, vs);
      newState.rootId = vs.rootId;
      return Object.assign({}, state, { [vsId]: newState });
    }
    case gAtype.ADD_EDGE: {
      const { edgeData, origin, destin } = action;
      const parent = vs.nodes[origin];
      const child = vs.nodes[destin];
      const orderIndex = getLinkedServiceEdges(vs, parent, child.nodeType).reduce((oi, edge) => {
        return Math.max(edge.orderIndex, oi)
      }, -1) + 1;

      const edgeWithStandardKeys = addStandardEdgeData(
        parent.id,
        parent.nodeType,
        child.id,
        child.nodeType,
        Object.assign({ orderIndex }, edgeData)
      );

      packedAction = Object.assign(action, { data: edgeWithStandardKeys });
      break;
    }
    case gAtype.DELETE_NODE: {
      const node = vs.nodes[action.id];
      if (node) {
        const vsDeleteEdge = (vsId, id, edges) => Object.assign({ vsId }, gAction.deleteEdge(edges[id]));
        const vsClearNode = (vsId, node) => Object.assign({ vsId }, gAction.clearNode(node));
        const deleteEdgesThenNode = allEdges(node)
          .map(id => vsDeleteEdge(vsId, id, vs.edges))
          .concat(vsClearNode(vsId, node));

        return deleteEdgesThenNode
          .reduce((state, action) => {
            return vsreducer(state, action)
          }, state);
      }
      break;
    }
    case gAtype.DELETE_EDGE:
    case gAtype.CLEAR_NODE: {
      const { id } = action;
      const deleted = vs.nodes[id] || vs.edges[id];

      packedAction = Object.assign({}, action, { deleted });
    }

  }

  if (vs) {
    const { nodes, edges } = graphReducer(vs, packedAction);
    const { rootId } = vs;
    const deleted = trashReducer(vs.deleted, packedAction);
    return Object.assign({}, state, { [vsId]: { nodes, edges, rootId, deleted } });
  }

  return state;
}

export default vsreducer;
