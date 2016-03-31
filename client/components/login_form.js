import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

import {Link} from 'react-router'
import {login} from '../actions/authActions'

class LoginForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(loginData){
    this.props.login(loginData)
    .then((response) => {
      if(response.payload.status < 300){
        this.context.router.push('/dashboard')
      }
    })
  }

  render() {
    const {fields:{username, password}, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <div>
          <input type="text" {...username} placeholder='username'/>
          <div>{username.touched ? username.error : ''}</div>
        </div>

        <div>
          <input type="password" {...password} placeholder='password'/>
          <div>{password.touched ? password.error : ''}</div>
        </div>

        <button type="submit">Submit</button>

      </form>
    )
  }
}

function validate(values) {
  const errors = {}
  if(!values.username) errors.username = 'Please enter a valid username'
  if(!values.password) errors.password = 'Please enter a password'
  return errors
}

export default reduxForm({
  form: "LoginForm",
  fields: ['username', 'password'],
  validate
}, null, {login} )(LoginForm)
