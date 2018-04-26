import React, { Component } from 'react';
import VSProvider from './vs/VSProvider';
import VSGet from './vs/VSGet';

export default class Entry extends Component {
  render() {
    return (
      <VSProvider id="myFirstVS" rootId="59c19f324ca8fc015b183339" structure={ { dun: 'tMAtterRightNow' } } >
        { ({ ready, isFetching, vsContext }) => (
            (!ready || isFetching) ? <div>...loading</div> :
            <div>
              <h1>loaded: { vsContext.vsId }</h1>
              <VSGet query={ { analyticsreports: 'id' } } />
            </div>
          )
        }
      </VSProvider>
    )
  }
}
