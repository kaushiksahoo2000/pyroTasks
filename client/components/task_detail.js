import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchTask} from '../actions/taskActions'

class TaskDetail extends Component {
  componentWillMount() {
    this.props.fetchTask(this.props.params.taskid)
  }

  render() {
    if(!this.props.task){
      return <p>Loading</p>
    }
    return (
      <div>
        <h3>{this.props.task.name}</h3>
        <p>Owned by {this.props.task.owner}</p>
      </div>
    )
  }

}


export default connect(
  (state)=>{
    return {
      task: state.tasks.task
    }
  },
  {
    fetchTask
  }
)(TaskDetail)
