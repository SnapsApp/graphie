/*
<SomeVSEntity id="" parentId="" />
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import vsConsumer, { VS_CONTEXT_PROPS } from './vsConsumer';
import { mapEntity, mapEdge } from '../../redux/vsReducer/vsGetters';

export const VS_ENTITY_PROPS = {
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string, // Required for edge functionality

  // mapped
  entity: PropTypes.object.isRequired,
  edgeToParent: PropTypes.object,
  ...VS_CONTEXT_PROPS
}

const mapStateToProps = (state, props) => ({
  entity: mapEntity(state, props),
  edgeToParent: mapEdge(state, props)
})

const vsEntity = Child => {
  class ConnectVsEntity extends Component {
    static propTypes = VS_ENTITY_PROPS

    render() {
      return <Child { ...this.props } />
    }
  }
  return vsConsumer(connect(mapStateToProps)(ConnectVsEntity));
}

export default vsEntity;


