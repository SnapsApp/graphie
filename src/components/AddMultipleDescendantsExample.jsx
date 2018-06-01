// a component with an entity id should be able to add children and their children

import React, { Component, Fragment } from 'react';
import vsConsumer from './vs/vsConsumer';

class AddMultipleDescendantsExample extends Component {
  render() {
    return <div>Box</div>;
  }
}

export default vsConsumer(AddMultipleDescendantsExample);
