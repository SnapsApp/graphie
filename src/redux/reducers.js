import { combineReducers } from 'redux';
import Action, { Atype } from './actions';

const INIT_STATE = { nodes: {}, edges: {} };

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

/* NOTE: placeholder. replace with pluggable data reducers */
const dataUpdaterPlaceholder = (data = {}, action) => {
  switch (action.type) {
    case Atype.UPDATE_NODE: {
      return action.data;
    }
    case Atype.UPDATE_EDGE: {
      return action.data;
    }
    default: return data;
  }
}

const insertEdge = (node, direction, id) => Object.assign({}, node,
  { [direction]: node[direction].concat(id) }
);
const spliceEdge = (node, direction, id) => {
  const newList = node[direction].slice();
  newList.splice(newList.indexOf(id), 1);

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
      if (node) node = Object.assign({}, node, { data: dataUpdaterPlaceholder(node.data, action) });
      return Object.assign({}, state, { [id]: node });
    }
    case Atype.CLEAR_NODE: {
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
    case Atype.DELETE_EDGE: {
      const { origin, destin, id } = action;
      const originNode = state[origin];
      const destinNode = state[destin];
      return Object.assign({}, state, {
        [origin]: spliceEdge(originNode, 'outgoing', id),
        [destin]: spliceEdge(destinNode, 'incoming', id),
      })
    }
    default: return state;
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
      if (edge) edge = Object.assign({}, edge, { data: dataUpdaterPlaceholder(edge.data, action) });
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

function graphreducer(state = INIT_STATE, action) {
  // pack data from state onto actions here.
  let packOntoAction = {};

  switch (action.type) {
    case Atype.ADD_EDGE: {
      const { origin, destin, id } = action;
      const { nodes = {}, edge = {} } = state;

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
        const { outgoing, incoming } = node;
        const deleteEdgesThenNode = outgoing.concat(incoming)
          .map(id => Action.deleteEdge(state.edges[id]))
          .concat(Action.clearNode(node));

        return deleteEdgesThenNode
          .reduce((state, action) => {
            return graphreducer(state, action)
          }, state);
      }
    }
  }
  return {
    nodes: nodes(state.nodes, Object.assign({}, action, packOntoAction)),
    edges: edges(state.edges, Object.assign({}, action, packOntoAction)),
  }
}

export default graphreducer;
