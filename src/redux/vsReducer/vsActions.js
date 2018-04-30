import gActions, { Atype as gAtype } from '../graphReducer/graphActions';
import { parseVSdata } from './common';

const ADD_VS = 'vs/add_vs';
const CLEAR_VS = 'vs/clear_vs';
const SET_ROOT = 'vs/set_root';

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

// TODO: test...
const addEntity = vsId => node => Object.assign(gActions.addNode(node),
  { vsId, updateStatus: 'new' });
const deleteEntity = vsId => node => Object.assign(gActions.deleteNode(node),
  { vsId, updateStatus: 'deleted' });

const initLink = vsId => edge => Object.assign(gActions.addEdge(edge),
  { vsId, updateStatus: 'unchanged' });
const updateLink = vsId => edge => Object.assign(gActions.updateEdge(edge),
  { vsId, updateStatus: 'updated' });
const link = vsId => edge => Object.assign(gActions.addEdge(edge),
  { vsId, updateStatus: 'new' });
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
  addVS,
  populateVS,
  clearVS,
  setRoot,
  // TODO: test
  initEntity,
  updateEntity,
  addEntity,
  deleteEntity,

  initLink,
  updateLink,
  link,
  delink
};

export const Atype = {
  ADD_VS,
  CLEAR_VS,
  SET_ROOT
};

export default Action;
