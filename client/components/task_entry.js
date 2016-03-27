import React, { Component } from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'

class TaskEntry extends Component {
  render() {
    return (
      <li>
        <Link to={`/tasks/${this.props.task.id}`}>{this.props.task.name}</Link>
      </li>

    )
  }
}

export default TaskEntry;
