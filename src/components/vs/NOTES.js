/*
test

update entity update
clear entity
delete (and delink) entity

update edge data
clear edge data
delete (delink)

add (and link) child

form via schema?
validate via schema?
*/

/*
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
