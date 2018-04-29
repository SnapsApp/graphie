import { combineReducers } from 'redux';
import vsReducer from './vsReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  vs: vsReducer,
  data: dataReducer
})
