import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import reducers from './graphreducer';

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger); // logger must be last
}

export default createStore(
  reducers,
  applyMiddleware(...middlewares),
);
