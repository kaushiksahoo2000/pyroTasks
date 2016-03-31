import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchGroups} from '../actions/dashboardActions'
import {Link} from 'react-router'

import GroupEntry from './group_entry'

class Dashboard extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    if(!this.props.isAuth){
      this.context.router.push('/login')
    }
    this.props.fetchGroups()
  }

  renderGroups() {
    if(this.props.groups.length === 0) return (<p>You are not in any groups yet.</p>)
    else {
      return this.props.groups.map((group) => {
        return (
          <GroupEntry group={group} key={group.id}/>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <h3>Groups</h3>
        {this.renderGroups()}
        {this.props.children}
        <Link to='/dashboard/creategroup'><button>Create Group</button></Link>
        <Link to='/dashboard/joingroup'><button>Join Group</button></Link>
      </div>
    )
  }

}


export default connect(
  (state)=>{
    return {
      groups: state.groups.all,
      isAuth: state.isAuth
    }
  },
  {
    fetchGroups
  }
)(Dashboard)
