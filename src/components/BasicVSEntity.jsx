import React, { Component } from 'react';
import vsEntity, { VS_ENTITY_PROPS } from './vs/vsEntity';

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

class BasicVSEntity extends Component {
  static propTypes = {
    ...VS_ENTITY_PROPS
  }

  update = e => {
    e.preventDefault();
  }
  clear = () => {}
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
            <p><label>Name: <input type="text" defaultValue={ name } /></label></p>
            <p><label>Hidden: <input type="checkbox" defaultValue={ isHidden } /></label></p>
            <button>Save</button>
          </form>
          <button onClick={ this.clear }>Clear</button>
          <button onClick={ this.delete }>Delete</button>
          <button onClick={ this.delink }>Delink</button>
        </div>
      </div>
    )
  }
}


export default vsEntity(BasicVSEntity);
