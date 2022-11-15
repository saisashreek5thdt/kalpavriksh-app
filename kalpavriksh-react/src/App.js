import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Login Page Import
import Login from './user/shared/Login';

// Doctor Dashboard Page Imports
import DoctorDashboard from './user/Dashboards/DoctorDashboard';
import MultistepForm from './pages/form-validations/MultistepForm';
import CreatePatient from './pages/form-validations/patient/CreatePatient';
import PatientHealthInfo from './pages/form-validations/patient/PatientHealthInfo';
import PatientPersonalInfo from './pages/form-validations/patient/PatientPersonalInfo';
import CreateForm from './pages/form-validations/patient/CreateForm';
import UploadDietChart from './pages/form-validations/patient/UploadDietChart';
import DoctorMeetingInfo from './pages/form-validations/doctor/DoctorMeetingInfo';

// Patient Dashboard Page Imports
import PatientDashboard from './user/Dashboards/PatientDashboard';
import PatientMyData from './user/shared/Patient-MyData';
import PatientPrescriptions from './user/shared/Patient-Prescriptions';
import PatientForm from './pages/form-validations/patient/PatientForm';
import PatientMeetingInfo from './pages/form-validations/patient/PatientMeetingInfo';

//Common Page Imports
import UserChat from './user/shared/UserChat';

//SUPER PAGE IMPORTS
import Admin from "./user/Dashboards/SuperAdmin";
import EnrolmentsView from './pages/form-validations/admin/EnrolmentsView';
import EmployeSummary from './pages/form-validations/admin/EmployeSummary';
import '../src/App.css'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/userrole/:roleid/dashboard/doctor/' element={<DoctorDashboard />} />
        <Route path='/userrole/:roleid/dashboard/doctor/multistep/' element={<MultistepForm />} />
        <Route path="/userrole/:roleid/dashboard/doctor/enrol/patient/" element={<CreatePatient />} />
        <Route path='/userrole/:roleid/dashboard/doctor/enrol/healthinfo/' element={<PatientHealthInfo />} />
        <Route path='/userrole/:roleid/dashboard/doctor/enrol/personalinfo/' element={<PatientPersonalInfo />} />
        <Route path='/userrole/:roleid/dashboard/doctor/create/form/' element={<CreateForm />} />
        <Route path='/userrole/:roleid/dashboard/doctor/create/dietchart/' element={<UploadDietChart />} />
        <Route path='/userrole/:roleid/dashboard/doctor/meeting/info/' element={<DoctorMeetingInfo />} />
        <Route path='/userrole/:roleid/dashboard/patient/' element={<PatientDashboard />} />
        <Route path='/userrole/:roleid/dashboard/patient/mydata/' element={<PatientMyData />} />
        <Route path='/userrole/:roleid/dashboard/patient/mydata/forms/' element={<PatientForm />} />
        <Route path='/userrole/:roleid/dashboard/patient/prescriptions/' element={<PatientPrescriptions />} />
        <Route path='/userrole/:roleid/dashboard/patient/meeting/info/' element={<PatientMeetingInfo />} />
        <Route path='/userrole/:roleid/dashboard/common/chat/' element={<UserChat />} />
        <Route path='/userrole/:roleid/dashboard/admin/' element={<Admin />} />
        <Route path='/userrole/:roleid/dashboard/admin/patient/enrolment/view/' element={<EnrolmentsView />} />
        <Route path='/userrole/:roleid/dashboard/admin/summary/employee/view/' element={<EmployeSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
