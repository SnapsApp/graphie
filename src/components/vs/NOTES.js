/*
TODO: fix nodereducer... the parent node service is wrong. WRONG
TODO: figure out what ^-- means
TODO: write up examples
TODO: addEntity - should that be placed in VSProvider or VSEntity? Or left as a totally pure function taking schema and parentId?

thoughts:
* when will you have a case of editing multiple entities before clicking save? (rules and rulesets)

* VSChildren ->
* Entity -> reorderable -> receive reorderOnHover and reorderOnDrop


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
