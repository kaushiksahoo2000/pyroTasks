import { combineReducers } from 'redux';

import groupsReducer from './reducer_groups'
import tasksReducer from './reducer_tasks'
import authReducer from './reducer_auth'

import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  groups: groupsReducer,
  tasks: tasksReducer,
  isAuth: authReducer
});

export default rootReducer
