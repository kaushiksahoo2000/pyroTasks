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
