import React from "react";
import Navbar from "../shared/Navbar";
import DoctorTabs from "../shared/DoctorTabs";

import PatientInfo from "./PatientInfo";

const PatientAppointmentInfo = () => {
  return (
    <>
      {/* Dashboard Container Starts Here */}
      <div className="dashboard__Container">
        <Navbar />
        <DoctorTabs />
        {/*
          <header className="header__Box">
          <div className="header__Box--Heading">
            <h1 className="header__Box--Heading-Primary">Dashboard</h1>
          </div>
        </header>
        */}
        <main>
          <div className="dashboard__Content">
            {/* Replace with your content */}
            <div className="dashboard__Content--Box">
              {/* <div className="dashboard__Content--Border" /> */}
              <PatientInfo />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
      {/* Dashboard Container Ends Here */}
    </>
  );
};

export default PatientAppointmentInfo;