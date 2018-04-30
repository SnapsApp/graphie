import React, { Component } from 'react';
import PropTypes from 'prop-types';
import vsEntity, { VS_ENTITY_PROPS } from './vs/vsEntity';

const style = {
  margin: '10px',
  border: '1px solid black',
  padding: '10px'
}

class BasicVSEntity extends Component {
  static propTypes = {
    ...VS_ENTITY_PROPS
  }
  render() {
    return (
      <div style={ style }>
        <div>{ this.props.entity.id }: { this.props.entity.name }</div>
        <div>myOrderIndex: { this.props.edgeToParent.orderIndex }</div>
      </div>
    )
  }
}


export default vsEntity(BasicVSEntity);
