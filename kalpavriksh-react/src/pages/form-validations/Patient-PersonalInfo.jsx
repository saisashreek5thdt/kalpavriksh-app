import React from "react";
import { useHistory } from "react-router-dom";

import { VALIDATOR_REQUIRE } from "../../util/validators";

import Input from "../../Components/Input";

import Select from "../../Components/Select";

import { useForm } from "../../hooks/form-hooks";

import Navbar from "../shared/Navbar";

const PatientPersonalInfo = () => {
  const [formState, inputHandler] = useForm(
    {
      amountPaid: {
        value: "",
        isValid: false,
      },
      paymentDate: {
        value: "",
        isValid: false,
      },
      refID: {
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
    console.log(formState.inputs);
    history.push("/userrole/");
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
                        onSubmit={patientPersonalHandler}
                      >
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

                              <Select
                                element="select"
                                id="patient-paymentMode"
                                label="Payment Mode"
                                options={paymentMode}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Payment Mode"
                                onInput={inputHandler}
                              />

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
