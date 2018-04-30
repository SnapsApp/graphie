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
import { updateEntity } from '../../redux/vsReducer/vsActions';
import { mapEntity, mapEdge } from '../../redux/getters';

export const VS_ENTITY_PROPS = {
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string, // Required for edge functionality

  // mapped
  entity: PropTypes.object.isRequired,
  apiUpdateEntity: PropTypes.func.isRequired,
  edgeToParent: PropTypes.object,
  ...VS_CONTEXT_PROPS
}

const mapStateToProps = (state, props) => ({
  entity: mapEntity(state, props),
  edgeToParent: mapEdge(state, props)
})

const mapDispatchToProps = (dispatch, props) => bindActionCreators({
  apiUpdateEntity: updateEntity(props.vsContext.vsId, props.id)
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


