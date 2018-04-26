import React, { Component } from 'react';
import './App.css';
import Entry from './components/Entry';
import store from './redux/store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Entry />
        </div>
      </Provider>
    );
  }
}

export default App;
