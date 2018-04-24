import { graphReducerFactory, defaultEdgeListReducer, edgeDirection } from './graph/graphReducer';
import { Atype as gAtype } from './graph/graphActions';
import { Atype as vsAtype } from './vsActions';

const graphReducer = graphReducerFactory();

const vsreducer = (state = {}, action) => {
  const { vsId } = action;
  const vs = state[vsId];
  let packedAction = action;

  switch (action.type) {
    case vsAtype.CLEAR_VS: {
      const newState = Object.assign({}, state);
      delete newState[vsId];
      return newState
    }
    case vsAtype.ADD_VS: {
      const { actions = [{}] } = action;
      const newState = actions.reduce(graphReducer, undefined);
      return Object.assign({}, state, { [vsId]: newState });
    }
    case vsAtype.SET_ROOT: {
      const { vsId, rootId } = action;
      const newVS = Object.assign({}, state[vsId], { rootId });
      return Object.assign({}, state, { [vsId]: newVS });
    }
  }

  return vs ? Object.assign({}, state, { [vsId]: graphReducer(state, packedAction) }) : state;
}

export default vsreducer;
