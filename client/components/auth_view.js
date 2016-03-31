import React, { Component } from 'react'
import {connect} from 'react-redux'


import {Link} from 'react-router'


export default class AuthView extends Component {
  render() {
    return (
      <div>
        <Link to='/signup' className="btn hvr-bounce-to-left">Sign Up</Link><br/>
        <Link to='/login' className="btn hvr-bounce-to-left">Login</Link>
      </div>
    )
  }
}
