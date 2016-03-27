import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

import {Link} from 'react-router'
import {joinGroup} from '../actions/dashboardActions'

class JoinGroupForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(joinGroupData){
    this.props.joinGroup(joinGroupData)
    .then(() => {
      this.context.router.push('/groups')
    })
  }

  render() {
    const {fields:{group_id}, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <div>
          <input type="text" {...group_id} placeholder='Group ID'/>
          <div>{group_id.touched ? group_id.error : ''}</div>
        </div>

        <button type="submit">Join Group</button>

      </form>
    )
  }
}

function validate(values) {
  const errors = {}
  if(!values.group_id) errors.group_id = 'Please enter a group id'
  return errors
}

export default reduxForm({
  form: "JoinGroupForm",
  fields: ['group_id'],
  validate
}, null, {joinGroup} )(JoinGroupForm)
