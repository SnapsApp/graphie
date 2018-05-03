import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'

export const ENTITY_DROP_BOX_PROPS = {
  connectDropTarget: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

const entityDropTarget = [
  ItemTypes.ENTITY,
  {},
  (connect) => ({
    connectDropTarget: connect.dropTarget(),
  })
]

class SortEntityDropBox extends Component {
  render() {
    const { className, style, connectDropTarget } = this.props;

    return connectDropTarget(
      <div className={ className } style={ style }>
        { this.props.children }
      </div>
    );
  }
}

export default DropTarget(...entityDropTarget)(SortEntityDropBox);
