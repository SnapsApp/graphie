import React, { Component, Fragment } from 'react';
import VSProvider from './vs/VSProvider';
import VSFind from './vs/VSFind';
import ExampleVSEntity from './ExampleVSEntity';
import EntityChip from './EntityChip';

import VSChildren from './vs/VSChildren'; // are you a drag and drop?
import VSDraggable from './vs/VSDraggable';

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

const childrenBox = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
}

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
                  <div>
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
                          <EntityChip
                            id={ rId }
                            background="lavender"
                            parentId={ id }
                            isLinked={ true }
                          />
                        </VSDraggable>
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
                  </div>
                </ExampleVSEntity>
              ) }
            </VSFind>
          </div>
        )) }
      </VSProvider>
    )
  }
}
