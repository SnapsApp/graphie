/*
simpleState(formId, flat state object)(Child)

passes a prop called [formId] with values and changehandlers for each field
{
  values: { [someField]: someValue, ...etc },
  changeHandlers: { [someField]: someValue, ...etc },

}
*/

import React, { Component } from 'react';

const simpleState = (formId, initFormFromProps) => Child => {
  class wrapSimpleState extends Component {
    constructor(props) {
      super(props);
      const initialState = initFormFromProps(this.props);
      const fields = Object.keys(initialState);
      this.state = fields.reduce((map, field) => {
        map.values[field] = initialState[field];
        map.changeHandlers[field] = this.makeHandleChange(field);
        return map;
      }, {
        values: {},
        changeHandlers: {}
      });
    }

    makeHandleChange = field => e => {
      let value;
      switch (e.target.type) { // TODO: add more input type cases
        case 'checkbox': {
          value = e.target.checked;
          break;
        }
        default: value = e.target.value
      }
      const newValues = Object.assign({}, this.state.values, {
        [field]: value
      });

      this.setState({ values: newValues });
    }

    render() {
      return <Child { ...this.props } { ...{ [formId]: this.state } } />
    }
  }
  return wrapSimpleState
}

export default simpleState;
