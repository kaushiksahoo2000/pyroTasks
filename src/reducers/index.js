import { combineReducers } from 'redux';

/* Import reducers here */

/* Form reducer which is provided by redux-form */
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  /**
   * connect reducers here
   *
   * eg: posts: Postsreducer, etc.
   */
});

export default rootReducer;
