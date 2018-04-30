import React, { Component } from 'react';
import vsEntity, { VS_ENTITY_PROPS } from './vs/vsEntity';
import simpleState from './simpleState';

const border = {
  margin: '10px',
  border: '1px solid black',
  padding: '10px',
}
const parentInfo = {
  display: 'flex',
  flexDirection: 'row'
}
const dataBlock = {
  textAlign: 'left',
  padding: '10px',
  width: '50%'
}

const childBlock = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}

const thisForm = 'entity-form';

const getInitialForm = props => {
  const { name, isHidden } = props.entity;
  return { name, isHidden };
}

class ExampleVSEntity extends Component {
  static propTypes = {
    ...VS_ENTITY_PROPS
  }

  // entity functions
  update = e => {
    e.preventDefault();
    // do any other preprocessing or data packing here
    this.props.apiUpdateEntity(this.props[thisForm].values);
  }
  clear = () => this.props[thisForm].reset();
  revert = () => this.props.apiRevertEntity();
  delete = () => this.props.apiDeleteEntity();
  // addChild = () => this.props.addChild();

  //
  delink = () => {}

  render() {
    const { entity } = this.props;
    const { id, name, isHidden, entityType } = entity;
    return (
      <div style={ border }>
        <div style={ parentInfo }>
          <div style={ dataBlock }>
            <h3>{ entityType }</h3>
            <p>Name: { name }</p>
            <p>Hidden: { JSON.stringify(isHidden) }</p>
            <p>Id: { id }</p>
            <p>OrderIndex: { this.props.edgeToParent.orderIndex }</p>
            <button onClick={ this.revert }>Revert</button>
            <button onClick={ this.delete }>Delete</button>
            <button onClick={ this.delink }>Delink</button>
          </div>
          <div style={ dataBlock }>
            <h3>Edit data</h3>
            <form onSubmit={ this.update }>
              <p>
                <label>Name:
                  <input
                    type="text"
                    value={ this.props[thisForm].values.name }
                    onChange={ this.props[thisForm].changeHandlers.name }
                  />
                </label>
              </p>
              <p>
                <label>Hidden:
                  <input
                    type="checkbox"
                    checked={ this.props[thisForm].values.isHidden }
                    onChange={ this.props[thisForm].changeHandlers.isHidden }
                  />
                </label>
              </p>
              <button type="submit">Save</button>
              <button type="button" onClick={ this.clear }>Clear</button>
            </form>
          </div>
        </div>
        <div style={ childBlock }>
          { this.props.children }
        </div>
      </div>
    )
  }
}


export default vsEntity(simpleState(thisForm, getInitialForm)(ExampleVSEntity));
