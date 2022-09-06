import React from "react";

import { useHistory } from "react-router-dom";

import Input from "../../Components/Input";
import Select from "../../Components/Select";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MAXLENGTH,
} from "../../util/validators";

import { useForm } from "../../Hooks/form-hooks";

const Stepper = () => {

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
      <ul className="stepper">
        <li className="stepper-step stepper-active">
          <div className="stepper-head">
            <span className="stepper-head-icon">1</span>
            <span className="stepper-head-text">Step1</span>
          </div>
          <div className="stepper-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </li>
        <li className="stepper-step">
          <div className="stepper-head">
            <span className="stepper-head-icon">2</span>
            <span className="stepper-head-text">Step2</span>
          </div>
          <div className="stepper-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </li>
        <li className="stepper-step">
          <div className="stepper-head">
            <span className="stepper-head-icon">3</span>
            <span className="stepper-head-text">Step3</span>
          </div>
          <div className="stepper-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </li>
      </ul>
    </>
  );
};

export default Stepper;
