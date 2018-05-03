import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { DragSource, DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'

export const SORT_ENTITY_DRAG_CARD_PROPS = {
  // requires
  id: PropTypes.string.isRequired,
  reorder: PropTypes.func.isRequired,
  getIndex: PropTypes.func.isRequired,

  // injects
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
}

const entityHoverTarget = [
  ItemTypes.ENTITY,             // TYPE
  {                             // Hover/drop functions
    canDrop: () => false,       // don't accept item. the DropBox component will accept the drop
    hover: (props, targetMonitor) => {
      const { id: source } = targetMonitor.getItem()
      const { id: target } = props

      console.log('i am hovering over', target)

      if (source !== target) {
        const targetIdx = props.getIndex(target);
        props.reorder(source, targetIdx)
      }
    }
  },
  (connect, targetMonitor) => ({      // Props generated from target/source
    connectDropTarget: connect.dropTarget(),
  })
];

const entitySource = [
  ItemTypes.ENTITY,
  {
    beginDrag: (props) => ({
      id: props.id,
      originalIndex: props.getIndex(props.id),
    }),
    endDrag: (props, sourceMonitor) => {
      const { id: source, originalIndex } = sourceMonitor.getItem()
      const didDrop = sourceMonitor.didDrop()

      if (!didDrop) props.reorder(source, originalIndex, true) // if dropped outside of targets, revert to original ordering
      else props.reorder(undefined, undefined, true)
    },
  },
  (connect, sourceMonitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: sourceMonitor.isDragging(),
  })
]

const sortEntityDragCard = Child => DropTarget(...entityHoverTarget)(DragSource(...entitySource)(Child))

export default sortEntityDragCard;
