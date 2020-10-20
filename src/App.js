import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import NavigationHeader from "./shared/pages/NavigationHeader";
import Sidebar from "./admin/pages/Sidebar";

import Dashboard from "./admin/pages/Dashboard";
import Charts from "./admin/pages/Charts";

const App = () => {
  return (
    <Router>
      <NavigationHeader />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>

            <Route path="/charts">
              <Charts />
            </Route>

            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
