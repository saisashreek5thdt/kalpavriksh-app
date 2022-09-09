import React from "react";

import { useHistory } from "react-router-dom";

import TopNavbar from "../../shared/TopNavbar";

import Table from "../../shared/Table";

import Bottombar from "../../shared/Bottombar";

const Prescriptions = () => {

  const history = useHistory();

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
            {/* <div className="dashboard__Content--Box">
              <div className="dashboard__Content--Border" />
            </div> */}
            <div className="text-left">
              <button
                type="button"
                className="forms__Controller--Btn-Container_Btn-Gray"
                onClick={() => history.push("/userrole/:roleid/form/appointments/")}
              >
                Appointments
              </button>
            </div>
            <Table />
            {/* /End replace */}
          </div>
        </main>
        <Bottombar />
      </div>
    </>
  );
};

export default Prescriptions;
