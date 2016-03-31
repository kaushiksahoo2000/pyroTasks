import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchTasks} from '../actions/groupActions'
import {Link} from 'react-router'
import ReactAnimate from 'react-addons-css-transition-group'

import TaskEntry from './task_entry'
import AddTaskForm from './add_task_form'

class GroupDetail extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    if(!this.props.isAuth){
      this.context.router.push('/login')
    }
    this.props.fetchTasks(this.props.params.groupid)
  }

  renderTasks() {
    if(this.props.tasks.length === 0) return <p>Sorry, there are no tasks in this group</p>
    return this.props.tasks.map((task) => {
      return (
        <TaskEntry task={task} key={task.id}/>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Tasks</h3>
          {this.renderTasks()}
        <div>
          {this.props.children}
        </div>
        <Link to={`/groups/${this.props.params.groupid}/createtask`}>Create New Task</Link>
      </div>
    )
  }

}


export default connect(
  (state)=>{
    return {
      tasks: state.tasks.all,
      isAuth: state.isAuth
    }
  },
  {
    fetchTasks
  }
)(GroupDetail)
