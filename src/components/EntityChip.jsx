import React, { Component } from 'react';
import PropTypes from 'prop-types';
import vsEntity, { VS_ENTITY_PROPS } from './vs/vsEntity';
import simpleState from './simpleState';

const chip = (color = 'lavender') => ({
  border: '1px solid black',
  padding: '10px',
  margin: '10px 0',
  width: '45%',
  wordWrap: 'break-word',
  textAlign: 'left',
  background: color
})

const edgeFormId = 'edge-form-id';
const propsToForm = ({ edgeToParent = {} }) => {
  const { orderIndex, wildcard } = edgeToParent;
  return { orderIndex, wildcard };
}

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
  updateEdge = () => {
    const edgeData = this.props[edgeFormId].values;
    this.props.apiUpdateEdge(edgeData);
  }

  render() {
    const { entity, edgeToParent, background, isLinked, [edgeFormId]: edgeForm } = this.props;
    const { id, name, isHidden, entityType } = entity;

    return (
      <div style={ chip(background) }>
        { !isLinked && <button onClick={ this.link }>Link Me</button> }
        { isLinked && <button onClick={ this.delink }>Delink Me</button> }
        <h3>{ entityType }</h3>
        <p>{ id }</p>
        <p>Name: { name }</p>
        {
          <form onSubmit={ this.updateEdge }>
          {
            Object.keys(edgeForm.values).map(field => (
              <p key={ field }>
                { field }
                <input
                  type="text"
                  value={ edgeForm.values[field] || '' }
                  onChange={ edgeForm.changeHandlers[field] }
                />

              </p>
            ))
          }
          <button type="submit">Save</button>
          <button type="button" onClick={ edgeForm.reset }>Clear</button>
          </form>
        }
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


export default vsEntity(simpleState(edgeFormId, propsToForm)(EntityChip));
