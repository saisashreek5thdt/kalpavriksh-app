import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { AuthContext } from "./context/auth-context";

import Login from "./user/Login";
import UserDashboard from "./user/UserDashboard";
import EnrollPatient from "./pages/form-validations/Enroll-Patient"
import PatientHealthInfo from "./pages/form-validations/Patient-HealthInfo";
import PatientPersonalInfo from "./pages/form-validations/Patient-PersonalInfo";

import CreateForm from "./pages/form-validations/Create-Form";

import UploadDietChart from "./pages/form-validations/Upload-Diet-Chart";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (!isLoggedIn) {
    routes = (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/userrole/" exact>
            <UserDashboard />
          </Route>
          <Route path="/userrole/:pid/enroll/" exact>
            <EnrollPatient />
          </Route>
          <Route path="/userrole/:pid/enroll/healthinfo/" exact>
            <PatientHealthInfo />
          </Route>
          <Route path="/userrole/:pid/enroll/personalinfo/" exact>
            <PatientPersonalInfo />
          </Route>
          <Route path="/userrole/:pid/form/createform/" exact>
            <CreateForm />
          </Route>
          <Route path="/userrole/:pid/form/dietform/" exact>
            <UploadDietChart />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  } else {
    <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
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
}

export default App;
