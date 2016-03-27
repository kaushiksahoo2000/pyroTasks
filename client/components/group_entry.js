import React, { Component } from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'

class GroupEntry extends Component {
  render() {
    return (
      <li>
        <Link to={`/groups/${this.props.group.id}`}>{this.props.group.name}</Link>
      </li>

    )
  }
}

export default GroupEntry;
