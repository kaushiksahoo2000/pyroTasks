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
        <p className="heading">Login</p>
          <div>
            <input type="text" {...username} placeholder='username' className="biginput"/>
            <div className="err-msg">{username.touched ? username.error : ''}</div>
          </div>

          <div>
            <input type="password" {...password} placeholder='password' className="biginput"/>
            <div className="err-msg">{password.touched ? password.error : ''}</div>
          </div>
        <div className="btn-group">
          <button type="submit" className="btn hvr-bounce-to-left">Submit</button>
        </div>

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
