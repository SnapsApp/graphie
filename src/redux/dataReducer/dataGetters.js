export const getEntityData = (state, { service, id }) => state.data[service][id];
export const getEdgeData = (state, { service, id, parentService, parentId }) => {
  const parent = state[parentService][parentId];
  return parent.edges[service].edges[id];
}

// export const getEdgeState = (state, { id, parentId, vsId }) => {
//   const edgeId = [id, parentId].sort().join('-');
//   return getVS(vsId)(state).edges[edgeId];
// }
