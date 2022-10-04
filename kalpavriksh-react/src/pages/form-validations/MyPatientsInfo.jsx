import React from "react";
import Navbar from "../shared/Navbar";
import DoctorTabs from "../shared/DoctorTabs";

import PatientDoctorInfo from "./PatientDoctorInfo";

const MyPatientsInfo = () => {
  return (
    <>
      {/* Dashboard Container Starts Here */}
      <div className="dashboard__Container">
        {/* <DoctorTabs /> */}
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
              <PatientDoctorInfo />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
      {/* Dashboard Container Ends Here */}
    </>
  );
};

export default MyPatientsInfo;
