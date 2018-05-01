/*
wraps a component to give it entity data and updater functions
use within a vs provider

E.x. use:

<VSProvider vsId="pekapeka">
  <SUPERCOOLEntity id="necessary" parentId="required_for_edge_functions_to_work" />
</VSProvider>

where:

SUPERCOOLEntity = vsEntity(SUPERCOOLEntityRendererOrFormOrWhatever)
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import vsConsumer, { VS_CONTEXT_PROPS } from './vsConsumer';
import { updateEntity, revertEntity, deleteEntity, linkEntities, delinkEntities, updateEdgeToParent } from '../../redux/vsReducer/vsActions';
import { mapEntity, mapEdge } from '../../redux/getters';

export const VS_ENTITY_PROPS = {
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string, // Required for edge functionality

  // MAPPED
  // entity - TODO: split into two wrappers (one for entity and one for edge to parent)
  entity: PropTypes.object.isRequired,
  apiUpdateEntity: PropTypes.func.isRequired,
  apiRevertEntity: PropTypes.func.isRequired,
  apiDeleteEntity: PropTypes.func.isRequired,
  // apiAddChild: PropTypes.func.isRequired,

  // edge to parent
  edgeToParent: PropTypes.object,
  apiLink: PropTypes.func.isRequired,
  apiDelink: PropTypes.func.isRequired,
  ...VS_CONTEXT_PROPS
}

const mapStateToProps = (state, props) => ({
  entity: mapEntity(state, props),
  edgeToParent: mapEdge(state, props)
})

const mapDispatchToProps = (dispatch, { parentId, vsContext: { vsId }, id }) => bindActionCreators({
  apiUpdateEntity: updateEntity(vsId, id),
  apiRevertEntity: revertEntity(vsId, id),
  apiDeleteEntity: deleteEntity(vsId, id),
  // apiAddChild: addChild(vsId, props.id),

  apiLink: linkEntities(vsId),
  apiDelink: delinkEntities(vsId),
  apiUpdateEdgeToParent: updateEdgeToParent(vsId, parentId, id),
}, dispatch)

const vsEntity = Child => {
  class ConnectVsEntity extends Component {
    static propTypes = VS_ENTITY_PROPS

    render() {
      return <Child { ...this.props } />
    }
  }
  return vsConsumer(connect(mapStateToProps, mapDispatchToProps)(ConnectVsEntity));
}

export default vsEntity;


