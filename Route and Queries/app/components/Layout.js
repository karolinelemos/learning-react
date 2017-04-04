import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Layout extends Component {
  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
  }
  navigate () {
    this.props.history.replaceState(null, "/");
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Title</h1>
        <Link to="archives"><button class="btn btn-success">archives</button></Link>
        <Link to="settings" class="btn btn-warning">settings</Link>
      </div>
    );
  }
}
