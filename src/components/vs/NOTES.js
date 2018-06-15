/*
TODO: fix nodereducer... the parent node service is wrong. WRONG
TODO: figure out what ^-- means
TODO: write up examples
TODO: orderIndex is still a lil f'd when it's > 0. AND test is not passing
TODO: it's unclear how we currently handle linking. is a link automatically two-way? Or no?


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
