import React, { Component, Fragment } from 'react';
import VSProvider from './vs/VSProvider';
import VSFind from './vs/VSFind';
import VSChildren from './vs/VSChildren';
import ExampleVSEntity from './ExampleVSEntity';
import EntityChip from './EntityChip';

// https://beta.snapsmedia.io/591477753e5c5f06673c7d29/analytics/app/59d3afd032d2f16ca2996bc3/page/59c19f324ca8fc015b183339
const fauxPageId = '59c19f324ca8fc015b183339';

const pageSections = {
  analyticspagesections: {
    _filter: entity => entity.active === true
  }
};
const linkedReports = (id) => ({
  analyticspagesections: {
    _filter: entity => entity.id === id,
    analyticsreports: {}
  }
});
const notLinkedReports = (id) => ({
  analyticspagesections: {
    _filter: entity => entity.id !== id,
    analyticsreports: {}
  }
});

export default class Entry extends Component {
  render() {
    return (
      <VSProvider vsId="myFirstVS" rootId="59c19f324ca8fc015b183339" structure={ { dun: 'tMAtterRightNow' } } >
        { ({ ready, isFetching, vsContext }) => (
          (!ready || isFetching) ? <div>...loading</div> : (
          <div>
            <h1>loaded: { vsContext.vsId }</h1>
            <VSFind find={ pageSections }>
              { ({ results: sections }) => sections.map(id =>
                <ExampleVSEntity
                  key={ id }
                  id={ id }
                  parentId={ fauxPageId }
                >
                  <Fragment>
                    <VSChildren parentId={ id } service="analyticsreports">
                      { ({ results: reports }) => reports.map(rId =>
                        <EntityChip
                          key={ rId }
                          id={ rId }
                          background="lavender"
                          parentId={ id }
                          isLinked={ true }
                        />
                      ) }
                    </VSChildren>
                    <VSFind find={ notLinkedReports(id) }>
                      { ({ results: notLinked }) => notLinked.map(rId =>
                        <EntityChip
                          key={ rId }
                          id={ rId }
                          background="pink"
                          isLinked={ false }
                          linkTo={ id }
                        />
                      ) }
                    </VSFind>
                  </Fragment>
                </ExampleVSEntity>
              ) }
            </VSFind>
          </div>
        )) }
      </VSProvider>
    )
  }
}
