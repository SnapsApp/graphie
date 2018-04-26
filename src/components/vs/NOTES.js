/*
receive fetch -> connect to redux
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
