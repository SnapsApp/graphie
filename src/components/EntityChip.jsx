import React, { Component } from 'react';
import vsEntity, { VS_ENTITY_PROPS } from './vs/vsEntity';
import simpleState from './simpleState';

const chip = (color = 'lavender') => ({
  border: '1px solid black',
  padding: '10px',
  width: '20%',
  wordWrap: 'break-word',
  background: color
})

class EntityChip extends Component {
  static propTypes = {
    ...VS_ENTITY_PROPS
  }

  delete = () => this.props.apiDeleteEntity();
  delink = () => {}

  render() {
    const { entity } = this.props;
    const { id, name, isHidden, entityType } = entity;
    return (
      <div style={ chip() }>
        <h3>{ entityType }</h3>
        <p>Name: { name }</p>
        <p>Hidden: { JSON.stringify(isHidden) }</p>
        <p>Id: { id }</p>
        <p>OrderIndex: { this.props.edgeToParent.orderIndex }</p>
      </div>
    )
  }
}


export default vsEntity(EntityChip);
