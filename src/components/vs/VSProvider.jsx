import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VSContext from './VSContext';
import { testResponse } from '../../redux/vsReducer/common';
import { getVS } from '../../redux/vsReducer/vsGetters';
import { populateVS } from '../../redux/vsReducer/vsActions';
import { addToDataBranch } from '../../redux/dataReducer';

export const VS_CONTEXT_PROPS = {
  vsContext: PropTypes.shape({
    vsId: PropTypes.string.isRequired,
    fetchData: PropTypes.func.isRequired
  })
}

const mapStateToProps = (state, props) => ({ populated: getVS(props.id)(state) !== undefined });
const mapDispatchToProps = dispatch => bindActionCreators({
  apiPopulateVS: populateVS,
  apiAddToDataBranch: addToDataBranch
}, dispatch);

class VSProvider extends Component {
  static propTypes = {
    structure: PropTypes.object.isRequired,
    apiPopulateVS: PropTypes.func.isRequired,
    rootId: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    id: 'generaterandomidhere' // TODO
  }

  state = {
    vsContext: undefined,
    ready: false,
    isFetching: false,
    error: undefined
  }

  componentDidMount() {
    if (this.props.rootId) this.fetchData(this.props.structure)();
    else this.props.apiPopulateVS(this.props.id);
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.props.populated && nextProps.populated) {
      this.readyVSContext(nextProps, nextState);
    }
  }

  readyVSContext() {
    this.setState({
      // vsContext: {} <-- ready vsContext here
      vsContext: {
        vsId: this.props.id,
        fetchData: this.fetchData(this.props.structure)
      },
      ready: true
    });
  }

  parseAndSetResp(resp) {
    this.props.apiAddToDataBranch(resp); // To mock snaps data branch
    this.props.apiPopulateVS(this.props.id, resp) // TODO
  }

  fetchData = vsStructure => () => {
    this.setState({ isFetching: true });

    new Promise((resolve, reject) => {
      setTimeout(() => resolve(testResponse), 1000); // TODO
    })
    .then(resp => this.setState({ isFetching: false }, () => this.parseAndSetResp(resp)))
    .catch(err => this.setState({ isFetching: false, error: err }))
  }

  render() {
    return (
      <VSContext.Provider value={ this.state.vsContext }>
        { this.props.children(this.state) }
      </VSContext.Provider>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VSProvider)
