import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stepper } from "react-form-stepper";
import Navbar from "../../../user/shared/Navbar";

import Input from "../../../Components/Input";
import Select from "../../../Components/Select";
import { useForm } from "../../../hooks/form-hooks";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../utils/validators";

const PatientHealthInfo = () => {
  // const [height, setHeight] = useState("");
  // const [weight, setWeight] = useState("");
  // const [caretakerName, setCaretakerName] = useState("");
  // const [relation, setRelation] = useState("");
  // const [caretakerNumber, setCaretakerNumber] = useState("");
  // const [caretakerTime, setCaretakerTime] = useState("");
  // const [healthPlan, setHealthPlan] = useState("");
  // const [planDate, setPlanDate] = useState("");
  // const [patientTeam, setPatientTeam] = useState("");
  const location = useLocation();
  const { phone, name, email, dob, gender } = location.state;
  // console.log(phone, name, email, dob, gender);

  const [formState, inputHandler, setFormData] = useForm(
    {
      height: {
        value: "",
        isValid: false,
      },
      weight: {
        value: "",
        isValid: false,
      },
      caretakerName: {
        value: "",
        isValid: false,
      },
      relation: {
        value: "",
        isValid: false,
      },
      caretakerNumber: {
        value: "",
        isValid: false,
      },
      caretakerTime: {
        value: "",
        isValid: false,
      },
      healthPlan: {
        value: "",
        isValid: false,
      },
      planDate: {
        value: "",
        isValid: false,
      },
      patientTeam: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const relationOptions = [
    { value: "Please Select Caretaker Relation" },
    { value: "Father" },
    { value: "Mother" },
    { value: "Brother" },
    { value: "Sister" },
    { value: "Son" },
    { value: "Daughter" },
    { value: "Son-In-Law" },
    { value: "Daughter-In-Law" },
    { value: "Spouse" },
  ];

  const healthPlanOptions = [
    { value: "Please Select Health Plan" },
    { value: "Plan A" },
    { value: "Plan B" },
    { value: "Plan C" },
    { value: "Plan D" }
  ];

  const healthTeamOptions = [
    { value: "Please Select Health Team" },
    { value: "Team A" },
    { value: "Team B" },
    { value: "Team C" },
    { value: "Team D" }
  ];

  let navigate = useNavigate();

  const nextStep = (e) => {
    e.preventDefault()
  
    setFormData(
      {
        ...formState.inputs,
        height: {
          value: "",
          isValid: false,
        },
        weight: {
          value: "",
          isValid: false,
        },
        caretakerName: {
          value: "",
          isValid: false,
        },
        relation: {
          value: "",
          isValid: false,
        },
        caretakerNumber: {
          value: "",
          isValid: false,
        },
        caretakerTime: {
          value: "",
          isValid: false,
        },
        healthPlan: {
          value: "",
          isValid: false,
        },
        planDate: {
          value: "",
          isValid: false,
        },
        patientTeam: {
          value: "",
          isValid: false,
        },
      },
      false
    );

    console.log(formState,'form')

    
    const height = formState.inputs.height.value
    const weight = formState.inputs.weight.value
    const caretakerName = formState.inputs.caretakerName.value
    const relation = formState.inputs.relation.value
    const caretakerNumber = formState.inputs.caretakerNumber.value
    const caretakerTime = formState.inputs.caretakerTime.value
    const healthPlan = formState.inputs.healthPlan.value
    const planDate = formState.inputs.planDate.value
    const patientTeam = formState.inputs.patientTeam.value
    console.log(formState)
    if(height === '' || weight === '' || caretakerName === '' || relation === '' || caretakerNumber === '' || caretakerTime === '' || healthPlan === '' || planDate === '' || patientTeam === ''  ){
      alert('please fill all the fields')
    }else{
      navigate("/userrole/:roleid/dashboard/doctor/enrol/personalinfo/", {
        state: {
          phone,
          name,
          email,
          dob,
          gender,
          height,
          weight,
          caretakerName,
          relation,
          caretakerNumber,
          caretakerTime,
          healthPlan,
          planDate,
          patientTeam,
        },
      });
    }  
  };

  return (
    <>
      <div className="dashboard__Container">
        <Navbar />
        <main>
          <div className="dashboard__Main-Content">
            {/* Replace with your content */}
            <div className="dashboard__Main-Inner-Content">
              <Stepper
                steps={[
                  { label: "CreatePatient" },
                  { label: "PatientHealthInfo" },
                  { label: "PatientPersonalInfo" },
                ]}
                activeStep={2}
              />
              <div className="dashboard__Grid-Box">
                <div className="dashboard__Grid-Cols">
                  <form onSubmit={nextStep}>
                    <div className="form__Box-Shadow">
                      <div className="form__Box-Space">
                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="height"
                              className="form__Label-Heading"
                            >
                              Patient Height
                            </label>
                            <input
                              required
                              onChange={(e) => setHeight(e.target.value)}
                              type="text"
                              name="height"
                              id="hight"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                            */}
                            <Input
                              element="input"
                              type="text"
                              label="Patient Height"
                              id="height"
                              placeholder="Patient Height"
                              validators={[VALIDATOR_MINLENGTH(1)]}
                              errorText="Please Enter Valid Number"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="weight"
                              className="form__Label-Heading"
                            >
                              Patient Weight
                            </label>
                            <input
                              required
                              onChange={(e) => setWeight(e.target.value)}
                              type="text"
                              name="weight"
                              id="weight"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                            */}
                            <Input
                              element="input"
                              type="text"
                              label="Patient Weight"
                              id="weight"
                              placeholder="Patient Weight"
                              validators={[VALIDATOR_MINLENGTH(1)]}
                              errorText="Please Enter Name"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="caretaker-name"
                              className="form__Label-Heading"
                            >
                              Caretakers Full Name
                            </label>
                            <input
                              required
                              onChange={(e) => setCaretakerName(e.target.value)}
                              type="text"
                              name="caretaker-name"
                              id="caretaker-name"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                            */}
                            <Input
                              element="input"
                              type="text"
                              label="Caretakers Full Name"
                              id="caretakerName"
                              placeholder="Caretakers Full Name"
                              validators={[VALIDATOR_MINLENGTH(1)]}
                              errorText="Please Enter Valid Name"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="relation"
                              className="form__Label-Heading"
                            >
                              Caretakers Relation
                            </label>
                            <select
                              required
                              onChange={(e) => setRelation(e.target.value)}
                              id="relation"
                              name="relation"
                              autoComplete="relation-name"
                              className="form__Select"
                            >
                              <option>Select Caretakers Relation</option>
                              <option value="Father">Father</option>
                              <option value="Mother">Mother</option>
                              <option value="Son">Son</option>
                              <option value="Daughter">Daughter</option>
                              <option value="Son-In-Law">Son-In-Law</option>
                              <option value="Daughter-In-Law">
                                Daughter-In-Law
                              </option>
                            </select>
                            */}
                            <Select
                              element="select"
                              id="relation"
                              label="Select Relation"
                              options={relationOptions}
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select Your Relationship"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="caretaker-number"
                              className="form__Label-Heading"
                            >
                              Caretakers Phone Number
                            </label>
                            <input
                              required
                              onChange={(e) =>
                                setCaretakerNumber(e.target.value)
                              }
                              type="tel"
                              name="caretaker-number"
                              id="caretaker-number"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                            */}
                            <Input
                              element="input"
                              type="text"
                              label="Caretakers Number"
                              id="caretakerNumber"
                              placeholder="Caretakers Number"
                              validators={[VALIDATOR_MINLENGTH(10)]}
                              errorText="Please Enter Valid Number"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="pref-time"
                              className="form__Label-Heading"
                            >
                              Caretakers Preferred Time
                            </label>
                            <input
                              required
                              onChange={(e) => setCaretakerTime(e.target.value)}
                              type="time"
                              name="pref-time"
                              id="pref-time"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                            */}
                            <Input
                            
                              element="input"
                              type="time"
                              label="Caretakers Preferred Time"
                              id="caretakerTime"
                              placeholder="Caretakers Preferred Time"
                              validators={[VALIDATOR_MINLENGTH(1)]}
                              errorText="Please Select Valid Time"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="health-plan"
                              className="form__Label-Heading"
                            >
                              Health Plan
                            </label>
                            <select
                              required
                              onChange={(e) => setHealthPlan(e.target.value)}
                              id="health-plan"
                              name="health-plan"
                              autoComplete="health-plan-name"
                              className="form__Select"
                            >
                              <option>Select Health Plan</option>
                              <option value="plan A">Plan A</option>
                              <option value="plan B">Plan B</option>
                              <option>Plan C</option>
                              <option>Plan D</option> 
                            </select>
                            */}
                            <Select
                              element="select"
                              id="healthPlan"
                              label="Select Health Plan"
                              options={healthPlanOptions}
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select Health Plan"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="plan-date"
                              className="form__Label-Heading"
                            >
                              Health Plan Date (Start + End)
                            </label>
                            <input
                              onChange={(e) => setPlanDate(e.target.value)}
                              type="date"
                              required
                              name="plan-date"
                              id="plan-date"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                            */}
                            <Input
                              element="input"
                              type="date"
                              label="Health Plan Date (Start + End)"
                              id="planDate"
                              placeholder="Health Plan Date (Start + End)"
                              validators={[VALIDATOR_MINLENGTH(1)]}
                              errorText="Please Select Valid Date"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="patient-team"
                              className="form__Label-Heading"
                            >
                              Patient Team
                            </label>
                            <select
                              onChange={(e) => setPatientTeam(e.target.value)}
                              id="patient-team"
                              required
                              name="patient-team"
                              autoComplete="patient-team-name"
                              className="form__Select"
                            >
                              <option>Select Patient Team</option>
                              <option value="Team A">Team A</option>
                              <option value="Team B"> Team B</option>
                              <option>Team C</option>
                              <option>Team D</option>
                            </select>
                            */}
                            <Select
                              element="select"
                              id="patientTeam"
                              label="Select Patient Team"
                              options={healthTeamOptions}
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select Health Team"
                              onInput={inputHandler}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form__Btn-Bg">
                        <div className="text-right">
                          <button type="submit" className="form__Btn-Submit">
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
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