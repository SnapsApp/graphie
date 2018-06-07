import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import sortEntityDragCard from '../DragAndDrop/sortEntityDragCard';

class VSDraggable extends Component {
  static propTypes = {
    ...sortEntityDragCard.PROPS,

    id: PropTypes.string.isRequired,
    reorder: PropTypes.func.isRequired,
    getIndex: PropTypes.func.isRequired,

    style: PropTypes.object,
    className: PropTypes.string,
  }

  render() {
    const {
      isDragging, // SORT_ENTITY_DRAG_CARD_PROPS
      connectDragSource,
      connectDropTarget,

      children,
      style,
      className
    } = this.props
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      connectDropTarget(
        <div style={ { ...style, opacity } } className={ className }>
          { children }
        </div>
      ),
    )
  }
}

export default sortEntityDragCard(VSDraggable);
