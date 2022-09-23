import React from "react";

import { useHistory } from "react-router-dom";

import { Stepper } from "react-form-stepper";

import Input from "../../Components/Input";
import Select from "../../Components/Select";

import FloatingButton from "../../Components/Floating-Button";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MAXLENGTH,
} from "../../util/validators";

import { useForm } from "../../hooks/form-hooks";

import Navbar from "../shared/Navbar";

const EnrollPatient = () => {
  // const [val, setVal] = useState({ phone: "", email: "", fullName: "", dob: "", vegetation: "" })

  const [formState, inputHandler] = useForm(
    {
      patient_phone: {
        value: "",
        isValid: false,
      },
      patient_email: {
        value: "",
        isValid: false,
      },
      patient_fullName: {
        value: "",
        isValid: false,
      },
      patient_dob: {
        value: "",
        isValid: false,
      },
      patient_gender: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const genderOptions = [
    { value: "Please Select a Gender" },
    { value: "Male" },
    { value: "Fe-Male" },
  ];

  const history = useHistory();

  const patientFormHandler = (e) => {
    e.preventDefault();
    if (
      formState.inputs.patient_phone.value === "" ||
      formState.inputs.patient_email.value === "" ||
      formState.inputs.patient_fullName.value === "" ||
      formState.inputs.patient_dob.value === "" ||
      formState.inputs.patient_gender.value === ""
    ) {
      return null;
    } else {
      console.log(formState.inputs);
    }
    history.push("/userrole/:pid/enroll/healthinfo/");
  };

  return (
    <>
      {/* Patient Dashboard Container Starts Here */}
      <div className="dashboard__Container">
        {/* Navbar Container Starts Here */}
        {/* <Navbar /> */}
        {/* Navbar Container Ends Here */}
        {/* Header Section Starts Here */}
        {/* <header className="header__Box">
          <div className="header__Box--Heading">
            <h1 className="header__Box--Heading-Primary">Dashboard</h1>
          </div>
        </header> */}
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
                    { label: "Step 1", active: false, completed: false },
                    { label: "Step 2", active: false, completed: false },
                    { label: "Step 3", active: false, completed: false },
                  ]}
                  active="true"
                  activeStep={0}
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
                        onSubmit={patientFormHandler}
                      >
                        {/* Mutli Form Controller Start */}
                        <div className="forms__Controller">
                          <div className="forms__Controller--Box">
                            {/* Mutli Form Image Picker Section Start */}
                            <div>
                              <label className="forms__Controller--Box_Label-Photo">
                                Photo
                              </label>
                              <div className="forms__Controller--Box_FlexItems">
                                <span className="forms__Controller--Box_FlexItems-Span">
                                  <svg
                                    className="forms__Controller--Box_FlexItems-Icon"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                </span>
                                <button
                                  type="button"
                                  className="forms__Controller--Box_FlexItems-Btn"
                                >
                                  Change
                                </button>
                              </div>
                            </div>
                            {/* Mutli Form Image Picker Section End */}
                            {/* Multi Form Input Section Start */}
                            <div className="forms__Controller--Grids">
                              {/* Input Type Component Phone */}
                              <Input
                                element="input"
                                id="patient_phone"
                                type="tel"
                                label="Phone"
                                validators={[VALIDATOR_MAXLENGTH(10)]}
                                errorText="Please Enter 10 Digit Number"
                                onInput={inputHandler}
                              />
                              {/* Input Type Component Email Address */}
                              <Input
                                element="input"
                                id="patient_email"
                                type="email"
                                label="Email"
                                validators={[VALIDATOR_EMAIL()]}
                                errorText="Please Enter a valid Email Address"
                                onInput={inputHandler}
                              />
                              {/* Input Type Component Full Name */}
                              <Input
                                element="input"
                                id="patient_fullName"
                                type="text"
                                label="Full Name"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Valid Name"
                                onInput={inputHandler}
                              />
                              {/* Input Type Component Date */}
                              <Input
                                element="input"
                                id="patient_dob"
                                type="date"
                                label="D.O.B"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Valid Date"
                                onInput={inputHandler}
                              />
                              {/* Input Select Component Gender */}
                              <Select
                                element="select"
                                id="patient_gender"
                                label="Select Gender"
                                options={genderOptions}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Gender"
                                onInput={inputHandler}
                              />
                            </div>
                            {/* Multi Form Input Section End */}
                          </div>
                          {/* Mutli Form Button Container Start */}
                          <div className="forms__Controller--Btn-Container">
                            {/* Mutli Form Button Start */}
                            <button
                              type="submit"
                              className="forms__Controller--Btn-Container_Btn"
                            >
                              Save &amp; Next
                            </button>
                            {/* Mutli Form Button End */}
                          </div>
                          {/* Mutli Form Button Container End */}
                        </div>
                        {/* Mutli Form Controller End */}
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
      <FloatingButton />
    </>
  );
};

export default EnrollPatient;
