/*
receive fetch -> connect to redux
*/

/* VS Context
  import React from 'react';
  export React.createContext({});
*/

/* VS Provider
  @connect
  import VsContext from './VsContext';
  VsProvider
  props = { structure }
  state = {
    vsContext: {
      vsId,
      getIdsFrom: getIdsFactory(vsId),
      graphFrom: graphFactory(vsId),
      clearFrom: clearFactory(vsId),
      refetch: this.refetch,
      loading,
      error
    }
  }
  componentWillUpdate() {
    if (vsId) setState=({
      vsContext: {
        ...bindActionCreators(vsContext.graph, dispatch),
        ...restOfVSContext
      }
      loading: false
    });
  }
  render() {
    <VsContext.Provider value={ this.state.vsContext(bindToDispatch) }>
    </VsContext.Provider>
  }
*/

getIdsFactory = vsId => state => query => {
/*
  // example query
  {
    analyticspages: {
      _filter: entity => entity.id === pageId,
      analyticsreports: {
        _filter: (entity, edgeWithParent) => entity.retired === 'false',
        id
      }
    }
  }
  //
  state.vs.analytics.reports.scripts
  filter out entities with x...
  for each entity...
    make array of [child, edge]
    array.filter(filterfn).map(child => requiredInfo)
  return ObjectWithRequiredInfo
*/
}
/*

  VsGet path={}
*/
/*
  @vsConsumer
  @connect((state, props) => ({ ids: props.getIdsFrom(state)(props.path, props.filter) }))
  VsGet
  {
    props: where, path
  }
*/

/*
  consst reportsForThisPage = props => {
    {
      analyticspages: {
        _filter: entity => entity.id === props.pageId,
        analyticsreports: {
          _filter: (entity, edgeWithParent) => entity.retired === 'false',
          _edgeToParent,
          id,
        }
      }
    }
  }
  @withRouter
  AnalyticsPage
  componentWillReceiveProps() {
    this.setState({ reportsForThisPage: reportsForThisPage(nextProps) });
  }

  render() {
  <VsProvider structure={ someStructure }>
    { ({ loading, error }) => loading ? (
        <div>yo, i'm loading</div>
      ) : (
        <VsGet query={ this.state.reportsForThisPage }>
          ({ ids }) => ids.map(<VsEntity extraProps={ someProps } />)
        </VsGet>
      )
      <SaveButton onClick={ vsContext.graph } />
    }
  <Vs.Provider>
*/

/*

  VsProvider
  this.state.vsContext = {

  }
*/

/*
  import VsContext from './VsContext';
  vsConsumer
  <Vs.Consumer>
    { ({ vsContext }) => <Child vsContext={ vsContext } /> }
  </Vs.Consumer>
*/
/*
  connectEntity
  state.virtualizeStructure.vsId
*/
/*
  @vsConsumer
  @connectEntity
  VsEntity
*/
