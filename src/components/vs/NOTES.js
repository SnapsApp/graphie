/*
receive fetch -> connect to redux
*/

/*
update =>
*/

/*
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
