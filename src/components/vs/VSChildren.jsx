import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import vsConsumer, { VS_CONTEXT_PROPS } from './vsConsumer';
import { getOrderedChildren } from '../../redux/vsReducer/vsGetters';
import { updateOrdering } from '../../redux/vsReducer/vsActions';
import SortEntityDropBox from '../DragAndDrop/SortEntityDropBox';

const mapChildren = (state, props) => ({
  results: getOrderedChildren(state, props)
})
const mapUpdate = (dispatch, props) => bindActionCreators({
  apiUpdateOrdering: updateOrdering(props.vsContext.vsId, props.parentId)
}, dispatch)

const idsHaveChanged = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

class VSChildren extends Component {
  static propTypes = {
    ...VS_CONTEXT_PROPS,

    results: PropTypes.array.isRequired,
    parentId: PropTypes.string.isRequired,
    service: PropTypes.string
  }

  state = { orderedChildren: this.props.results }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { orderedChildren: nextProps.results }
  }

  makeUpdate = () => this.props.apiUpdateOrdering(this.state.orderedChildren);

  reorder = (id, newIdx, dispatchUpdate = false) => {

    if (!id && dispatchUpdate) return this.makeUpdate();

    const { orderedChildren: prevOrder } = this.state;

    const nextOrder = [].concat(prevOrder);
    const prevIdx = prevOrder.indexOf(id);
    nextOrder.splice(prevIdx, 1);
    const orderedChildren = [].concat.call(nextOrder.slice(0, newIdx), id, nextOrder.slice(newIdx));

    const cb = dispatchUpdate ? this.makeUpdate : () => {};

    console.log('reordering', id, newIdx, orderedChildren);

    this.setState({ orderedChildren }, cb)
  }

  getIndex = (id) => this.state.orderedChildren.indexOf(id);

  render() {
    console.log('vschildren is rerendering')
    const { className, style, children } = this.props;
    return (
      <SortEntityDropBox className={ className } style={ style }>
        { children({
          results: this.state.orderedChildren,
          reorder: this.reorder,
          getIndex: this.getIndex
        }) }
      </SortEntityDropBox>
    );
  }
}
export default vsConsumer(connect(mapChildren, mapUpdate)(VSChildren));
