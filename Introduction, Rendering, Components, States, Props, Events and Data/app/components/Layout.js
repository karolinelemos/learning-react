import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      title: "Bem-vindo"
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle(title) {
    this.setState({title});
  }
  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle} title={this.state.title}/>
        <p>layout</p>
        <Footer/>
      </div>
    );
  }
}
