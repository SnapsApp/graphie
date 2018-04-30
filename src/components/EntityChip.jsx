import React, { Component } from 'react';
import PropTypes from 'prop-types';
import vsEntity, { VS_ENTITY_PROPS } from './vs/vsEntity';
import simpleState from './simpleState';

const chip = (color = 'lavender') => ({
  border: '1px solid black',
  padding: '10px',
  margin: '10px 0',
  width: '20%',
  wordWrap: 'break-word',
  background: color
})

class EntityChip extends Component {
  static propTypes = {
    ...VS_ENTITY_PROPS,
    background: PropTypes.string,
    isLinked: PropTypes.bool
  }

  delete = () => this.props.apiDeleteEntity();
  delink = () => {}
  link = () => {}

  render() {
    const { entity, background, isLinked } = this.props;
    const { id, name, isHidden, entityType } = entity;
    return (
      <div style={ chip(background) }>
        { !isLinked && <button onClick={ this.link }>Link Me</button> }
        { isLinked && <button onClick={ this.delink }>Delink Me</button> }
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
