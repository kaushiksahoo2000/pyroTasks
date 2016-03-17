import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

import {Link} from 'react-router'

class SignupForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(signupData){
    console.log(signupData)
  }

  render() {
    const {fields:{firstName, lastName, email}, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <div>
          <input type="text" {...firstName} placeholder='first name'/>
          <div>{firstName.touched ? firstName.error : ''}</div>
        </div>

        <div>
          <input type="text" {...lastName} placeholder='last name'/>
          <div>{lastName.touched ? lastName.error : ''}</div>
        </div>

        <div>
          <input type="text" {...email} placeholder='email'/>
          <div>{email.touched ? email.error : ''}</div>
        </div>

        <button type="submit">Submit</button>

      </form>
    )
  }
}

function validate(values) {
  const errors = {}
  if(!values.firstName) errors.firstName = 'Please enter a valid name'
  if(!values.lastName) errors.lastName = 'Please enter a last name'
  if(!values.email) errors.email = 'Please enter a valid email'
  return errors
}

export default reduxForm({
  form: SignupForm,
  fields: ['firstName', 'lastName', 'email'],
  validate
}, null, {})(SignupForm)
