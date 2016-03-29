import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

import {Link} from 'react-router'
import {addTask} from '../actions/groupActions'

class AddTaskForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(taskAddition){
    this.props.addTask(taskAddition)
    .then(() => {
      this.context.router.push('/group/:groupid')
    })
  }

  render() {
    const {fields:{task_name, assignees, due_date, owner}, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <div>
          <input type="text" {...task_name} placeholder='Task Name'/>
          <div>{name.touched ? name.error : ''}</div>
        </div>

        <div>
          <input type="text" {...assignees} placeholder='Assignees'/>
          <div>{assignees.touched ? assignees.error : ''}</div>
        </div>

        <div>
          <input type="date" {...due_date} placeholder='Due Date'/>
          <div>{due_date.touched ? due_date.error : ''}</div>
        </div>

        <div>
          <input type="text" {...owner} placeholder='Owner'/>
          <div>{owner.touched ? owner.error : ''}</div>
        </div>

        <button type="submit">Add Task</button>

      </form>
    )
  }
}

function validate(values) {
  const errors = {}
  if(!values.task_name) errors.task_name = 'Please enter a task name'
  if(!values.assignees) errors.assignees = 'Please include assignees'
  if(!values.due_date) errors.due_date = 'Please enter a due date'
  if(!values.owner) errors.owner = 'Please include an owner of the task'

  return errors
}

export default reduxForm({
  form: "AddTaskForm",
  fields: ['task_name', 'assignees', 'due_date', 'owner'],
  validate
}, null, {addTask} )(AddTaskForm)
