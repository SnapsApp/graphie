import React, { Component } from 'react';
import vsEntity, { VS_ENTITY_PROPS } from './vs/vsEntity';
import simpleState from './simpleState';

const style = {
  margin: '10px',
  border: '1px solid black',
  padding: '10px',
  display: 'flex',
}
const dataBlock = {
  textAlign: 'left',
  padding: '10px',
  width: '50%'
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

  update = e => {
    e.preventDefault();
    // do any other preprocessing or data packing here
    this.props.apiUpdateEntity(this.props[thisForm].values);
  }
  revert = () => {}
  delete = () => {}
  delink = () => {}

  render() {
    const { entity } = this.props;
    const { id, name, isHidden } = entity;
    return (
      <div style={ style }>
        <div style={ dataBlock }>
          <h3>Current data</h3>
          <p>Name: { name }</p>
          <p>Hidden: { isHidden }</p>
          <p>Id: { id }</p>
          <p>OrderIndex: { this.props.edgeToParent.orderIndex }</p>
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
                  value={ this.props[thisForm].values.isHidden }
                  onChange={ this.props[thisForm].changeHandlers.isHidden }
                />
              </label>
            </p>
            <button type="submit">Save</button>
            <button>Clear</button>
          </form>
          <button onClick={ this.revert }>Revert</button>
          <button onClick={ this.delete }>Delete</button>
          <button onClick={ this.delink }>Delink</button>
        </div>
      </div>
    )
  }
}


export default vsEntity(simpleState(thisForm, getInitialForm)(ExampleVSEntity));
