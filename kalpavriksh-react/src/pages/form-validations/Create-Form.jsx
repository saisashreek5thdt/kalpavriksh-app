import React from "react";
import { useHistory } from "react-router-dom";

import { VALIDATOR_REQUIRE } from "../../util/validators";

import Input from "../../Components/Input";

import { useForm } from "../../hooks/form-hooks";

import Navbar from "../shared/Navbar";

const CreateForm = () => {

  const [formState, inputHandler] = useForm(
    {
      formTitle: {
        value: '',
        isValid: false
      },
      questionTitle: {
        value: '',
        isValid: false
      },
      questionChoice: {
        value: '',
        isValid: false
      },
    },
    false
  );

  const history = useHistory();

  const createFormHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    history.push("/userrole/");
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
                  Create Form Record
                </h2>
                <div className="forms__GridBox">
                  <div className="forms__GridBox--GridCols">
                    <div className="forms__GridBox--GridGaps">
                      <form
                        action="#"
                        method="POST"
                        onSubmit={createFormHandler}
                      >
                        <div className="forms__Controller">
                          <div className="forms__Controller--Box">
                            <div className="forms__Controller--Grids">

                              <Input 
                                element="input"
                                id="patient-formQuestionTitle"
                                type="text"
                                label="Form Question Title"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter a Form Title"
                                onInput={inputHandler}
                              />

                              {/* <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-formQuestionTitle"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Form Question Title
                                </label>
                                <input
                                  type="text"
                                  name="patient-formQuestionTitle"
                                  id="patient-formQuestionTitle"
                                  autoComplete="patient-formQuestionTitle"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div> */}

                              <div className="col-span-3 sm:col-span-6">
                                <button
                                  type="submit"
                                  className="forms__Controller--Btn-Container_Btn-Gray"
                                >
                                  Add Question
                                </button>
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-questionType"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Question Type
                                </label>
                                <select
                                  id="patient-questionType"
                                  name="patient-questionType"
                                  autoComplete="patient-questionType"
                                  className="forms__Controller--Grids_Cols-Select"
                                >
                                  <option>Please Select Question Type</option>
                                  <option>Input - Text Area</option>
                                  <option>MCQ - Checkbox</option>
                                  <option>MCQ - Radio</option>
                                </select>
                              </div>

                              <Input 
                                element="input"
                                id="patient-questionTitle"
                                type="text"
                                label="Question Title"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter a Question Title"
                                onInput={inputHandler}
                              />

                              <Input 
                                element="input"
                                id="patient-questionChoice"
                                type="text"
                                label="Question Choice 1"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter a Question Choice"
                                onInput={inputHandler}
                              />

                              <Input 
                                element="input"
                                id="patient-questionChoice"
                                type="text"
                                label="Question Choice 2"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter a Question Choice"
                                onInput={inputHandler}
                              />

                              <Input 
                                element="input"
                                id="patient-questionChoice"
                                type="text"
                                label="Question Choice 3"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter a Question Choice"
                                onInput={inputHandler}
                              />

                              <Input 
                                element="input"
                                id="patient-questionChoice"
                                type="text"
                                label="Question Choice 4"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter a Question Choice"
                                onInput={inputHandler}
                              />

                              {/* <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-questionTitle"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Question Title
                                </label>
                                <input
                                  type="text"
                                  name="patient-questionTitle"
                                  id="patient-questionTitle"
                                  autoComplete="patient-questionTitle"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-questionChoice"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Question Choice 1
                                </label>
                                <input
                                  type="text"
                                  name="patient-questionChoice"
                                  id="patient-questionChoice"
                                  autoComplete="patient-questionChoice"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-questionChoice"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Question Choice 2
                                </label>
                                <input
                                  type="text"
                                  name="patient-questionChoice"
                                  id="patient-questionChoice"
                                  autoComplete="patient-questionChoice"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-questionChoice"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Question Choice 3
                                </label>
                                <input
                                  type="text"
                                  name="patient-questionChoice"
                                  id="patient-questionChoice"
                                  autoComplete="patient-questionChoice"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-questionChoice"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Question Choice 4
                                </label>
                                <input
                                  type="text"
                                  name="patient-questionChoice"
                                  id="patient-questionChoice"
                                  autoComplete="patient-questionChoice"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div> */}

                            </div>
                          </div>
                        </div>
                        <div className="forms__Controller--Btn-Container">
                          <div className="text-right">
                            <button
                              type="submit"
                              className="forms__Controller--Btn-Container_Btn-Green"
                            >
                              Submit
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

export default CreateForm;
