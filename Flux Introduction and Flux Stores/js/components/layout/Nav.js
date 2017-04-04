import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const prop = this.props.location;
    const collapsed = this.state;
    const location = prop.location;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.indexOf("archives") != -1 ? "active" : "";
    const settingsClass = location.pathname.indexOf("settings") != -1 ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={featuredClass}>
                <Link to="/" onClick={this.toggleCollapse}>Todos</Link>
              </li>
              <li class={archivesClass}>
                <Link to="favorites" onClick={this.toggleCollapse}>Favorites</Link>
              </li>
              <li class={settingsClass}>
                <Link to="settings" onClick={this.toggleCollapse}>Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
