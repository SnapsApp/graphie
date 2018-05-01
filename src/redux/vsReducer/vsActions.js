import gActions, { Atype as gAtype } from '../graphReducer/graphActions';
import { parseVSdata, getEdgeId } from './common';

const ADD_VS = 'vs/add_vs';
const CLEAR_VS = 'vs/clear_vs';
const SET_ROOT = 'vs/set_root';
const ADD_CHILD = 'vs/add_child';

const addVS = (vsId, actions, rootId) => ({
  type: ADD_VS,
  vsId,
  actions,
  rootId
});
const clearVS = vsId => ({
  type: CLEAR_VS,
  vsId,
})

const setRoot = vsId => rootId => ({
  type: SET_ROOT,
  vsId,
  rootId
})

const initEntity = vsId => node => Object.assign(gActions.addNode(node),
  { vsId, updateStatus: 'unchanged' });

export const updateEntity = (vsId, id) => change => ({
  type: gAtype.UPDATE_NODE,
  vsId,
  id,
  change,
  updateStatus: 'updated'
})
export const revertEntity = (vsId, id) => () => ({
  type: gAtype.UPDATE_NODE,
  vsId,
  id,
  change: null,
  updateStatus: 'unchanged'
})

export const deleteEntity = (vsId, id) => node => Object.assign(gActions.deleteNode({ id }), { vsId });

export const linkEntities = vsId => (parentId, childId, edgeData) =>
  Object.assign(gActions.addEdge({
    id: getEdgeId(parentId, childId),
    data: edgeData,
    origin: parentId,
    destin: childId
  }), { vsId });

export const delinkEntities = vsId => () => {}

// export const addChild = (vsId, parentId) => (childId, service, data) => {
//   const actions = [
//     addNode({ id, data, nodeType: service }),
//     link()
//   ]
//   return {
//     type: ADD_CHILD,
//     actions
//   };
// }

// TODO: test...

const addEntity = vsId => node => Object.assign(gActions.addNode(node),
  { vsId, updateStatus: 'new' });

const initLink = vsId => edge => Object.assign(gActions.addEdge(edge),
  { vsId, updateStatus: 'unchanged' });
const updateLink = vsId => edge => Object.assign(gActions.updateEdge(edge),
  { vsId, updateStatus: 'updated' });
const delink = vsId => edge => Object.assign(gActions.deleteEdge(edge),
  { vsId, updateStatus: 'deleted' });

export const populateVS = (vsId, response) => {
  if (!response) return addVS(vsId);

  const { nodes, edges, rootId } = parseVSdata(response);
  const actions = Object.keys(nodes)
    .map(id => initEntity(vsId)(nodes[id]))
    .concat(
      Object.keys(edges)
        .map(id => initLink(vsId)(edges[id]))
    )

  return addVS(vsId, actions, rootId);
}

const Action = {
  // done
  addVS,
  populateVS,
  setRoot,

  initEntity,
  updateEntity,
  revertEntity,
  deleteEntity,

  // TODO: test
  clearVS,
  addEntity,

  initLink,
  updateLink,
  // link,
  // delink
};

export const Atype = {
  ADD_VS,
  CLEAR_VS,
  SET_ROOT
};

export default Action;
