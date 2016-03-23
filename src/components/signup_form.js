import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

import {Link} from 'react-router'
import {signup} from '../actions/index'

class SignupForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(signupData){
    this.props.signup(signupData)
    .then(() => {
      this.context.router.push('/dashboard')
    })
  }

  render() {
    const {fields:{name, email, password}, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <div>
          <input type="text" {...name} placeholder='name'/>
          <div>{name.touched ? name.error : ''}</div>
        </div>

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
  if(!values.name) errors.name = 'Please enter your name'
  if(!values.email) errors.email = 'Please enter a valid email'
  if(!values.password) errors.password = 'Please enter a password'
  return errors
}

export default reduxForm({
  form: "SignupForm",
  fields: ['name', 'email', 'password'],
  validate
}, null, {signup} )(SignupForm)
