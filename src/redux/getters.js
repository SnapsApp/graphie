import { getEntityState, getEdgeState } from './vsReducer/vsGetters';
import { getEntityData, getEdgeData } from './dataReducer/dataGetters';

// TODO: figure out if every entity knows its service
export const mapEntity = (state, props) => {
  const node = getEntityState(state, props);
  const service = node.nodeType;

  return Object.assign({},
    getEntityData(state, { service, id: props.id }),
    node.data.entity
  );
}

// TODO: test
export const mapEdge = (state, props) => {
  const { vsId, parentId, id } = props;

  if (!parentId) return;

  const node = getEntityState(state, props);
  const parentNode = getEntityState(state, { vsId, id: parentId });

  const data = getEdgeData(state, {
    service: node.nodeType,
    id,
    parentId,
    parentService: parentNode.nodeType
  });

  const edge = Object.assign({},
    data,
    getEdgeState(state, props)
  );

  return edge;
}
