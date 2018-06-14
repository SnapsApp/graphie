const schemas = state => state.schemas;

export const getSchema = state => service => schemas(state)[service];
export const generateEntityFromSchema = schema => {
  const contract = schema.contractAttributes;
  return Object.keys(contract).reduce((entity, attr) => {
    entity[attr] = contract[attr].defaultsTo !== undefined ? contract[attr].defaultsTo : undefined;
    return entity;
  }, {});
}
