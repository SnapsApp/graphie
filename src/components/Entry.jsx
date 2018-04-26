import React, { Component } from 'react';
import VSProvider from './vs/VSProvider';
import VSGet from './vs/VSGet';
import BasicVSEntity from './BasicVSEntity';

// https://beta.snapsmedia.io/591477753e5c5f06673c7d29/analytics/app/59d3afd032d2f16ca2996bc3/page/59c19f324ca8fc015b183339
const fauxPageId = '59c19f324ca8fc015b183339';

const pageSectionsQuery = {
  analyticspagesections: {
    _filter: entity => entity.active === true
  }
};

export default class Entry extends Component {
  render() {
    return (
      <VSProvider id="myFirstVS" rootId="59c19f324ca8fc015b183339" structure={ { dun: 'tMAtterRightNow' } } >
        { ({ ready, isFetching, vsContext }) => (
          (!ready || isFetching) ? <div>...loading</div> : (
          <div>
            <h1>loaded: { vsContext.vsId }</h1>
            <VSGet query={ pageSectionsQuery }>
              { ({ results }) => (
                results.map(id => <BasicVSEntity key={ id } vsId={ vsContext.vsId } id={ id } />)
              ) }
            </VSGet>
          </div>
        )) }
      </VSProvider>
    )
  }
}
