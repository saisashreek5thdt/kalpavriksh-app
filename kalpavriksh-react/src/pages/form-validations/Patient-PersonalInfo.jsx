import React from "react";
import { useHistory } from "react-router-dom";

import { VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH } from "../../util/validators";

import Input from "../../Components/Input";

import { useForm } from "../../hooks/form-hooks";

import Navbar from "../shared/Navbar";

const PatientPersonalInfo = () => {

  const [formState, inputHandler] = useForm(
    {
      amountPaid: {
        value: '',
        isValid: false
      },
      paymentDate: {
        value: '',
        isValid: false
      },
      refID: {
        value: '',
        isValid: false
      },
    },
    false
  );

  const history = useHistory();

  const patientPersonalHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    history.push('/userrole/');
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
                      <form action="#" method="POST" onSubmit={patientPersonalHandler}>
                        <div className="forms__Controller">
                          <div className="forms__Controller--Box">
                            <div className="forms__Controller--Grids">

                              <Input 
                                element="input"
                                id="patient-amountPaid"
                                type="number"
                                label="Amount Paid"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter the Amount"
                                onInput={inputHandler}
                              />

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-paymentMode"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Payment Mode
                                </label>
                                <select
                                  id="patient-paymentMode"
                                  name="patient-paymentMode"
                                  autoComplete="patient-paymentMode"
                                  className="forms__Controller--Grids_Cols-Select"
                                >
                                  <option>
                                    Please Select Payment Mode
                                  </option>
                                  <option>Online - UPI, etc</option>
                                  <option>Card - Debit</option>
                                  <option>Card - Credit</option>
                                  <option>Cash</option>
                                </select>
                              </div>

                              <Input 
                                element="input"
                                id="patient-paymentDate"
                                type="date"
                                label="Payment Date"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Valid Date"
                                onInput={inputHandler}
                              />

                              <Input 
                                element="input"
                                id="patient-refID"
                                type="text"
                                label="Ref. ID"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Valid Ref ID"
                                onInput={inputHandler}
                              />

                              {/* <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-amountPaid"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Amount Paid
                                </label>
                                <input
                                  type="number"
                                  name="patient-amountPaid"
                                  id="patient-amountPaid"
                                  autoComplete="patient-amountPaid"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>                              

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-paymentDate"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Payment Date
                                </label>
                                <input
                                  type="date"
                                  name="patient-paymentDate"
                                  id="patient-paymentDate"
                                  autoComplete="patient-paymentDate"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div> 

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-refID"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Ref. ID
                                </label>
                                <input
                                  type="text"
                                  name="patient-refID"
                                  id="patient-refID"
                                  autoComplete="patient-refID"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>
                              */}
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

export default PatientPersonalInfo;
