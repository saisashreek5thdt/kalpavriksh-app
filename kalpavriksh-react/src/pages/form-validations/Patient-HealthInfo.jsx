import React from "react";
import { useHistory } from "react-router-dom";

import Input from "../../Components/Input";

import { VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH } from "../../util/validators";

import { useForm } from "../../hooks/form-hooks";

import Navbar from "../shared/Navbar";

const PatientHealthInfo = () => {

  const [formState, inputHandler] = useForm(
    {
      height: {
        value: '',
        isValid: false
      },
      weight: {
        value: '',
        isValid: false
      },
      caretakerName: {
        value: '',
        isValid: false
      },
      caretakerNumber: {
        value: '',
        isValid: false
      },
      preferredCall: {
        value: '',
        isValid: false
      },
      date: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const history = useHistory();

  const patientHealthHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    history.push('/userrole/:pid/enroll/personalinfo/');
  };

  return (
    <>
      <div className="dashboard__Container">
        <Navbar />
        <header className="header__Box">
          <div className="header__Box--Heading">
            <h1 className="header__Box--Heading-Primary">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="forms__Container">
            {/* Replace with your content */}
            <div className="forms__Header">
              <div className="forms__Header--FlexBox">
                <h2 className="forms__Header--FlexBox-Heading">
                  Enroll Patient Form
                </h2>
                <div className="forms__GridBox">
                  <div className="forms__GridBox--GridCols">
                    <div className="forms__GridBox--GridGaps">
                      <form action="#" method="POST" onSubmit={patientHealthHandler}>
                        <div className="forms__Controller">
                          <div className="forms__Controller--Box">
                            <div className="forms__Controller--Grids">

                              <Input
                                id="patient-height"
                                element="input"
                                type="number"
                                label="Height"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Height"
                                onInput={inputHandler}
                               />

                               <Input
                                id="patient-weight"
                                element="input"
                                type="number"
                                label="Weight"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Weight"
                                onInput={inputHandler}
                               />

                               <Input
                                id="patient-caretakerName"
                                element="input"
                                type="text"
                                label="CaretakerName"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Name"
                                onInput={inputHandler}
                               />

                               <Input
                                id="patient-caretakerNumber"
                                element="input"
                                type="text"
                                label="CaretakerNumber"
                                validators={[VALIDATOR_MAXLENGTH(10)]}
                                errorText="Please Enter Valid 10 Digit Number"
                                onInput={inputHandler}
                               />

                               <Input
                                id="patient-caretakerTime"
                                element="input"
                                type="text"
                                label="CaretakerTime"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Time"
                                onInput={inputHandler}
                               />

                               <Input
                                id="patient-caretakerDate"
                                element="input"
                                type="date"
                                label="Caretakerate"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Valid Date"
                                onInput={inputHandler}
                               />   

                              {/* <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-height"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Height
                                </label>
                                <input
                                  type="number"
                                  name="patient-height"
                                  id="patient-height"
                                  autoComplete="patient-height"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-weight"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Weight
                                </label>
                                <input
                                  type="number"
                                  name="patient-weight"
                                  id="patient-weight"
                                  autoComplete="patient-weight"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-caretakerName"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Caretaker's Name
                                </label>
                                <input
                                  type="text"
                                  name="patient-caretakerName"
                                  id="patient-caretakerName"
                                  autoComplete="patient-caretakerName"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-caretakerNumber"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Caretaker's Number
                                </label>
                                <input
                                  type="tel"
                                  name="patient-caretakerNumber"
                                  id="patient-caretakerNumber"
                                  autoComplete="patient-caretakerNumber"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-caretakerNumber"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Prefered Time to Call (TIME)
                                </label>
                                <input
                                  type="time"
                                  name="patient-caretakerNumber"
                                  id="patient-caretakerNumber"
                                  autoComplete="patient-caretakerNumber"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-startEnd"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Start &amp; End Date
                                </label>
                                <input
                                  type="date"
                                  name="patient-startEnd"
                                  id="patient-startEnd"
                                  autoComplete="patient-startEnd"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>
                              
                              */}

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-caretakerRelation"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Caretaker's Relation
                                </label>
                                <select
                                  id="patient-caretakerRelation"
                                  name="patient-caretakerRelation"
                                  autoComplete="patient-caretakerRelation"
                                  className="forms__Controller--Grids_Cols-Select"
                                >
                                  <option>
                                    Please Select Caretaker's Relation
                                  </option>
                                  <option>Father</option>
                                  <option>Mother</option>
                                  <option>Son</option>
                                  <option>Daughter</option>
                                  <option>Spouse</option>
                                  <option>Uncle</option>
                                  <option>Aunt</option>
                                  <option>Other</option>
                                </select>
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-planSelected"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Select Health Plan
                                </label>
                                <select
                                  id="patient-planSelected"
                                  name="patient-planSelected"
                                  autoComplete="patient-planSelected"
                                  className="forms__Controller--Grids_Cols-Select"
                                >
                                  <option>Please Select Health Plan</option>
                                  <option>Plan A</option>
                                  <option>Plan B</option>
                                  <option>Plan C</option>
                                  <option>Plan D</option>
                                </select>
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-patientTeam"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Select Patient Team
                                </label>
                                <select
                                  id="patient-patientTeam"
                                  name="patient-patientTeam"
                                  autoComplete="patient-patientTeam"
                                  className="forms__Controller--Grids_Cols-Select"
                                >
                                  <option>Please Select Patient Team</option>
                                  <option>Team A</option>
                                  <option>Team B</option>
                                  <option>Team C</option>
                                  <option>Team D</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="forms__Controller--Btn-Container">
                          <div className="text-right">
                            <button
                              type="submit"
                              className="forms__Controller--Btn-Container_Btn"
                            >
                              Save &amp; Next
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default PatientHealthInfo;