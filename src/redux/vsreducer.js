import { graphReducerFactory, defaultEdgeListReducer, edgeDirection } from './graphreducer';

const DELETE_VS = 'vs/delete_vs';

const edgeListWithService = (edgeServices = {}, action) => {
  switch (action.type) {
    case Atype.ADD_EDGE:
    case Atype.DELETE_EDGE: {
      const { direction, outgoingService, incomingService } = action;
      const service = edgeDirection.OUTGOING ? outgoingService : incomingService;

      Object.assign({}, edgeServices,
        { [service]: defaultEdgeListReducer(edgeServices[service])
      });
    }
    default: return edgeServices
  }
}

const graphreducer = graphReducerFactory(undefined, edgeListWithService, undefined);

const vsreducer = (state = {}, action) => {
  const { vId } = action;
  const vs = state[vId];
  let packedAction = action;

  switch (action.type) {
    // pack action
    case Atype.ADD_EDGE: {
    case Atype.DELETE_EDGE: {
      const { origin, destin } = action;
      const originNode = vs.nodes[origin] || {};
      const destinNode = vs.nodes[destin] || {};

      const outgoingService = originNode.service;
      const incomingService = destinNode.service;

      packedAction = Object.assign({}, action, outgoingService, incomingService);
    }

    // vs actions
    case DELETE_VS: {
      const newState = Object.assign({}, state);
      delete newState[vId];
      return newState
    }
    case ADD_VS: {
      const { initActions = [] } = action;
      const newState = initActions.reduce(graphreducer, state);
      return Object.assign({}, state, { [vId]: newState });
    }
  }

  return vs ? Object.assign({}, state, { [vId]: graphreducer(state, packedAction) }) : state;
}

export default vsreducer;
