import gActions from './graph/graphActions';

const ADD_VS = 'vs/add_vs';
const CLEAR_VS = 'vs/clear_vs';
const SET_ROOT = 'vs/set_root';

const addVS = (vsId, actions) => ({
  type: ADD_VS,
  vsId,
  actions
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

const Action = {
  addVS,
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
