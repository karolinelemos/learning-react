import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter as Router } from "react-router-dom";

import Favorites from "../js/pages/Favorites";
import Todos from "../js/pages/Todos";
import Layout from "../js/pages/Layout";
import Settings from "../js/pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={Layout}></Route>
      <Route path="/favorites" name="favorites" component={Favorites}></Route>
      <Route path="/settings" name="settings" component={Settings}></Route>
    </div>
  </Router>,
app);
