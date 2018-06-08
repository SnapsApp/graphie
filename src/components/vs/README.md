
# How to use VSProvider
The VSProvider will provide the following props to VSContext.Consumer.
(May be out of date, check VSProvider.jsx to be sure.)

* vsId,
* fetchData - make virtualize structure call,
* ready - true when all the other props are initialized
* isFetching
* error

### Start with a VSProvider
This component takes a structure, fetches the data, populates the vs part of the redux state tree, and passes down the vsId via the context.
```jsx
  <VSProvider vsId="myFirstVS" rootId="59c19f324ca8fc015b183339" structure={ someStructure }>
    { ({ ready, isFetching, vsId, fetchData }) => (
      (!ready || isFetching) ? <div>...loading</div> : (
      <div>
        { Render Some vsConsumer wrapped components here }
      </div>
    )) }
  </VSProvider>
```

### Pass descendent components the context
One way to do this is via the vsConsumer component. It's a HOC that puts the context into a prop named 'vsContext.'
```jsx
const RenderComponent = ({ vsContext }) => <div>My vsId is { vsContext.vsId }</div>;
const VSConsumerComponent = vsConsumer(RenderComponent);
export VSConsumerComponent;
```

### Find the ids for the entities in the vs you want to update
First look for the entity id/s you care about.
VSFind and VSChildren are built-in ways to find ids (see Querying and Api - Components).
```jsx
<VSFind find="triggers.rulesets.rules">
  { ({ results }) => (
    results.map(id => ...)
  ) }
</VSFind>
```

Then write a component capable of dispatching entity updater actions. The vsEntity HOC is the built-in way to pass entity/edge updater actions to components.
```jsx
class Rule extends Component { ... }
export default vsEntity(Rule)
```

If you just want to render some entity data without any update functionality, use the mapEntity function in mapStateToProps
```jsx
const mapStateToProps = (state, props) => ({ entity: mapEntity(state, props) })
class Rule extends Component { ... }

export default connect(mapStateToProps)(Rule)
```

Put 'em together
```jsx
<VSFind find="triggers.rulesets.rules">
  { ({ results }) => (
    results.map(id => <Rule id={ id } />)
  ) }
</VSFind>
```

Also pass a parentId if you want to be able to manage edges.
You can do it by nesting a VSChildren in the example above, or if you don't want to nest, you can first map the parent ids to props:
```jsx
import getIds from 'vsGetters'
...
const mapStateToProps = (state, props) => ({
  rulesets: getIds(props)(state, "triggers.rulesets")
});

class SomeContainer extends Component {
  render() {
    const { rulesets } = this.props;
    return {
      <div>
        <p>'Rulesets list'</p>
        { rulesets.map(MakeRulesets) }
        <p>'Rules list for the first ruleset'</p>
        <VSChildren
          parentId={ rulesets[0] }
          service="rules"
        >
          { ({ results: rules }) => rules.map(MakeRules) }
        </VSChildren>
      <div>
  }
}
```

### Render a bunch of sortable/draggable children
Use VSChildren in combination with VSDraggable to render draggable components that will rerender their entities on drop
```jsx
  <VSChildren
    parentId={ id }
    service="analyticsreports"
    style={ childrenBox }
  >
    { ({ results: reports, reorder, getIndex }) => reports.map((rId, i) =>
      <VSDraggable
        key={ rId }
        id={ rId }
        reorder={ reorder }
        getIndex={ getIndex }
      >
        { AnythingIncludingNonVSRelatedStuff }
      </VSDraggable>
    ) }
  </VSChildren>
```

---
## Querying - finding things in the vs redux state
You can query any vs from anywhere (even in components that are outside of a provider) as long as you have the vsID and it's connected to the state. Query functions include:
* find
* getIds

You can get entities based on their location in the structure.
E.x. Get all reports:
```javascript
query = 'analyticspages.analyticspagesections.analyticsreports';

const myReports = find(vsId)(state, query, fromId)
```

You can filter too, by writing query as an object.
E.x. Get all reports related to my page that are active:
```javascript
query = {
  analyticspagesections: {
    _filter: entity => entity.id === 'mahPage',
    analyticsreports: {
      _filter: entity => entity.active === true
    }
  }
}

const myActiveReports = find(vsId)(state, query, fromId)
```

---
# Api

## Redux actions - write
* updateEntity - update self
* revertEntity - revert changes to self
* deleteEntity - delete self

* linkEntities - link any two existing entities. linkEntities(parentId, childId, edgeData)
* delinkEntities - delink any two existing entitties. delinkEntities(parentId, childId)

## Redux getters - read
* getVS = (state, props) => {}
  * requires { vsId } or { vsContext } on props
  * returns the entire vs on the state tree
* getIds = vsId => (state, query) => []
  * returns array of ids
* find = vsId => (state, query, fromId) => []
  * array of entities
  * fromId is parentId. defaults to rootId
* mapEntity = (state, props) => {}
  * requires { parentId, id, vsId } on props
  * returns a shallow merge from the entity on vs structure branch to the entity on the data branch
* mapEdge = (state, props) => {}
  * requires { parentId, id, vsId } on props
  * returns a shallow merge from the edge on vs structure branch to the edge on the data branch
* getOrderedChildren  = (state, props) => []
  * requires { parentId, service } on props
  * returns an array of IDS

## Components
### vsEntity
Convenient HOC component for retrieving the entity and entity/edge related
Wrap a component to give it the entity and updater functions.

Entity props:
* entity - mapEntity
* apiUpdateEntity - updateEntity
* apiRevertEntity - revertEntity
* apiDeleteEntity - deleteEntity

Edge props:
* edgeToParent - mapEdge
* apiLink - linkEntities
* apiDelink - delinkEntities

```jsx
class EntityUpdater extends Component {
  //...
  updateComponent = () => this.props.apiUpdateEntity({ clicked: true });
  ...
  render() {
    return <div onClick={ this.updateComponent }>Set entity clicked to true</div>
  }
}
const Clicker = vsEntity(EntityUpdater)
```

### VSFind
Convenience wrapper component for the getIds function.
```jsx
<VSFind find={ query }>{ ({ results }) => results }</VSFind>
```

### VSChildren
Convenience wrapper component for the getOrderedChildren function.
* given a parentId and service, gets the children ids of the parent for that service
* provides reorder and getIndex function - for use with drag and drop
```jsx
<VSChildren parentId={ id } service="analyticsreports">
  { ({ results, reorder, getIndex }) =>   results.map(id => (
      <EntityComponent
        id={ id }
        reorder={ reorder }
        getIndex={ getIndex }
      />
    )
  ) }
</VSChildren>
```

### VSDraggable
* wrapper component that makes the child a draggable component that will reorder when dropped on other VSDraggable components
* built to be used with VSChildren

---
## Wishlist
* be able to filter by edges in query
* make VSDraggable drag functionality toggle-able (based on keypress?) so that text can be copied and other click handling can work on child components

