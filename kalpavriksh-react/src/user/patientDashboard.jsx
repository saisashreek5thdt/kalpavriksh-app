import React from "react";

import TopNavbar from "../pages/shared/TopNavbar";
import Bottombar from "../pages/shared/Bottombar";

<<<<<<< HEAD

const PatientDashboard = () => {

=======
const PatientDashboard = () => {
>>>>>>> 49bd499919fa7d74edc1ec2ff940bda6785865a7

  return (
    <>
      {/* Patient Dashboard Container Starts Here */}
      <div className="dashboard__Container">
        {/* Navbar Container Starts Here */}
        <TopNavbar />
        {/* Navbar Container Ends Here */}
        {/* Header Section Starts Here */}
        <header className="header__Box">
          <div className="header__Box--Heading">
            <h1 className="header__Box--Heading-Primary">Dashboard</h1>
          </div>
        </header>
        {/* Header Section Ends Here */}
        <main>
          <div className="dashboard__Content">
            {/* Replace with your content */}
            <div className="dashboard__Content--Box">
              <div className="dashboard__Content--Border" />
            </div>
            {/* /End replace */}
          </div>
        </main>
        <Bottombar />
      </div>
    </>
  );
};

export default PatientDashboard;
