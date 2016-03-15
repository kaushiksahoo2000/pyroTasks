import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children /* This component is a container for react-router controlled children*/}
      </div>
    );
  }
}
