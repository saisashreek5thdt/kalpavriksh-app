import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./user/Login";
import UserDashboard from "./user/UserDashboard";
import CreatePatient from "./user/CreatePatient";
import PatientDashboard from "./user/patient/PatientDashboard";

import { DoctorDashboard } from "./pages";

import { AuthContext } from "./context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [userId, setUserId] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <UserDashboard />
          {/* <Login /> */}
        </Route>
        <Route path="/userrole/" exact>
          <Login />
          {/* <UserDashboard /> */}
        </Route>
        <Route path="/userrole/createPatient" exact>
          <CreatePatient />
          {/* <UserDashboard /> */}
        </Route>
        <Route path="/userrole/patient" exact>
          <PatientDashboard />
        </Route>
        <Route path="/doctordashboard" exact>
          <DoctorDashboard />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <UserDashboard />
          {/* <Login /> */}
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          //userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <Router>
          <main>{routes}</main>
        </Router>
      </AuthContext.Provider>
    </>
  );
};

export default App;
