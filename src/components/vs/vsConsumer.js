import React, { Component } from 'react'
import VSContext from './VSContext';
import { VS_CONTEXT_PROPS } from './VSProvider';

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

vsConsumer.PROPS = VS_CONTEXT_PROPS;

export default vsConsumer;
