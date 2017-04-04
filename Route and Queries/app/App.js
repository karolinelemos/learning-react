import React, { Component } from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import Archives from "./components/Archives";
import Settings from "./components/Settings";
import Featured from "./components/Featured";

import Bootstrap from "bootstrap-without-jquery";
import { HashRouter as Router, Route } from 'react-router-dom';

const app = document.getElementById('app');

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={Layout} />
        <Route path="/archives" name="archives" component={Archives}></Route>
        <Route path="/settings" name="settings" component={Settings}></Route>
      </div>
   </Router>,
app);
