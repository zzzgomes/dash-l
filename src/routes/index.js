import Dashboard from "page/dash"; 
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Routes() {
  return (
    <Router>
     
        <Switch>
          <Route exact path="/"> 
            <Dashboard  />
          </Route>
        </Switch>
    </Router>
  );
}
