import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from "./user/Login";
import UserDashboard from "./user/UserDashboard";

import { DoctorDashboard } from "./pages";


const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/userrole/" exact>
            <UserDashboard />
          </Route>
          <Route path='/doctordashboard' exact >
            <DoctorDashboard />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
