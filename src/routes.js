import React from 'react'
import {Route, IndexRoute} from 'react-router'

/**
 * Import components here
 */
import App from './components/app'
import AuthView from './components/auth_view'
import LoginForm from './components/login_form'
import SignupForm from './components/signup_form'



export default (
  <Route path='/' component={App}>
    <IndexRoute component={AuthView}/>
    <Route path='signup' component={SignupForm}/>
    <Route path='login' component={LoginForm}/>
  </Route>
)
