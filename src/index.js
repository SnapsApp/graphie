import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import { Provider } from 'react-redux';

const app = React.createElement(App);
ReactDOM.render(React.createElement(Provider, { store }, app), document.getElementById('root'));
registerServiceWorker();
