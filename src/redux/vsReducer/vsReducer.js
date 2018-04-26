import { graphReducerFactory, nodesReducerFactory, defaultEdgeListReducer, edgeDirection } from '../graph/graphReducer';
import { Atype as gAtype } from '../graph/graphActions';
import { Atype as vsAtype } from './vsActions';

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
    case gAtype.ADD_NODE:
    case gAtype.UPDATE_NODE: {
      const { data, meta } = action;
      return {
        entity: data,
        updateStatus: meta.updateStatus || nData.updateStatus
      }
    }
    default: return nData;
  }
}
const edgeDataReducer = (eData = INIT_EDGE_DATA, action) => {
  switch (action.type) {
    case gAtype.ADD_EDGE:
    case gAtype.UPDATE_EDGE: {
      const { data, meta } = action;
      return {
        edge: data,
        updateStatus: meta.updateStatus || eData.updateStatus
      }
    }
    default: return eData;
  }
}

const nodesReducer = nodesReducerFactory(nodeDataReducer);
const graphReducer = graphReducerFactory(nodesReducer);

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
      const newState = actions.reduce(graphReducer, state[vsId]);
      newState.rootId = rootId;
      return Object.assign({}, state, { [vsId]: newState });
    }
    case vsAtype.SET_ROOT: {
      const { vsId, rootId } = action;
      const newVS = Object.assign({}, state[vsId], { rootId });
      return Object.assign({}, state, { [vsId]: newVS });
    }
  }

  return vs ? Object.assign({}, state, { [vsId]: graphReducer(state, packedAction) }) : state;
}

export default vsreducer;
