import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadDietCharts } from "../../../action/DoctorAction";
import { UPLOAD_DIET_CHART_RESET } from "../../../constant.js/DoctorConstant";
import Navbar from "../../../user/shared/Navbar";

import Input from "../../../Components/Input";
import Select from "../../../Components/Select";
import { useForm } from "../../../hooks/form-hooks";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../utils/validators";

const UploadDietChart = () => {
  
  // const [calorieLow, setCalorieLow] = useState();
  // const [caloireHigh, setCaloireHigh] = useState();
  // const [chRangeL, setChRangeL] = useState();
  // const [chRangeU, setChRangeU] = useState();
  // const [protien, setProtien] = useState();
  // const [fat, setFat] = useState();
  // const [foodType, setFoodType] = useState("");
  // const [cusineType, setCusineType] = useState("");  

  const [formState, inputHandler, setFormData] = useForm(
    {
      calorieLow: {
        value: "",
        isValid: false,
      },
      caloireHigh: {
        value: "",
        isValid: false,
      },
      chRangeL: {
        value: "",
        isValid: false,
      },
      chRangeU: {
        value: "",
        isValid: false,
      },
      protien: {
        value: "",
        isValid: false,
      },
      fat: {
        value: "",
        isValid: false,
      },
      foodType: {
        value: "",
        isValid: false,
      },
      cusineType: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const foodTypeOptions = [
    { value: "Please Select Food Type" },
    { value: "Vegetarian" },
    { value: "Non-Vegetarian" },
    { value: "Eggtarian" },
    { value: "Vegan" },
  ];

  const cusineTypeOptions = [
    { value: "Please Select Cusine Type" },
    { value: "Cuisine A" },
    { value: "Cuisine B" },
    { value: "Cuisine C" },
    { value: "Cuisine D" },
  ];

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const dietChartUpload = useSelector((state) => state.dietChartUpload);
  const { loading, error, success } = dietChartUpload;
  const submitHandler = (e) => {
    e.preventDefault();
    setFormData(
      {
        ...formState.inputs,
        calorieLow: {
          value: "",
          isValid: false,
        },
        caloireHigh: {
          value: "",
          isValid: false,
        },
        chRangeL: {
          value: "",
          isValid: false,
        },
        chRangeU: {
          value: "",
          isValid: false,
        },
        protien: {
          value: "",
          isValid: false,
        },
        fat: {
          value: "",
          isValid: false,
        },
        foodType: {
          value: "",
          isValid: false,
        },
        cusineType: {
          value: "",
          isValid: false,
        },
      },
      false
    );
    dispatch(
      uploadDietCharts(
        calorieLow,
        caloireHigh,
        chRangeL,
        chRangeU,
        protien,
        fat,
        foodType,
        cusineType
      )
    );
    //
  };

  const calorieLow = formState.inputs.calorieLow.value;
  const caloireHigh = formState.inputs.caloireHigh.value;
  const chRangeL = formState.inputs.chRangeL.value;
  const chRangeU = formState.inputs.chRangeU.value;
  const protien = formState.inputs.protien.value;
  const fat = formState.inputs.fat.value;
  const foodType = formState.inputs.foodType.value;
  const cusineType = formState.inputs.cusineType.value;

  useEffect(() => {
    if (success) {
      dispatch({ type: UPLOAD_DIET_CHART_RESET });
      alert("diet chart uploaded succesfully");
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
              <div>
                <div className="dashboard__Grid-Box">
                  <div className="dashboard__Grid-Cols">
                    <form onSubmit={submitHandler}>
                      <div className="form__Box-Shadow">
                        <div className="form__Box-Space">
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              {/* 
                              <label
                                htmlFor="calories-low-value"
                                className="form__Label-Heading"
                              >
                                Calories Range (Lower Value)
                              </label>
                              <input
                                onChange={(e)=>setCalorieLow(e.target.value)}
                                required
                                type="text"
                               
                                name="calories-low-value"
                                id="calories-low-value"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                               */}
                              <Input
                                element="input"
                                type="text"
                                id="calorieLow"
                                label="Calories Range (Lower Value)"
                                placeholder="Calories Range (Lower Value)"
                                validators={[VALIDATOR_MINLENGTH(1)]}
                                errorText="Please Enter Valid Number"
                                onInput={inputHandler}
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              {/* 
                              <label
                                htmlFor="calories-high-value"
                                className="form__Label-Heading"
                              >
                                Calories Range (Upper Value)
                              </label>
                              <input
                                onChange={(e) => setCaloireHigh(e.target.value)}
                                required
                                type="text"
                                name="calories-high-value"
                                id="calories-high-value"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                               */}
                              <Input
                                element="input"
                                type="text"
                                id="caloireHigh"
                                label="Calories Range (Upper Value)"
                                placeholder="Calories Range (Upper Value)"
                                validators={[VALIDATOR_MINLENGTH(1)]}
                                errorText="Please Enter Valid Number"
                                onInput={inputHandler}
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              {/* 
                              <label
                                htmlFor="carbohydrates-low-value"
                                className="form__Label-Heading"
                              >
                                Carbohydrates Range (Lower Value)
                              </label>
                              <input
                                onChange={(e) => setChRangeL(e.target.value)}
                                required
                                type="text"
                                name="carbohydrates-low-value"
                                id="carbohydrates-low-value"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                               */}
                              <Input
                                element="input"
                                type="text"
                                id="chRangeL"
                                label="Carbohydrates Range (Lower Value)"
                                placeholder="Carbohydrates Range (Lower Value)"
                                validators={[VALIDATOR_MINLENGTH(1)]}
                                errorText="Please Enter Valid Number"
                                onInput={inputHandler}
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              {/* 
                              <label
                                htmlFor="carbohydrates-high-value"
                                className="form__Label-Heading"
                              >
                                Carbohydrates Range (Upper Value)
                              </label>
                              <input
                                onChange={(e) => setChRangeU(e.target.value)}
                                required
                                type="text"
                                name="carbohydrates-high-value"
                                id="carbohydrates-high-value"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                               */}
                              <Input
                                element="input"
                                type="text"
                                id="chRangeU"
                                label="Carbohydrates Range (Upper Value)"
                                placeholder="Carbohydrates Range (Upper Value)"
                                validators={[VALIDATOR_MINLENGTH(1)]}
                                errorText="Please Enter Valid Number"
                                onInput={inputHandler}
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              {/* 
                              <label
                                htmlFor="protiens"
                                className="form__Label-Heading"
                              >
                                Protiens
                              </label>
                              <input
                                onChange={(e) => setProtien(e.target.value)}
                                required
                                type="text"
                                name="protiens"
                                id="protiens"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                               */}
                              <Input
                                element="input"
                                type="text"
                                id="fat"
                                label="Fat"
                                placeholder="Fat"
                                validators={[VALIDATOR_MINLENGTH(1)]}
                                errorText="Please Enter Valid Number"
                                onInput={inputHandler}
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              {/* 
                              <label
                                htmlFor="fats"
                                className="form__Label-Heading"
                              >
                                Fats
                              </label>
                              <input
                                onChange={(e) => setFat(e.target.value)}
                                required
                                type="text"
                                name="fats"
                                id="protiens"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                               */}
                              <Input
                                element="input"
                                type="text"
                                id="protien"
                                label="Protiens"
                                placeholder="Protiens"
                                validators={[VALIDATOR_MINLENGTH(1)]}
                                errorText="Please Enter Valid Number"
                                onInput={inputHandler}
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              {/* 
                              <label
                                htmlFor="food-type"
                                className="form__Label-Heading"
                              >
                                Select Food Type
                              </label>
                              <select
                                onChange={(e) => setFoodType(e.target.value)}
                                required
                                id="food-type"
                                name="food-type"
                                autoComplete="food-type-name"
                                className="form__Select"
                              >
                                <option>Select Food Type</option>
                                <option value="vegetarian">Vegetarian</option>
                                <option value="non-veg">Non-Vegetarian</option>
                                <option value="egtarian">Eggtarian</option>
                              </select>
                               */}
                              <Select
                                element="select"
                                id="foodType"
                                label="Select Your Food Type"
                                options={foodTypeOptions}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Your Food Type"
                                onInput={inputHandler}
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              {/* 
                              <label
                                htmlFor="cuisine-type"
                                className="form__Label-Heading"
                              >
                                Select Cuisine Type
                              </label>
                              <select
                                onChange={(e) => setCusineType(e.target.value)}
                                required
                                id="cuisine-type"
                                name="cuisine-type"
                                autoComplete="cuisine-type-name"
                                className="form__Select"
                              >
                                <option>Select Cuisine Type</option>
                                <option value="cusine A">Cuisine A</option>
                                <option value="cusine B">Cuisine B</option>
                                <option>Cuisine C</option>
                                <option>Cuisine D</option>
                              </select>
                              */}
                              <Select
                                element="select"
                                id="cusineType"
                                label="Select Your Cuisine Type"
                                options={cusineTypeOptions}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Your Cuisine Type"
                                onInput={inputHandler}
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="dietchart"
                                className="form__Label-Heading"
                              >
                                Select Diet Chart File
                              </label>
                              <input
                                type="file"
                                name="dietchart"
                                id="dietchart"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form__Btn-Bg">
                          <button
                            // onClick={nextStep}
                            type="submit"
                            className="form__Btn-Submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
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

export default UploadDietChart;
