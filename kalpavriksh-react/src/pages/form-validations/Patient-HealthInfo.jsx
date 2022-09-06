import React from "react";
import { useHistory } from "react-router-dom";

import Input from "../../Components/Input";

import Select from "../../Components/Select";

import { VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH } from "../../util/validators";

import { useForm } from "../../Hooks/form-hooks";

import Navbar from "../shared/Navbar";

const PatientHealthInfo = () => {
  const [formState, inputHandler] = useForm(
    {
      patient_height: {
        value: "",
        isValid: false,
      },
      patient_weight: {
        value: "",
        isValid: false,
      },
      patient_caretakerName: {
        value: "",
        isValid: false,
      },
      patient_caretakerNumber: {
        value: "",
        isValid: false,
      },
      patient_preferredCall: {
        value: "",
        isValid: false,
      },
      patient_caretakerDate: {
        value: "",
        isValid: false,
      },
      patient_caretakerRelation: {
        value: "",
        isValid: false,
      },
      patient_planSelected: {
        value: "",
        isValid: false,
      },
      patient_patientTeam: {
        value: "",
        isValid: false,
      }
    },
    false
  );

  const relationList = [
    { value: "Please Select Caretakers Relation" },
    { value: "Father" },
    { value: "Mother" },
    { value: "Son" },
    { value: "Daughter" },
    { value: "Spouse" },
    { value: "Uncle" },
    { value: "Aunty" },
    { value: "Other" },
  ];

  const healthPlan = [
    { value: "Please Select Health Plan" },
    { value: "Plan A" },
    { value: "Plan B" },
    { value: "Plan C" },
    { value: "Plan D" },
  ];

  const healthTeam = [
    { value: "Please Select Health Team" },
    { value: "Team A" },
    { value: "Team B" },
    { value: "Team C" },
    { value: "Team D" },
  ];

  const history = useHistory();

  const patientHealthHandler = (e) => {
    e.preventDefault();
    /*if (
      formState.inputs.patient_height.value === "" ||
      formState.inputs.patient_weight.value === "" ||
      formState.inputs.patient_caretakerName.value === "" ||
      formState.inputs.patient_caretakerNumber.value === "" ||
      formState.inputs.patient_preferredCall.value === "" ||
      formState.inputs.patient_caretakerDate.value === "" ||
      formState.inputs.patient_caretakerRelation.value === "" ||
      formState.inputs.patient_planSelected.value === "" ||
      formState.inputs.patient_patientTeam.value === "" 
    ) {
      return null;
    } else {
      console.log(formState.inputs);
    } */
    console.log(formState.inputs);
    history.push("/userrole/:pid/enroll/personalinfo/");
  };

  return (
    <>
      <div className="dashboard__Container">
        <Navbar />
        <header className="header__Box">
          <div className="header__Box--Heading">
            <h1 className="header__Box--Heading-Primary">Dashboard</h1>
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
                      <form
                        action="#"
                        method="POST"
                        onSubmit={patientHealthHandler}
                      >
                        <div className="forms__Controller">
                          <div className="forms__Controller--Box">
                            <div className="forms__Controller--Grids">
                              <Input
                                id="patient_height"
                                element="input"
                                type="number"
                                label="Height"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Height"
                                onInput={inputHandler}
                              />

                              <Input
                                id="patient_weight"
                                element="input"
                                type="number"
                                label="Weight"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Weight"
                                onInput={inputHandler}
                              />

                              <Input
                                id="patient_caretakerName"
                                element="input"
                                type="text"
                                label="CaretakerName"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Name"
                                onInput={inputHandler}
                              />

                              <Input
                                id="patient_caretakerNumber"
                                element="input"
                                type="tel"
                                label="CaretakerNumber"
                                validators={[VALIDATOR_MAXLENGTH(10)]}
                                errorText="Please Enter Valid 10 Digit Number"
                                onInput={inputHandler}
                              />

                              <Input
                                id="patient_caretakerTime"
                                element="input"
                                type="time"
                                label="CaretakerTime"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Time"
                                onInput={inputHandler}
                              />

                              <Input
                                id="patient_caretakerDate"
                                element="input"
                                type="date"
                                label="CaretakerDate"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Valid Date"
                                onInput={inputHandler}
                              />

                              <Select
                                element="select"
                                id="patient_caretakerRelation"
                                label="Caretaker's Relation"
                                options={relationList}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Carataker Relation"
                                onInput={inputHandler}
                              />

                              <Select
                                element="select"
                                id="patient_planSelected"
                                label="Select Health Plan"
                                options={healthPlan}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Health Plan"
                                onInput={inputHandler}
                              />

                              <Select
                                element="select"
                                id="patient_patientTeam"
                                label="Select Patient Team"
                                options={healthTeam}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Patient Team"
                                onInput={inputHandler}
                              />
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
