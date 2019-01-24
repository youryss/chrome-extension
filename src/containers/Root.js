import React, { Component } from "react";
import App from './App';

//Todo apply redux arc.
export default class Root extends Component {
  render() {
    const { chrome, tab } = this.props;
    return (
      <App chrome={chrome} tab={tab} />
    );
  }
}