import React, { Component } from 'react';
import VSProvider from './vs/VSProvider';
import VSFind from './vs/VSFind';
import BasicVSEntity from './BasicVSEntity';

// https://beta.snapsmedia.io/591477753e5c5f06673c7d29/analytics/app/59d3afd032d2f16ca2996bc3/page/59c19f324ca8fc015b183339
const fauxPageId = '59c19f324ca8fc015b183339';

const pageSections = {
  analyticspagesections: {
    _filter: entity => entity.active === true
  }
};

export default class Entry extends Component {
  render() {
    return (
      <VSProvider vsId="myFirstVS" rootId="59c19f324ca8fc015b183339" structure={ { dun: 'tMAtterRightNow' } } >
        { ({ ready, isFetching, vsContext }) => (
          (!ready || isFetching) ? <div>...loading</div> : (
          <div>
            <h1>loaded: { vsContext.vsId }</h1>
            <VSFind find={ pageSections }>
              { ({ results }) => (
                results.map(id =>
                  <BasicVSEntity
                    key={ id }
                    id={ id }
                    parentId={ fauxPageId }
                  />
                )
              ) }
            </VSFind>
          </div>
        )) }
      </VSProvider>
    )
  }
}
