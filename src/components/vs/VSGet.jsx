import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import vsConsumer, { VS_CONTEXT_PROPS } from './vsConsumer';
import { getIds } from '../../redux/vsReducer/vsGetters';

const mapStateToProps = (state, props) => ({
  results: getIds(props.vsContext.vsId)(state, props.query)
})

const idsHaveChanged = (arr1, arr2) => {
  const a = arr1.sort().join('');
  const b = arr2.sort().join('');
  return a !== b;
}

class VSGet extends Component {
  static propTypes = {
    ...VS_CONTEXT_PROPS,
    query: PropTypes.object.isRequired,
    results: PropTypes.array.isRequired
  }

  shouldComponentUpdate(nextProps) { // TODO: test that this works
    return idsHaveChanged(nextProps.results, this.props.results);
  }

  render() {
    return this.props.children({ results: this.props.results });
  }
}
export default vsConsumer(connect(mapStateToProps)(VSGet));
