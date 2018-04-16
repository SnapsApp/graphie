import { combineReducers } from 'redux';
import { Atype } from './actions';

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

const insertEdge = (node, direction, id) => Object.assign({}, node,
  { [direction]: node[direction].concat(id) }
);
const deleteEdge = (node, direction, id) => {
  const newList = node[direction].slice();
  newList.splice(newList.indexOf(id));

  return Object.assign({}, node, { [direction]: newList });
}

const nodes = (state = {}, action) => {
  switch (action.type) {
    case Atype.ADD_NODE: {
      const { id, data, incoming, outgoing } = action;
      const node = initNode(id, data, incoming, outgoing);
      return Object.assign({}, state, { [id]: node });
    }
    case Atype.UPDATE_NODE: {
      const { id, data } = action;
      let node = state[id];
      if (node) node = Object.assign({}, node, { data: nodeData(node.data, action) });
      return Object.assign({}, state, { [id]: node });
    }
    case Atype.DELETE_NODE: {
      const nState = Object.assign({}, state);
      delete nState[action.id];
      return nState;
    }
    case Atype.ADD_EDGE: {
      const { origin, destin, id } = action;
      const originNode = state[origin];
      const destinNode = state[destin];
      return Object.assign({}, state, {
        [origin]: insertEdge(originNode, 'outgoing', id),
        [destin]: insertEdge(destinNode, 'incoming', id),
      })
    }
    // case Atype.DELETE_EDGE: {
    //   const { origin, destin, id } = action;
    //   const originNode = state[origin];
    //   const destinNode = state[destin];
    //   return Object.assign({}, state, {
    //     [origin]: deleteEdge(originNode, 'origin', id),
    //     [destin]: deleteEdge(destinNode, 'destin', id),
    //   })
    // }
    default: return state;
  }
}

const edgeData = (data = {}, action) => {
  switch (action.type) {
    case Atype.UPDATE_EDGE: {
      return action.data; // NOTE: placeholder
    }
    default: return data;
  }
}

const edges = (state = {}, action) => {
  switch (action.type) {
    case Atype.ADD_EDGE: {
      const { id, data, origin, destin } = action;
      const edge = initEdge(id, data, origin, destin);
      return Object.assign({}, state, { [id]: edge });
    }
    case Atype.UPDATE_EDGE: {
      const { id, data } = action;
      let edge = state[id];
      if (edge) edge = Object.assign({}, edge, { data: edgeData(edge.data, action) });
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

export default function (state = {}, action) {
  // pack data from state onto actions here.
  switch (action.type) {
    case Atype.ADD_EDGE: {
      const { origin, destin, id } = action;
      const { nodes = {}, edge = {} } = state;
      if (edges[id] || !nodes[origin] || !nodes[destin]) return state;
    }
  }
  return {
    nodes: nodes(state.nodes, action),
    edges: edges(state.edges, action),
  }
}
