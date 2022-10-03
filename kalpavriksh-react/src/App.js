import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AuthContext } from "./context/auth-context";

import Login from "./user/Login";
import UserDashboard from "./user/UserDashboard";
import PatientDashboard from "./user/patientDashboard";
import EnrollPatient from "./pages/form-validations/Enroll-Patient"
import PatientHealthInfo from "./pages/form-validations/Patient-HealthInfo";
import PatientPersonalInfo from "./pages/form-validations/Patient-PersonalInfo";

import CreateForm from "./pages/form-validations/Create-Form";

import UploadDietChart from "./pages/form-validations/Upload-Diet-Chart";

import PatientForm from "./pages/form-validations/patient/Patient-Forms";
import Prescriptions from "./pages/form-validations/patient/Prescriptions";
import Appointments from "./pages/form-validations/patient/Appointments";
import PatientViewInfo from "./pages/form-validations/PatientViewInfo";

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
          <Route path="/userrole/:roleid/doctor/" exact>
            <UserDashboard />
          </Route>
          <Route path="/userrole/:roleid/patient/" exact>
            <PatientDashboard />
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
          <Route path="/userrole/:pid/form/appointment/patientinfo_view" exact>
            <PatientViewInfo />
          </Route>
          <Route path="/userrole/:roleid/form/patientform/" exact>
            <PatientForm />
          </Route>
          <Route path="/userrole/:roleid/form/prescriptions/" exact>
            <Prescriptions />
          </Route>

          <Route path="/userrole/:roleid/form/appointments/" exact>
            <Appointments />
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
};

export default App;
