# SourceMonitor

## canDrag
- I'm a source, can I be dragged?

Returns true if no drag operation is in progress, and the owner's canDrag() returns true or is not defined.

## isDraggin
- Am I being dragged? (or is my isDragging set to true)

Returns true if a drag operation is in progress, and either the owner initiated the drag, or its isDragging() is defined and retur
ns true.

---
# TargetMonitor

## canDrop
- Can I be dropped on?

Returns true if there is a drag operation in progress, and the owner's canDrop() returns true or is not defined.

## isOver
- Is the pointer over me?

Returns true if there is a drag operation in progress, and the pointer is currently hovering over the owner. You may optionally
 pass { shallow: true } to strictly check whether only the owner is being hovered, as opposed to a nested target.

---
# Methods on all monitors

## getItemType()
Current dragged TYPE

## getItem()
Current item defined in beginDrag(). null if not dragging;

## getInitialClientOffset()
Coordinates of __pointer__ on drag __start__

## getInitialSourceClientOffset()
Coordinates of __source__ on drag __start__

## getClientOffset()
Coordinates of __pointer__ (or close approx)

## getSourceClientOffset()
Coordinates of __source__ (or close approx)

## getDifferenceFromInitialOffset();
Position difference of __pointer__ since drag start

## didDrop()
Did it drop on any target already?
Use with endDrag to see if it dropped on target. use with drop() to see if it's already been dropped

## getDropResult()
Object returned from target drop() functions - parents take precedence
