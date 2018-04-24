import gActions from './graph/graphActions';
import { parseVSdata } from '../vs/common';

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

const graphActionFactories = Object.keys(gActions).reduce((actions, name) => {
  actions[name] = vsId => (...args) => {
    const action = gActions[name](...args);
    action.vsId = vsId;
    return action;
  }
  return actions;
}, {});

const graph = graphActionFactories;
const populateVS = (vsId, response) => {
  const { nodes, edges, rootId } = parseVSdata(response);
  const actions = Object.keys(nodes)
    .map(id => graph.addNode(vsId)(nodes[id]))
    .concat(
      Object.keys(edges)
        .map(id => graph.addEdge(vsId)(edges[id]))
    )

  return addVS(vsId, actions, rootId);
}

const Action = {
  addVS,
  populateVS,
  clearVS,
  setRoot,
  ...graphActionFactories
};

export const Atype = {
  ADD_VS,
  CLEAR_VS,
  SET_ROOT
};

export default Action;
