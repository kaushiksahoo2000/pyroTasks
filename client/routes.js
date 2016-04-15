import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/app'
import AuthView from './components/auth_view'
import SignupForm from './components/signup_form'
import LoginForm from './components/login_form'
import Dashboard from './components/dashboard'
import CreateGroup from './components/create_group_form'
import JoinGroup from './components/join_group_form'
import CreateTask from './components/add_task_form'
import GroupDetail from './components/group_detail'
import TaskDetail from './components/task_detail'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={AuthView}/>
    <Route path='signup' component={SignupForm}/>
    <Route path='login' component={LoginForm}/>
    <Route path='dashboard' component={Dashboard}>
      <Route path='creategroup' component={CreateGroup}/>
      <Route path='joingroup' component={JoinGroup}/>
    </Route>
    <Route path='groups/:groupid' component={GroupDetail}>
      <Route path='createtask' component={CreateTask}/>
    </Route>
    <Route path='tasks/:taskid' component={TaskDetail}/>
  </Route>
)
