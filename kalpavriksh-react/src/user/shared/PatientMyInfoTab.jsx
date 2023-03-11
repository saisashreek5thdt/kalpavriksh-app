import React from 'react';
import PatientNav from "./PatientNav";
import PatientFooter from "./PatientFooter";

import PatientAccountStatus from '../../pages/form-validations/patient/PatientAccountStatus';

const PatientMyInfoTab = () => {
  return (
    <>
        <div className="dashboard__Container">
            <PatientNav />
            <main className="dashboard__Main-Content">
                <PatientAccountStatus />
            </main>
            <PatientFooter />
        </div>
    </>
  )
}

export default PatientMyInfoTab