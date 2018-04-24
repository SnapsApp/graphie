const ADD_NODE = 'gp/add_node';
const UPDATE_NODE = 'gp/update_node';
const DELETE_NODE = 'gp/delete_node';
const CLEAR_NODE = 'gp/clear_node';

const ADD_EDGE = 'gp/add_edge';
const UPDATE_EDGE = 'gp/update_edge';
const DELETE_EDGE = 'gp/delete_edge';

const addNode = ({ id, data, nodeType, incoming, outgoing }) => ({
  type: ADD_NODE,
  id,
  data,
  incoming,
  outgoing,
  nodeType
})
const deleteNode = ({ id }) => ({
  type: DELETE_NODE,
  id
})
const clearNode = node => ({
  type: CLEAR_NODE,
  ...node
})
const updateNode = ({ id, data, nodeType }) => ({
  type: UPDATE_NODE,
  id,
  data,
  nodeType
})

const addEdge = ({ id, data, origin, destin }) => ({
  type: ADD_EDGE,
  id,
  data,
  origin,
  destin,
});
const updateEdge = ({ id, data }) => ({
  type: UPDATE_EDGE,
  id,
  data
});
const deleteEdge = ({ id }) => ({
  type: DELETE_EDGE,
  id
});

const Action = {
  addNode,
  deleteNode,
  clearNode,
  updateNode,

  addEdge,
  deleteEdge,
  updateEdge,
}

export const Atype = {
  ADD_NODE,
  UPDATE_NODE,
  DELETE_NODE,
  CLEAR_NODE,

  ADD_EDGE,
  UPDATE_EDGE,
  DELETE_EDGE
}

export default Action;
