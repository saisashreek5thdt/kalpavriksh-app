import React from "react";

import { useHistory } from "react-router-dom";

import Navbar from "../shared/Navbar";

import { VALIDATOR_REQUIRE } from "../../util/validators";

import Input from "../../Components/Input";
import Select from "../../Components/Select";

import { useForm } from "../../hooks/form-hooks";

import FloatingButton from '../../Components/Floating-Button'

const UploadDietChart = () => {
  const [formState, inputHandler] = useForm(
    {
      patient_caloriesRangeLow: {
        value: "",
        isValid: false,
      },
      patient_caloriesRangeHigh: {
        value: "",
        isValid: false,
      },
      patient_CarbohydratesRangeLow: {
        value: "",
        isValid: false,
      },
      patient_CarbohydratesRangeHigh: {
        value: "",
        isValid: false,
      },
      patient_Protiens: {
        value: "",
        isValid: false,
      },
      patient_Fats: {
        value: "",
        isValid: false,
      },
      patient_VegetationType: {
        value: "",
        isValid: false,
      },
      patient_Cuisine: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const cuisineOptions = [
    { value: "Please Select a Cuisine" },
    { value: "Vegetarian" },
    { value: "Non-Veg" },
    { value: "Egg" },
  ];

  const history = useHistory();

  const uploadDietCharthHandler = (e) => {
    e.preventDefault();
    /*
    if (
      formState.inputs.patient_caloriesRangeLow.value === "" ||
      formState.inputs.patient_caloriesRangeHigh.value === "" ||
      formState.inputs.patient_CarbohydratesRangeLow.value === "" ||
      formState.inputs.patient_CarbohydratesRangeHigh.value === "" ||
      formState.inputs.patient_Protiens.value === "" ||
      formState.inputs.patient_Fats.value === "" ||
      formState.inputs.patient_VegetationType.value === "" ||
      formState.inputs.patient_Cuisine.value === ""
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
         <Navbar /> 
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
                  Upload Diet Chart
                </h2>
                <div className="forms__GridBox">
                  <div className="forms__GridBox--GridCols">
                    <div className="forms__GridBox--GridGaps">
                      {/* Form Section Start */}
                      <form
                        action="#"
                        method="POST"
                        onSubmit={uploadDietCharthHandler}
                      >
                        {/* Form Controller Section Start */}
                        <div className="forms__Controller">
                          <div className="forms__Controller--Box">
                            {/* Form Input Section Start */}
                            <div className="forms__Controller--Grids">
                              {/* Input Type Component Text */}
                              <Input
                                element="input"
                                id="patient_caloriesRangeLow"
                                type="text"
                                label="Calories Range (Lower Value)"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter valid Values"
                                onInput={inputHandler}
                              />
                              {/* Input Type Component Text */}
                              <Input
                                element="input"
                                id="patient_caloriesRangeHigh"
                                type="text"
                                label="Calories Range (High Value)"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter valid Values"
                                onInput={inputHandler}
                              />
                              {/* Input Type Component Text */}
                              <Input
                                element="input"
                                id="patient_CarbohydratesRangeLow"
                                type="text"
                                label="Carbohydrates Range (Lower Value)"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter valid Values"
                                onInput={inputHandler}
                              />
                              {/* Input Type Component Text */}
                              <Input
                                element="input"
                                id="patient_CarbohydratesRangeHigh"
                                type="text"
                                label="Carbohydrates Range (High Value)"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter valid Values"
                                onInput={inputHandler}
                              />
                              {/* Input Type Component Text */}
                              <Input
                                element="input"
                                id="patient_Protiens"
                                type="text"
                                label="Protiens"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter valid Values"
                                onInput={inputHandler}
                              />
                              {/* Input Type Component Text */}
                              <Input
                                element="input"
                                id="patient_Fats"
                                type="text"
                                label="Fats"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter valid Values"
                                onInput={inputHandler}
                              />
                              {/* Input Select Component Vegetation Type */}
                              <Select
                                element="select"
                                id="patient_VegetationType"
                                label="Vegetation Type"
                                options={cuisineOptions}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Your Cuisine"
                                onInput={inputHandler}
                              />
                              {/* Input Type Component Text */}
                              <Input
                                element="input"
                                id="patient_Cuisine"
                                type="text"
                                label="Cuisine"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Your Cuisine"
                                onInput={inputHandler}
                              />
                              {/* Upload File Section Start */}
                              <div className="forms__Controller--Grids_Cols">
                                {/* Upload Button Start */}
                                <button
                                  type="file"
                                  name="patient-uploadFile"
                                  id="patient-uploadFile"
                                  autoComplete="patient-uploadFile"
                                  className="forms__Controller--Grids_Cols-File"
                                >
                                  Upload File
                                </button>
                                {/* Upload Button End */}
                              </div>
                              {/* Upload File Section End */}
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

export default UploadDietChart;
