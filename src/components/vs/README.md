# How to use VSProvider
The VSProvider will provide the following props to VSContext.Consumer.<br/>
(May be out of date, check VSProvider.jsx to be sure.)

* vsId,
* fetchData - make virtualize structure call,
* ready - true when all the other props are initialized
* isFetching
* error

### Wrap stuff in VSProvider
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

### Wrap stuff in vsConsumer
The component vsConsumer is a convenience HOC that puts these into a prop named 'vsContext.'<br />
This render component knows it's vsId.
```jsx
const RenderComponent = ({ vsContext }) => <div>My vsId is { vsContext.vsId }</div>;
const VSConsumerComponent = vsConsumer(RenderComponent);
export VSConsumerComponent;
```

---
# Render a bunch of sortable/draggable children
## VSChildren
* given a parentId and service, gets the children of the parent for that service
* provides reorder and getIndex function - for use with drag and drop

## VSDraggable
* wrapper component that makes the child a draggable component that will reorder when dropped on other VSDraggable components

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
# Querying VS's
You can query any vs from anywhere (even in components that are outside of a provider) as long as you have the vsID and it's connected to the state.

## Examples
Get all reports
```javascript
query = 'analyticspages.analyticspagesections.analyticsreports';

const myReports = find(vsId)(state, query, fromId)
```

Get all reports related to my page that are active
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

## Query Funcs
Getter functions that can be used outside of provider
* getIds = vsId => (state, query) => []
  * returns array of ids
* find = vsId => (state, query, fromId) => []
  * array of entities
  * fromId is parentId. defaults to rootId

## Wishlist
* be able to query edges
