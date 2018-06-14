import { combineReducers } from 'redux';
import vsReducer from './vsReducer';
import dataReducer from './dataReducer';
import schemaReducer from './schemaReducer';

export default combineReducers({
  vs: vsReducer,
  data: dataReducer,
  schemas: schemaReducer
})
