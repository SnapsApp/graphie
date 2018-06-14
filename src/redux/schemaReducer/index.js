const ADD_SCHEMAS = 'schemas/add_schemas';
const CLEAR_SCHEMAS = 'schemas/clear';

export const addSchemas = schemas => ({
  type: ADD_SCHEMAS,
  schemas
});

export const clearSchemas = () => ({ type: CLEAR_SCHEMAS });

function schemaReducer(state = {}, action) {
  switch (action.type) {
    case ADD_SCHEMAS: return Object.assign({}, state, action.schemas)
    case CLEAR_SCHEMAS: return {};
    default: return state
  }
}

export default schemaReducer;
