import React, { Component } from 'react';
import PropTypes from 'prop-types';
import vsConsumer, { VS_CONTEXT_PROPS } from './vsConsumer';

class VSGet extends Component {
  static propTypes = {
    ...VS_CONTEXT_PROPS,
    query: PropTypes.object.isRequired
  }
  render() {
    return (
      <div>{ Object.keys(this.props) }</div>
    )
  }
}
export default vsConsumer(VSGet);
