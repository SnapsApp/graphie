const data = state => state.data;

export const getEntityData = (state, { service, id }) => data(state)[service][id];
export const getEdgeData = (state, { service, id, parentService, parentId }) => {
  const parent = data(state)[parentService][parentId];
  return parent.edges[service].edges[id];
}
