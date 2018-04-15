import { combineReducers } from 'redux';
import { Atype } from './actions';

const INIT_STATE = {};

const initNode = (
  id = undefined,
  data = {},
  incoming = [],
  outgoing = []
) => ({ id, data, incoming, outgoing });

const initEdge = (
  id = undefined,
  data = {},
  origin = undefined,
  destin = undefined
) => ({ id, data, origin, destin });

const nodeData = (data = {}, action) => {
  switch (action.type) {
    case Atype.UPDATE_NODE: {
      return action.data; // NOTE: placeholder
    }
    default: return data;
  }
}

const nodes = (state = INIT_STATE, action) => {
  switch (action.type) {
    case Atype.ADD_NODE: {
      const { id, data, incoming, outgoing } = action;
      const node = initNode(id, data, incoming, outgoing);
      return Object.assign({}, state, { [id]: node});
    }
    case Atype.UPDATE_NODE: {
      const { id, data } = action;
      let node = state[id];
      if (node) node = Object.assign({}, node, { data: nodeData(node.data, action) });
      return Object.assign({}, state, { [id]: node});
    }
    case Atype.DELETE_NODE: {
      const nState = Object.assign({}, state);
      delete nState[action.id];
      return nState;
    }
    default: return state;
  }
}

const edges = (state = INIT_STATE, action) => {
  return state
}

export default combineReducers({
  nodes,
  edges
});
