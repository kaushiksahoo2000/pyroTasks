import React from 'react';
import ReactDOM from 'react-dom';

/* ... */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

/* broswerHistory is used to assess context */
import {Router, browserHistory} from 'react-router'
import Routes from './routes'

import reducers from './reducers';

import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
  document.querySelector('.container')
);