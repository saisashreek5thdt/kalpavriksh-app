import React from "react";

import Input from "../../Components/Input";
import Select from "../../Components/Select";

import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH } from "../../util/validators";

import { useForm } from "../../hooks/form-hooks";

import Navbar from "../shared/Navbar";

const EnrollPatient = ({history}) => {

  // const [val, setVal] = useState({ phone: "", email: "", fullName: "", dob: "", vegetation: "" })

  const [formState, inputHandler] = useForm(
    {
      patient_phone: {
        value: '',
        isValid: false
      },
      patient_email: {
        value: '',
        isValid: false
      },
      patient_fullName: {
        value: '',
        isValid: false
      },
      patient_dob: {
        value: '',
        isValid: false
      },
      patient_vegetationType: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const genderOptions = [
    { value: 'Please Select a Gender' },
    { value: 'Male' },
    { value: 'Fe-Male' }
  ];


  const patientFormHandler = (e) => {
    e.preventDefault();
    if (formState.inputs.patient_phone.value === '' || formState.inputs.patient_email.value === '' || formState.inputs.patient_fullName.value === '' || formState.inputs.patient_dob.value === '' || formState.inputs.patient_vegetationType.value === '') {
      return null
    } else {
      console.log(formState.inputs);
    }
    history.push('/userrole/:pid/enroll/healthinfo/');
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
                      <form action="#" method="POST" onSubmit={patientFormHandler}>
                        <div className="forms__Controller">
                          <div className="forms__Controller--Box">
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
                            <div className="forms__Controller--Grids">

                              <Input
                                element="input"
                                id="patient_phone"
                                type="tel"
                                label="Phone"
                                validators={[VALIDATOR_MAXLENGTH(10)]}
                                errorText="Please Enter 10 Digit Number"
                                onInput={inputHandler}
                              />

                              <Input
                                element="input"
                                id="patient_email"
                                type="email"
                                label="Email"
                                validators={[VALIDATOR_EMAIL()]}
                                errorText="Please Enter a valid Email Address"
                                onInput={inputHandler}
                              />

                              <Input
                                element="input"
                                id="patient_fullName"
                                type="text"
                                label="Full Name"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Valid Name"
                                onInput={inputHandler}
                              />

                              <Input
                                element="input"
                                id="patient_dob"
                                type="date"
                                label="D.O.B"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Valid Date"
                                onInput={inputHandler}
                              />

                              {/* <Select
                                  element="select"
                                  id="patient-gender"
                                  label="Please Select Gender"
                                  options={genderOptions}
                                  validators={VALIDATOR_REQUIRE()}
                                  errorText="Please Select Your Gender"
                                  onInput={inputHandler} /> */}

                              {/* <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-phone"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Phone
                                </label>
                                <input
                                  type="tel"
                                  name="patient-phone"
                                  id="patient-phone"
                                  autoComplete="patient-phone"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-email"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Email (Optional)
                                </label>
                                <input
                                  type="email"
                                  name="patient-email"
                                  id="patient-email"
                                  autoComplete="patient-email"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-fullName"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  name="patient-fullName"
                                  id="patient-fullName"
                                  autoComplete="patient-fullName"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-dob"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  D.O.B
                                </label>
                                <input
                                  type="date"
                                  name="patient-dob"
                                  id="patient-dob"
                                  autoComplete="patient-dob"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div> */}

                              {/* <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-gender"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Select Gender
                                </label>
                                <select
                                  id="patient-gender"
                                  name="patient-gender"
                                  autoComplete="patient-gender"
                                  className="forms__Controller--Grids_Cols-Select"
                                >
                                  <option>Please Select Gender</option>
                                  <option>Male</option>
                                  <option>Fe-Male</option>
                                </select>
                              </div> */}
                              <Select
                                element="select"
                                id="patient_vegetationType"
                                label="Vegetation Type"
                                options={genderOptions}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Gender"
                                onInput={inputHandler}
                              />
                            </div>
                          </div>
                          <div className="forms__Controller--Btn-Container">
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

export default EnrollPatient;
