import React from "react";

import { useHistory } from "react-router-dom";

import { VALIDATOR_REQUIRE } from "../../../util/validators";

import { useForm } from "../../../hooks/form-hooks";

import TopNavbar from "../../shared/TopNavbar";

import Bottombar from "../../shared/Bottombar";

import Input from "../../../Components/Input";

import Select from "../../../Components/Select";

const Appointments = () => {

    const history = useHistory();

  const [formState, inputHandler] = useForm(
    {
        patient_staffName: {
        value: "",
        isValid: false,
      },
      patient_Date: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const staffOptions = [
    { value: "Please Select a Staff" },
    { value: "Staff Name" },
    { value: "Staff Name" },
    { value: "Staff Name" },
  ];

  const appointmentHandler = (e) => {
    e.preventDefault();

    if ( formState.inputs.patient_staffName.value === "" || formState.inputs.patient_Date.value === "") {
        return null;
    } else {
        console.log(formState.inputs);
        history.push("/userrole/:roleid/patient/");
    }

  };

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

            <div className="forms__Header">
              <div className="forms__Header--FlexBox">
                <h2 className="forms__Header--FlexBox-Heading">
                  Upload Diet Chart
                </h2>
                <div className="forms__GridBox">
                  <div className="forms__GridBox--GridCols">
                    <div className="forms__GridBox--GridGaps">
                      {/* Form Section Start */}
                      <form action="#" method="POST" onSubmit={appointmentHandler}>
                        {/* Form Controller Section Start */}
                        <div className="forms__Controller">
                          <div className="forms__Controller--Box">
                            {/* Form Input Section Start */}
                            <div className="forms__Controller--Grids">
                              <div className="forms__Controller--Grids_Cols">
                                <button
                                  type="button"
                                  className="forms__Controller--Btn-Container_Btn-Gray"
                                  onClick={() => history.push("/userrole/:roleid/form/appointments/")}
                                >
                                  Add Appointment
                                </button>                                
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                              <button
                                  type="button"
                                  className="forms__Controller--Btn-Container_Btn-Gray"
                                  onClick={() => history.push("/userrole/:roleid/form/appointments/")}
                                >
                                  Select Appointment
                                </button>
                              </div>
                              {/* Input Select Component Staff Type */}
                              <Select
                                element="select"
                                id="patient_staffName"
                                label="Staff Name"
                                options={staffOptions}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Your Staff"
                                onInput={inputHandler}
                              />
                              {/* Input Type Component Date */}
                              <Input
                                element="input"
                                id="patient_Date"
                                type="date"
                                label="Date"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Date"
                                onInput={inputHandler}
                              />
                            </div>
                            {/* Form Input Section End */}
                          </div>
                        </div>
                        {/* Form Controller Section End */}
                        {/* Form Button Container Start */}
                        <div className="forms__Controller--Btn-Container">
                          {/* Form Button Start */}
                          <div className="text-right">
                            <button
                              type="submit"
                              className="forms__Controller--Btn-Container_Btn-Green"
                            >
                              Submit
                            </button>
                          </div>
                          {/* Form Button End */}
                        </div>
                        {/* Form Button Container End */}
                      </form>
                      {/* Form Section End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* /End replace */}
          </div>
        </main>
        <Bottombar />
      </div>
    </>
  );
};

export default Appointments;
