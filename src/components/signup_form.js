import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

import {Link} from 'react-router'


class SignupForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    const {fields:{entry}, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <input type="text" {...entry}/>
        <div>{entry.touched ? entry.error : ''}</div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}
  if(!values.entry) errors.entry = 'Enter something'
  return errors
}

export default reduxForm({
  form: SignupForm,
  fields: ['First Name', 'Last Name', 'Email'],
  validate
}, null)(SignupForm)
