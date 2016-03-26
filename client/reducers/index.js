import { combineReducers } from 'redux';

import groupsReducer from './reducer_groups'

import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  groups: groupsReducer
});

export default rootReducer
