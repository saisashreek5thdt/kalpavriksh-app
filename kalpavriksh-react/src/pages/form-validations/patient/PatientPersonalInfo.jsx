import React, { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stepper } from "react-form-stepper";
import Navbar from "../../../user/shared/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { patientEnrollment } from "../../../action/PatientAction";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";
import { useEffect } from "react";
import { ENROLMENT_PATIENT_RESET } from "../../../constant.js/PatientConstant";

import Input from "../../../Components/Input";
import Select from "../../../Components/Select";
import { useForm } from "../../../hooks/form-hooks";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../utils/validators";

const PatientPersonalInfo = () => {
  const location = useLocation();
  const {
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
  } = location.state;
  console.log(phone)
  let navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentNextDate, setPaymentNextDate] = useState("");
  const [refId, setRefId] = useState("");
  // console.log(location.state)
  const dispatch = useDispatch();
  const enrolmentpatient = useSelector((state) => state.enrollmentPatient);
  const { loading, error, enrolment, success } = enrolmentpatient;

  const paymentModeOptions = [
    { value: "Please Select Payment Mode" },
    { value: "Cash" },
    { value: "Card" },
    { value: "Netbanking" },
    { value: "Online (UPI)" }
  ];

  const [formState, inputHandler, setFormData] = useForm(
    {
      amount: {
        value: "",
        isValid: false,
      },
      paymentMode: {
        value: "",
        isValid: false,
      },
      paymentDate: {
        value: "",
        isValid: false,
      },
      paymentNextDate: {
        value: "",
        isValid: false,
      },
      refId: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(()=>{
    setFormData({
      ...formState.inputs,
      amount: {
        value: "",
        isValid: false,
      },
      paymentMode: {
        value: "",
        isValid: false,
      },
      paymentDate: {
        value: "",
        isValid: false,
      },
      paymentNextDate: {
        value: "",
        isValid: false,
      },
      refId: {
        value: "",
        isValid: false,
      },
    });
  },[])

  const submitHandler = (e) => {
    e.preventDefault();
       setAmount(formState.inputs.amount.value)
       setPaymentMode(formState.inputs.paymentMode.value)
       setPaymentDate(formState.inputs.paymentDate.value)  
       setPaymentNextDate(formState.inputs.paymentNextDate.value)
       setRefId(formState.inputs.refId.value)
    
    console.log(amount,paymentMode,paymentDate,refId,paymentNextDate,'iss')
    // if(amount === '' || paymentMode === '' || paymentDate === '' || paymentNextDate === '' || refId === ''){
    //     alert('please enter full fields')
    // }else{
      dispatch(
        patientEnrollment(
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
          amount,
          paymentMode,
          paymentDate,
          refId,
          paymentNextDate
        )
      );
    // }  



    console.log(formState,'form')

    
    
    //
  };
  useEffect(() => {
    if (success) {
      dispatch({ type: ENROLMENT_PATIENT_RESET });
      alert("Patent Enrolled Succesfully");
      navigate("/userrole/:roleid/dashboard/doctor/");
    }
  }, [success]);

  

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
                activeStep={4}
              />
              <div className="dashboard__Grid-Box">
                <div className="dashboard__Grid-Cols">
                  <form onSubmit={submitHandler}>
                    <div className="form__Box-Shadow">
                      <div className="form__Box-Space">
                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="amount"
                              className="form__Label-Heading"
                            >
                              Amount To Be Paid
                            </label>
                            <input
                              onChange={(e) => setAmount(e.target.value)}
                              type="text"
                              name="amount"
                              id="amount"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                            */}
                            <Input
                              element="input"
                              type="text"
                              label="Amount To Be Paid"
                              id="amount"
                              placeholder="Amount To Be Paid"
                              validators={[VALIDATOR_MINLENGTH(1)]}
                              errorText="Please Enter Valid Number"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="payment-mode"
                              className="form__Label-Heading"
                            >
                              Payment Mode
                            </label>
                            <select
                              onChange={(e) => setPaymentMode(e.target.value)}
                              id="payment-mode"
                              name="payment-mode"
                              autoComplete="payment-mode-name"
                              className="form__Select"
                            >
                              <option>Select Payment Mode</option>
                              <option va>Cash</option>
                              <option>Card</option>
                              <option>Online</option>
                            </select>
                            */}
                            <Select
                              element="select"
                              id="paymentMode"
                              label="Select Payment Mode"
                              options={paymentModeOptions}
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select Payment Mode"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="payment-date"
                              className="form__Label-Heading"
                            >
                              Payment Date
                            </label>
                            <input
                              onChange={(e) => setPaymentDate(e.target.value)}
                              type="date"
                              name="payment-date"
                              id="payment-date"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                            */}
                            <Input
                              element="input"
                              type="date"
                              label="Payment Date"
                              id="paymentDate"
                              placeholder="Payment Date"
                              validators={[VALIDATOR_MINLENGTH(1)]}
                              errorText="Please Select Valid Date"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="ref-id"
                              className="form__Label-Heading"
                            >
                              Ref. Id
                            </label>
                            <input
                              onChange={(e) => setRefId(e.target.value)}
                              type="text"
                              name="ref-id"
                              id="ref-id"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                            */}
                            <Input
                              element="input"
                              type="text"
                              label="Ref. Id"
                              id="refId"
                              placeholder="Ref. Id"
                              validators={[VALIDATOR_MINLENGTH(1)]}
                              errorText="Please Enter Valid Ref.Id"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            {/*
                            <label
                              htmlFor="next-date"
                              className="form__Label-Heading"
                            >
                              Next Payment Date
                            </label>
                            <input
                              onChange={(e) =>
                                setPaymentNextDate(e.target.value)
                              }
                              type="date"
                              name="next-date"
                              id="next-date"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                            */}
                            <Input
                              element="input"
                              type="date"
                              label="Next Payment Date"
                              id="paymentNextDate"
                              placeholder="Next Payment Date"
                              validators={[VALIDATOR_MINLENGTH(1)]}
                              errorText="Please Select Valid Date"
                              onInput={inputHandler}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form__Btn-Bg">
                        <div className="text-right">
                          <button type="submit" className="form__Btn-Submit">
                            Finish
                          </button>
                        </div>
                        {loading && <LoadingBox></LoadingBox>}
                        {error && <MessageBox>{error}</MessageBox>}
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

export default PatientPersonalInfo;