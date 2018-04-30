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
    isLinked: PropTypes.bool,
    linkTo: PropTypes.string
  }

  delete = () => this.props.apiDeleteEntity();
  delink = () => this.props.apiDelink(this.props.parentId, this.props.id);
  link = () => this.props.apiLink(this.props.linkTo, this.props.id);

  render() {
    const { entity, edgeToParent, background, isLinked } = this.props;
    const { id, name, isHidden, entityType } = entity;
    return (
      <div style={ chip(background) }>
        { !isLinked && <button onClick={ this.link }>Link Me</button> }
        { isLinked && <button onClick={ this.delink }>Delink Me</button> }
        <h3>{ entityType }</h3>
        <p>Name: { name }</p>
        {
          isLinked &&
          Object.keys(edgeToParent).map(edgeKey =>
            <p key={ edgeKey }>{ edgeKey }: { edgeToParent[edgeKey] }</p>
          )
        }
      </div>
    )
  }
}


export default vsEntity(EntityChip);
