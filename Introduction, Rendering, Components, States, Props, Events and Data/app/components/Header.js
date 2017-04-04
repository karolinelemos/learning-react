import React, { Component } from "react"
import Title from "./Header/Title";

export default class Header extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <div>
        <Title title={this.props.title}/>
        <input onChange={this.handleChange}/>
      </div>
    );
  }
}
