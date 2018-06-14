import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VSContext from './VSContext';
import { testResponse, testSchemas } from '../../redux/vsReducer/common';
import { getVS } from '../../redux/vsReducer/vsGetters';
import { populateVS } from '../../redux/vsReducer/vsActions';
import { addToDataBranch } from '../../redux/dataReducer';
import { addSchemas } from '../../redux/schemaReducer';


const testStyle = {
  padding: '10px',
  background: 'lightblue'
}

export const VS_CONTEXT_PROPS = {
  vsContext: PropTypes.shape({
    vsId: PropTypes.string.isRequired,
    fetchData: PropTypes.func.isRequired,
    ready: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.any,
  })
}

const mapStateToProps = (state, props) => ({ populated: getVS(state, props) !== undefined });
const mapDispatchToProps = dispatch => bindActionCreators({
  apiPopulateVS: populateVS,
  apiAddSchemas: addSchemas,
  apiAddToDataBranch: addToDataBranch
}, dispatch);

class VSProvider extends Component {
  static propTypes = {
    structure: PropTypes.object.isRequired,
    apiPopulateVS: PropTypes.func.isRequired,
    rootId: PropTypes.string,
    vsId: PropTypes.string,
  };

  static defaultProps = {
    vsId: 'generaterandomidhere' // TODO
  }

  state = {
    ready: false,
    isFetching: false,
    error: undefined,
    rootId: this.props.rootId
  }

  componentDidMount() {
    if (this.props.rootId) this.fetchData(this.props.structure)();
    else this.props.apiPopulateVS(this.props.vsId);
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.props.populated && nextProps.populated) {
      this.readyVSContext(nextProps);
    }
  }

  readyVSContext(props) {
    this.setState({
      vsId: props.vsId,
      fetchData: this.fetchData(props.structure),
      ready: true
    });
  }

  parseAndSetResp(resp) {
    this.props.apiAddToDataBranch(resp); // To mock snaps data branch
    this.props.apiPopulateVS(this.props.vsId, resp) // TODO
  }

  setSchemas(schemas) {
    this.props.apiAddSchemas(schemas.reduce((acc, sch) => {
      acc[sch.service] = sch;
      return acc;
    }, {}));
  }

  fetchData = vsStructure => () => {
    this.setState({ isFetching: true });

    const getVS = new Promise((resolve, reject) => {
      setTimeout(() => resolve(testResponse), 1000); // TODO
    });

    const getSchemas = new Promise((resolve, reject) => {
      setTimeout(() => resolve(testSchemas), 500)
    });

    Promise.all([getVS, getSchemas])
    .then(resp => this.setState({ isFetching: false }, () => {
      this.parseAndSetResp(resp[0]);
      this.setSchemas(resp[1]);
    }))
    .catch(err => this.setState({ isFetching: false, error: err }))
  }

  render() {
    return (
      <VSContext.Provider value={ this.state }>
        <div style={ testStyle }>
        { this.props.children(this.state) }
        </div>
      </VSContext.Provider>
    )
  }
}
VSProvider.PROPS = VS_CONTEXT_PROPS;

export default connect(mapStateToProps, mapDispatchToProps)(VSProvider)
