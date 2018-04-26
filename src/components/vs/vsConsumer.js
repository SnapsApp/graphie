import React, { Component } from 'react'
import VSContext from './VSContext';
import { VS_CONTEXT_PROPS } from './VSProvider';

export { VS_CONTEXT_PROPS };

const vsConsumer = Child =>
  class ConnectVSContext extends Component {
    render() {
      return (
        <VSContext.Consumer>
        { context =>
          <Child { ...this.props } vsContext={ context } />
        }
        </VSContext.Consumer>
      )
    }
  }

export default vsConsumer;
