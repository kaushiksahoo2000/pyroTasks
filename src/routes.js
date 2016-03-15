import React from 'react'
import {Route, IndexRoute} from 'react-router'

/**
 * Import components here
 */

export default (
  <Route path='/' component={/* Container component (probably App) */}>
    <IndexRoute component={/* Default component to render */}/>
    <Route path='posts/new' component={/* Component to render */}/>
    <Route path='posts/:id' component={/* Component (note the parameter) */}/>
  </Route>
)
