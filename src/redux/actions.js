const ADD_NODE = 'gp/add_node';
const UPDATE_NODE = 'gp/update_node';
const DELETE_NODE = 'gp/delete_node';
const CLEAR_NODE = 'gp/clear_node';

const ADD_EDGE = 'gp/add_edge';
const UPDATE_EDGE = 'gp/update_edge';
const DELETE_EDGE = 'gp/delete_edge';

const addNode = node => ({
  type: ADD_NODE,
  ...node
})
const deleteNode = ({ id }) => ({
  type: DELETE_NODE,
  id
})
const clearNode = node => ({
  type: CLEAR_NODE,
  ...node
})
const updateNode = ({ id, data }) => ({
  type: UPDATE_NODE,
  id,
  data
})

const addEdge = edge => ({
  type: ADD_EDGE,
  ...edge
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
