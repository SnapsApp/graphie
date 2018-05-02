import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import vsConsumer, { VS_CONTEXT_PROPS } from './vsConsumer';
import { getOrderedChildren } from '../../redux/vsReducer/vsGetters';

const mapStateToProps = (state, props) => ({
  results: getOrderedChildren(state, props)
})

const idsHaveChanged = (arr1, arr2) => {
  const a = arr1.sort().join('');
  const b = arr2.sort().join('');
  return a !== b;
}

class VSChildren extends Component {
  static propTypes = {
    ...VS_CONTEXT_PROPS,

    parentId: PropTypes.string.isRequired,
    service: PropTypes.string
  }

  shouldComponentUpdate(nextProps) { // TODO: test that this works
    return idsHaveChanged(nextProps.results, this.props.results);
  }

  render() {
    return this.props.children({ results: this.props.results });
  }
}
export default vsConsumer(connect(mapStateToProps)(VSChildren));
