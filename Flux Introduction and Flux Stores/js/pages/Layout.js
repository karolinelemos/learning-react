import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends Component {
  render() {
    const location  = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>

        <Nav location={this.props} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}