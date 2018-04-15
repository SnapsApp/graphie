const ADD_NODE = 'gp/add_node';
const UPDATE_NODE = 'gp/update_node';
const DELETE_NODE = 'gp/delete_node';

const ADD_EDGE = 'gp/add_edge';
const UPDATE_EDGE = 'gp/update_edge';
const DELETE_EDGE = 'gp/delete_edge';

const addNode = node => ({
  type: ADD_NODE,
  ...node
})
const deleteNode = node => ({
  type: DELETE_NODE,
  ...node
})
const updateNode = ({ id, data }) => ({
  type: UPDATE_NODE,
  id,
  data
})


const Action = {
  addNode,
  deleteNode,
  updateNode
}

export const Atype = {
  ADD_NODE,
  UPDATE_NODE,
  DELETE_NODE,

  ADD_EDGE,
  UPDATE_EDGE,
  DELETE_EDGE
}

export default Action;
