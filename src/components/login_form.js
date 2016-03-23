import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

import {Link} from 'react-router'
import {login} from '../actions/index'

class LoginForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(loginData){
    this.props.login(loginData)
    .then(() => {
      this.context.router.push('/dashboard')
    })
  }

  render() {
    const {fields:{email, password}, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <div>
          <input type="text" {...email} placeholder='email'/>
          <div>{email.touched ? email.error : ''}</div>
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
  if(!values.email) errors.email = 'Please enter a valid email'
  if(!values.password) errors.password = 'Please enter a password'
  return errors
}

export default reduxForm({
  form: "LoginForm",
  fields: ['email', 'password'],
  validate
}, null, {login} )(LoginForm)
