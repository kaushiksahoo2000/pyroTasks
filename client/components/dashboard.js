import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGroups} from '../actions/dashboardActions'
import {Link} from 'react-router'

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchGroups()
  }

  renderGroups() {
    return this.props.groups.map((group) => {
      return (
        <li key={group.id}>
          <h4>{group.name}</h4>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Groups</h3>
        <ul>
          {this.renderGroups()}
        </ul>
        <Link to='/creategroup'><button>Create Group</button></Link>
        <Link to='/joingroup'><button>Join Group</button></Link>
      </div>
    )
  }

}


export default connect(
  (state)=>{
    return {
      groups: state.groups.all
    }
  },
  {
    fetchGroups
  }
)(Dashboard)
