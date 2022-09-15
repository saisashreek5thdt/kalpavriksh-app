import React from "react";
import { useHistory } from "react-router-dom";

import { Stepper } from "react-form-stepper";

import { VALIDATOR_REQUIRE } from "../../util/validators";

import Input from "../../Components/Input";

import Select from "../../Components/Select";

import { useForm } from "../../hooks/form-hooks";

import Navbar from "../shared/Navbar";

const PatientPersonalInfo = () => {
  const [formState, inputHandler] = useForm(
    {
      patient_amountPaid: {
        value: "",
        isValid: false,
      },
      patient_paymentMode: {
        value: "",
        isValid: false,
      },
      patient_paymentDate: {
        value: "",
        isValid: false,
      },
      patient_refID: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const paymentMode = [
    { value: "Please Select Payment Mode" },
    { value: "Online - UPI, etc" },
    { value: "Card - Debit" },
    { value: "Card - Credit" },
    { value: "Cash" },
  ];

  const history = useHistory();

  const patientPersonalHandler = (e) => {
    e.preventDefault();
    if (
      formState.inputs.patient_amountPaid.value === "" ||
      formState.inputs.patient_paymentMode.value === "" ||
      formState.inputs.patient_paymentDate.value === "" ||
      formState.inputs.patient_refID.value === "" 
    ) {
      return null;
    } else {
      console.log(formState.inputs);
      history.push("/userrole/:roleid/doctor/");
    }
  };

  return (
    <>
      {/* Patient Dashboard Container Starts Here */}
      <div className="dashboard__Container">
        {/* Navbar Container Starts Here */}
        <Navbar />
        {/* Navbar Container Ends Here */}
        {/* Header Section Starts Here */}
        <header className="header__Box">
          <div className="header__Box--Heading">
            <h1 className="header__Box--Heading-Primary">Dashboard</h1>
          </div>
        </header>
        {/* Header Section Ends Here */}
        <main>
          <div className="forms__Container">
            {/* Replace with your content */}
            <div className="forms__Header">
              <div className="forms__Header--FlexBox">
                <h2 className="forms__Header--FlexBox-Heading">
                  Enroll Patient Form
                </h2>
                {/* Multi Step Form Section Starts Here */}
                {/* Stepper Section Start */}
                <Stepper
                  steps={[
                    { label: "Step 1", active: true, completed: true },
                    { label: "Step 2", active: true, completed: true },
                    { label: "Step 3", active: true, completed: true },
                  ]}
                  active="true"
                  activeStep={2}
                  activebgcolor="#3E503C"
                />
                {/* Stepper Section End */}
                <div className="forms__GridBox">
                  <div className="forms__GridBox--GridCols">
                    <div className="forms__GridBox--GridGaps">
                      {/* Multi Form Section Start */}
                      <form
                        action="#"
                        method="POST"
                        onSubmit={patientPersonalHandler}
                      >
                        {/* Mutli Form Controller Start */}
                        <div className="forms__Controller">
                          <div className="forms__Controller--Box">
                            {/* Multi Form Input Section Start */}
                            <div className="forms__Controller--Grids">
                              {/* Input Type Component Number */}
                              <Input
                                element="input"
                                id="patient_amountPaid"
                                type="number"
                                label="Amount Paid"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter the Amount"
                                onInput={inputHandler}
                              />
                              {/* Input Select Component Paymntmode */}
                              <Select
                                element="select"
                                id="patient_paymentMode"
                                label="Payment Mode"
                                options={paymentMode}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Payment Mode"
                                onInput={inputHandler}
                              />
                              {/* Input Type Component Date */}
                              <Input
                                element="input"
                                id="patient_paymentDate"
                                type="date"
                                label="Payment Date"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Valid Date"
                                onInput={inputHandler}
                              />
                              {/* Input Type Component Text */}
                              <Input
                                element="input"
                                id="patient_refID"
                                type="text"
                                label="Ref. ID"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Valid Ref ID"
                                onInput={inputHandler}
                              />
                            </div>
                            {/* Multi Form Input Section End */}
                          </div>
                        </div>
                        {/* Mutli Form Controller End */}
                        {/* Mutli Form Button Container Start */}
                        <div className="forms__Controller--Btn-Container">
                          {/* Mutli Form Button Start */}
                          <div className="text-right">
                            <button
                              type="submit"
                              className="forms__Controller--Btn-Container_Btn-Green"
                            >
                              Submit
                            </button>
                          </div>
                          {/* Mutli Form Button End */}
                        </div>
                        {/* Mutli Form Button Container End */}
                      </form>
                      {/* Multi Form Section End */}
                    </div>
                  </div>
                </div>
                {/* Multi Step Form Section Ends Here */}
              </div>
            </div>

            {/* /End replace */}
          </div>
        </main>
      </div>
      {/* Patient Dashboard Container Ends Here */}
    </>
  );
};

export default PatientPersonalInfo;
