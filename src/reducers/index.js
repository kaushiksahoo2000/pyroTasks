import { combineReducers } from 'redux';

import groupsReducer from './reducer_groups'



const rootReducer = combineReducers({
  groups: groupsReducer
});

export default rootReducer;
