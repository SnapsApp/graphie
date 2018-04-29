
const ADD_ENTITY = 'data/add_entity';
const REMOVE_ENTITY = 'data/remove_entity';
const POPULATE_DATA_BRANCH = 'data/populate_data_branch';

export const addEntity = (service, entity) => ({
  type: ADD_ENTITY,
  service,
  entity
});

export const socketUpdate = addEntity;

export const removeEntity = (service, entity) => ({
  type: REMOVE_ENTITY,
  service,
  entity
});

function getEntitiesFromResponse(service, layer) {
  if (!layer) return [];
  const entities = layer.data.map(entity => ({ service, entity }));
  const services = Object.keys(layer);

  const deeperEntities = [].concat.apply([],
    services.filter(s => s !== 'data')
      .map(s => getEntitiesFromResponse(s, layer[s]))
  );

  return entities.concat(deeperEntities);
}

export const addToDataBranch = (response = {}) => {
  const service = Object.keys(response)[0];
  const entities = getEntitiesFromResponse(service, response[service]);
  console.log('ENT', entities);
  return {
    type: POPULATE_DATA_BRANCH,
    actions: entities.map(({ service, entity }) => addEntity(service, entity))
  }
};

function dataReducer(state = {}, action) {
  switch (action.type) {
    case ADD_ENTITY: {
      const { service, entity } = action;
      const newService = Object.assign({}, (state[service] || {}));
      newService[entity.id] = entity;

      return Object.assign({}, state, { [service]: newService });
    }
    case REMOVE_ENTITY: {
      const { service, entity } = action;
      const newService = Object.assign({}, (state[service] || {}));
      delete newService[entity.id];

      return Object.assign({}, state, { [service]: newService });
    }
    case POPULATE_DATA_BRANCH: {
      const { actions } = action;
      return actions.reduce(dataReducer, state);
    }
    default: return state
  }
}

export default dataReducer;
