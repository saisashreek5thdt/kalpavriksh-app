import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { VALIDATOR_REQUIRE } from "../../util/validators";

import Input from "../../Components/Input";

import { useForm } from "../../hooks/form-hooks";

import Navbar from "../shared/Navbar";

import FloatingButton from '../../Components/Floating-Button'

const CreateForm = () => {
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "textarea", text: "Text Area" },
    { value: "checkbox", text: "CheckBox" },
    { value: "radio", text: "Radio" },
  ];
  const [question, setQuestion] = useState(false);
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const [formState, inputHandler] = useForm(
    {
      patient_FormQuestionTitle: {
        value: "",
        isValid: false,
      },
      patient_QuestionTitle: {
        value: "",
        isValid: false,
      },
      patient_QuestionChoice1: {
        value: "",
        isValid: false,
      },
      patient_QuestionChoice2: {
        value: "",
        isValid: false,
      },
      patient_QuestionChoice3: {
        value: "",
        isValid: false,
      },
      patient_QuestionChoice4: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const createFormHandler = (e) => {
    e.preventDefault();
    /*
    if (
      formState.inputs.patient_FormQuestionTitle.value === "" ||
      formState.inputs.patient_QuestionTitle.value === "" ||
      formState.inputs.patient_QuestionChoice1.value === "" ||
      formState.inputs.patient_QuestionChoice2.value === "" ||
      formState.inputs.patient_QuestionChoice3.value === "" ||
      formState.inputs.patient_QuestionChoice4.value === ""
    ) {
      return null;
    } else {
      console.log(formState.inputs);
    }
    */
    console.log(formState.inputs);
    history.push("/userrole/:roleid/doctor/");
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
                  Create Form Record
                </h2>
                <div className="forms__GridBox">
                  <div className="forms__GridBox--GridCols">
                    <div className="forms__GridBox--GridGaps">
                      {/* Form Section Start */}
                      <form
                        action="#"
                        method="POST"
                        onSubmit={createFormHandler}
                      >
                        {/* Form Controller Section Start */}
                        <div className="forms__Controller">
                          <div className="forms__Controller--Box">
                            {/* Form Input Section Start */}
                            <div className="forms__Controller--Grids">
                              {/* Input Type Component Text */}
                              <Input
                                element="input"
                                id="patient_FormQuestionTitle"
                                type="text"
                                label="Form Question Title"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter a Form Title"
                                onInput={inputHandler}
                              />
                              {/* Add Question Section Start */}  
                              <div className="col-span-3 sm:col-span-6">
                                {/* Addd Question Button Start */}
                                <button
                                  type="submit"
                                  className="forms__Controller--Btn-Container_Btn-Gray"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setQuestion(!question);
                                  }}
                                >
                                  Add Question
                                </button>
                                {/* Addd Question Button End */}
                              </div>
                              {/* Add Question Section End */}

                              {question && (
                                <>
                                  <div className="forms__Controller--Grids_Cols">
                                    <label
                                      htmlFor="patient-questionType"
                                      className="forms__Controller--Grids_Cols-Label"
                                    >
                                      Question Type
                                    </label>
                                    {/* <select
                                  id="patient_QuestionType"
                                  name="patient-questionType"
                                  autoComplete="patient-questionType"
                                  className="forms__Controller--Grids_Cols-Select"
                                >
                                  <option>Please Select Question Type</option>
                                  <option>Input - Text Area</option>
                                  <option>MCQ - Checkbox</option>
                                  <option>MCQ - Radio</option>
                                </select> */}
                                    {/* Input Type Component Select */}
                                    <select
                                      value={selected}
                                      onChange={handleChange}
                                      id="patient_QuestionType"
                                      name="patient-questionType"
                                      autoComplete="patient-questionType"
                                      className="forms__Controller--Grids_Cols-Select"
                                    >
                                      {options.map((option) => (
                                        <option
                                          key={option.value}
                                          value={option.value}
                                        >
                                          {option.text}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  {/* Input Type Component Text */}
                                  <Input
                                    element="input"
                                    id="patient_QuestionTitle"
                                    type="text"
                                    label="Question Title"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    errorText="Please Enter a Question Title"
                                    onInput={inputHandler}
                                  />
                                  {selected !== "textarea" && (
                                    <>
                                      {/* Input Type Component Text */}
                                      <Input
                                        element="input"
                                        id="patient_QuestionChoice1"
                                        type="text"
                                        label="Question Choice 1"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please Enter a Question Choice"
                                        onInput={inputHandler}
                                      />
                                      {/* Input Type Component Text */}
                                      <Input
                                        element="input"
                                        id="patient_QuestionChoice2"
                                        type="text"
                                        label="Question Choice 2"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please Enter a Question Choice"
                                        onInput={inputHandler}
                                      />
                                      {/* Input Type Component Text */}
                                      <Input
                                        element="input"
                                        id="patient_QuestionChoice3"
                                        type="text"
                                        label="Question Choice 3"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please Enter a Question Choice"
                                        onInput={inputHandler}
                                      />
                                      {/* Input Type Component Text */}
                                      <Input
                                        element="input"
                                        id="patient_QuestionChoice4"
                                        type="text"
                                        label="Question Choice 4"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please Enter a Question Choice"
                                        onInput={inputHandler}
                                      />
                                    </>
                                  )}
                                </>
                              )}
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
      </div>
      {/* Patient Dashboard Container Ends Here */}
      <FloatingButton />
    </>
  );
};

export default CreateForm;
