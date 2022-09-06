import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

<<<<<<< HEAD
import 'tw-elements';

import Login from "./user/Login";
import UserDashboard from "./user/UserDashboard";
import CreatePatient from "./user/CreatePatient";
import PatientDashboard from "./user/patient/PatientDashboard";

import { DoctorDashboard } from "./pages";

import { AuthContext } from "./context/auth-context";
import CreateForm from "./user/CreateForm";
import UploadDietchart from "./user/UploadDietchart";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [userId, setUserId] = useState(false);
=======
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

import Stepper from "./pages/form-validations/Stepper";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
>>>>>>> c2b858116a3c474af3fab495f0863220a17eaee0

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (!isLoggedIn) {
    routes = (
<<<<<<< HEAD
      <Switch>
        <Route path="/" exact>
          {/* <UserDashboard /> */}
          <Login />
        </Route>
        <Route path="/userrole/" exact>
          {/* <Login /> */}
          <UserDashboard />
        </Route>
        <Route path="/userrole/createPatient" exact>
          <CreatePatient />
          {/* <UserDashboard /> */}
        </Route>
        <Route path="/userrole/createForm" exact>
          <CreateForm />
          {/* <UserDashboard /> */}
        </Route>
        <Route path="/userrole/uploadDietChart" exact>
          <UploadDietchart />
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
          {/* <UserDashboard /> */}
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
=======
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
          <Route path="/userrole/:roleid/form/patientform/" exact>
            <PatientForm />
          </Route>
          <Route path="/stepper/" exact>
            <Stepper />
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
>>>>>>> c2b858116a3c474af3fab495f0863220a17eaee0
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
