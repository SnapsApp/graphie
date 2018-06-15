import gActions, { Atype as gAtype } from '../graphReducer/graphActions';
import { parseVSdata, getEdgeId } from './common';
import { generateEntityFromSchema } from '../schemaReducer/schemaGetters';

const ADD_VS = 'vs/add_vs';
const CLEAR_VS = 'vs/clear_vs';
const SET_ROOT = 'vs/set_root';
const ADD_CHILD = 'vs/add_child';
const REORDER_CHILDREN = 'vs/reorder_children';
const ADD_AND_LINK_ENTITY = 'vs/add_and_link_entity';

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

export const revertEntity = (vsId, id) => () => ({
  type: gAtype.UPDATE_NODE,
  vsId,
  id,
  change: null,
  updateStatus: 'unchanged'
})

export const deleteEntity = (vsId, id) => () => Object.assign(gActions.deleteNode({ id }), { vsId });

export const linkEntities = vsId => (parentId, childId, edgeData) =>
  Object.assign(gActions.addEdge({
    id: getEdgeId(parentId, childId),
    data: edgeData,
    origin: parentId,
    destin: childId
  }), { vsId, updateStatus: 'new' });

export const delinkEntities = vsId => (parentId, childId) =>
  Object.assign(gActions.deleteEdge({ id: getEdgeId(parentId, childId) }), { vsId });

export const updateEdgeToParent = (vsId, parentId, id) => data => Object.assign(gActions.updateEdge({ id: getEdgeId(parentId, id), data }),
  { vsId, updateStatus: 'updated' });

export const updateOrdering = (vsId, parentId) => orderedChildIds => ({
  type: REORDER_CHILDREN,
  vsId,
  parentId,
  actions: orderedChildIds.map((id, i) =>
    updateEdgeToParent(vsId, parentId, id)({ orderIndex: i })
  )
});

// TODO: test...
// NOTE: cannot be used with bindactioncreator in the same way
const addNewEntity = (vsId, dispatch = () => {}, parentId) => (schema, initialValues, initialEdgeData) => {
  const id = initialValues.id || 'new-id-run-bson-object-id-here';
  const entityFromSchema = generateEntityFromSchema(schema);
  const newEntity = Object.assign({}, entityFromSchema, initialValues);
  const addAction = Object.assign(gActions.addNode({
    id,
    data: newEntity,
    nodeType: schema.service
  }), { vsId, updateStatus: 'new' });

  let action;
  if (!parentId) action = addAction;
  else {
    const linkAction = linkEntities(vsId)(parentId, id, initialEdgeData);
    const addAndLink = {
      type: ADD_AND_LINK_ENTITY,
      vsId,
      actions: [addAction, linkAction]
    }
    action = addAndLink;
  }

  return {
    id,
    action, // for testing purposes
    dispatch: () => dispatch(action)
  }
}

const initLink = vsId => edge => Object.assign(gActions.addEdge(edge),
  { vsId, updateStatus: 'unchanged' });

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
  // done
  addVS,
  populateVS,
  setRoot,

  initEntity,
  updateEntity,
  revertEntity,
  deleteEntity,

  initLink,
  linkEntities,
  delinkEntities,
  updateEdgeToParent,
  updateOrdering,
  addNewEntity,
  clearVS,

  // addEntityToParent ?

  // revertLink ?
  // graph ?
};

export const Atype = {
  ADD_VS,
  CLEAR_VS,
  SET_ROOT,
  REORDER_CHILDREN,
  ADD_AND_LINK_ENTITY
};

export default Action;
