import React, { Component } from 'react'
import {connect} from 'react-redux'


import {Link} from 'react-router'


export default class AuthView extends Component {
  render() {
    return (
      <div>
        <Link to='signup'><button>Sign Up</button></Link>
        <Link to='login'><button>Login</button></Link>
      </div>
    )
  }
}
