/*
simpleState(formId, flatStateObject)(Child)

passes a prop called [formId] with values and changehandlers for each field

this.props[formId] = {
  values: { [someField]: someValue, ...etc },
  changeHandlers: { [someField]: someValue, ...etc },
  reset
}
*/

import React, { Component } from 'react';

const simpleState = (formId, formFromProps) => Child => {
  class wrapSimpleState extends Component {
    constructor(props) {
      super(props);
      const form = formFromProps(this.props);
      const changeHandlers = Object.keys(form).reduce((map, field) => {
        map[field] = this.makeHandleChange(field);
        return map;
      }, {});

      this.state = {
        values: Object.assign({}, form),
        changeHandlers,
        reset: this.reset
      };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      return Object.assign({}, prevState, {
        values: Object.assign({}, formFromProps(nextProps)),
      })
    }

    reset = () => this.setState(wrapSimpleState.getDerivedStateFromProps(this.props, this.state))

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
