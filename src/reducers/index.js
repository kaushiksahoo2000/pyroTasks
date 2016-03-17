import { combineReducers } from 'redux';

/* Import reducers here */

import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;
