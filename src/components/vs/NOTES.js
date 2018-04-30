/*
thoughts:
* how will edge updating work?
* when will you have a case of editing multiple entities before clicking save? (rules and rulesets)

check:
what gets rerendered when the state changes?
- vulnerable points: VSFind

implement:
update entity update
clear entity
delete (and delink) entity

update edge data
clear edge data
delete (delink)

add (and link) child

graph
* check for deleted nodes and edges

form via schema?
validate via schema?
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
