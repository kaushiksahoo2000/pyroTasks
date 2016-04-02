import React from 'react';
import { Component } from 'react';
import ReactAnimate from 'react-addons-css-transition-group'

export default class App extends Component {
  render() {
    return (
      <main>
        <ReactAnimate transitionName="showForm" transitionEnterTimeout={640} transitionLeaveTimeout={640}>
          {this.props.children}
        </ReactAnimate>
      </main>
    );
  }
}
