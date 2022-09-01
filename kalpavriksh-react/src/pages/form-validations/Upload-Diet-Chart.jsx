import React from "react";

import Navbar from "../shared/Navbar";

import { VALIDATOR_REQUIRE } from "../../util/validators";

import Input from "../../Components/Input";
import Select from "../../Components/Select";

import { useForm } from "../../hooks/form-hooks";

const UploadDietChart = ({history}) => {

  const [formState, inputHandler] = useForm(
    {
      patient_caloriesRangeLow: {
        value: '',
        isValid: false
      },
      patient_caloriesRangeHigh: {
        value: '',
        isValid: false
      },
      patient_CarbohydratesRangeLow: {
        value: '',
        isValid: false
      },
      patient_CarbohydratesRangeHigh: {
        value: '',
        isValid: false
      },
      patient_Protiens: {
        value: '',
        isValid: false
      },
      patient_Fats: {
        value: '',
        isValid: false
      },
      patient_VegetationType: {
        value: '',
        isValid: false
      },
      patient_Cuisine: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const cuisineOptions = [
    { value: 'Please Select a Cuisine' },
    { value: 'Vegetarian' },
    { value: 'Non-Veg' },
    { value: 'Egg' },
  ];

  const uploadDietCharthHandler = (e) => {
    e.preventDefault();
    if (formState.inputs.patient_caloriesRangeLow.value === '' || formState.inputs.patient_caloriesRangeHigh.value === '' || formState.inputs.patient_CarbohydratesRangeLow.value === '' || formState.inputs.patient_CarbohydratesRangeHigh.value === '' || formState.inputs.patient_Protiens.value === '' || formState.inputs.patient_Fats.value === '' || formState.inputs.patient_VegetationType.value === '' || formState.inputs.patient_Cuisine.value === '') {
      return null
    } else {
      console.log(formState.inputs);
    }
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
                  Upload Diet Chart
                </h2>
                <div className="forms__GridBox">
                  <div className="forms__GridBox--GridCols">
                    <div className="forms__GridBox--GridGaps">
                      <form
                        action="#"
                        method="POST"
                        onSubmit={uploadDietCharthHandler}
                      >
                        <div className="forms__Controller">
                          <div className="forms__Controller--Box">
                            <div className="forms__Controller--Grids">

                              <Input
                                element="input"
                                id="patient_caloriesRangeLow"
                                type="text"
                                label="Calories Range (Lower Value)"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter valid Values"
                                onInput={inputHandler}
                              />

                              <Input
                                element="input"
                                id="patient_caloriesRangeHigh"
                                type="text"
                                label="Calories Range (High Value)"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter valid Values"
                                onInput={inputHandler}
                              />

                              <Input
                                element="input"
                                id="patient_CarbohydratesRangeLow"
                                type="text"
                                label="Carbohydrates Range (Lower Value)"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter valid Values"
                                onInput={inputHandler}
                              />

                              <Input
                                element="input"
                                id="patient_CarbohydratesRangeHigh"
                                type="text"
                                label="Carbohydrates Range (High Value)"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter valid Values"
                                onInput={inputHandler}
                              />

                              <Input
                                element="input"
                                id="patient_Protiens"
                                type="text"
                                label="Protiens"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter valid Values"
                                onInput={inputHandler}
                              />

                              <Input
                                element="input"
                                id="patient_Fats"
                                type="text"
                                label="Fats"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter valid Values"
                                onInput={inputHandler}
                              />

                              {/* <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-caloriesRangeLow"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Calories Range (Lower Value)
                                </label>
                                <input
                                  type="text"
                                  name="patient-caloriesRangeLow"
                                  id="patient-caloriesRangeLow"
                                  autoComplete="patient-caloriesRangeLow"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-caloriesRangeHigh"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Calories Range (Upper Value)
                                </label>
                                <input
                                  type="text"
                                  name="patient-caloriesRangeHigh"
                                  id="patient-caloriesRangeHigh"
                                  autoComplete="patient-caloriesRangeHigh"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-carbohydratesRangeLow"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Carbohydrates Range (Lower Value)
                                </label>
                                <input
                                  type="text"
                                  name="patient-carbohydratesRangeLow"
                                  id="patient-carbohydratesRangeLow"
                                  autoComplete="patient-carbohydratesRangeLow"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-carbohydratesRangeHigh"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Carbohydrates Range (Upper Value)
                                </label>
                                <input
                                  type="text"
                                  name="patient-carbohydratesRangeHigh"
                                  id="patient-carbohydratesRangeHigh"
                                  autoComplete="patient-carbohydratesRangeHigh"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-protiens"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Protiens
                                </label>
                                <input
                                  type="text"
                                  name="patient-protiens"
                                  id="patient-protiens"
                                  autoComplete="patient-protiens"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div>

                              <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-fats"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Fats
                                </label>
                                <input
                                  type="text"
                                  name="patient-fats"
                                  id="patient-fats"
                                  autoComplete="patient-fats"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div> */}

                              <Select
                                element="select"
                                id="patient_VegetationType"
                                label="Vegetation Type"
                                options={cuisineOptions}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Your Cuisine"
                                onInput={inputHandler}
                              />

                              {/* <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-vegetationType"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Vegetation Type
                                </label>
                                <select
                                  id="patient-vegetationType"
                                  name="patient-questionTvegetationTypeype"
                                  autoComplete="patient-vegetationType"
                                  className="forms__Controller--Grids_Cols-Select"
                                >
                                  <option>Please Select Vegetation Type</option>
                                  <option>Vegetarian</option>
                                  <option>Non - Veg</option>
                                  <option>Egg</option>
                                </select>
                              </div> */}

                              <Input
                                element="input"
                                id="patient_Cuisine"
                                type="text"
                                label="Cuisine"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Enter Your Cuisine"
                                onInput={inputHandler}
                              />

                              {/* <div className="forms__Controller--Grids_Cols">
                                <label
                                  htmlFor="patient-cuisine"
                                  className="forms__Controller--Grids_Cols-Label"
                                >
                                  Cuisine
                                </label>
                                <input
                                  type="text"
                                  name="patient-cuisine"
                                  id="patient-cuisine"
                                  autoComplete="patient-cuisine"
                                  className="forms__Controller--Grids_Cols-Input"
                                />
                              </div> */}

                              <div className="forms__Controller--Grids_Cols">
                                <button
                                  type="file"
                                  name="patient-uploadFile"
                                  id="patient-uploadFile"
                                  autoComplete="patient-uploadFile"
                                  className="forms__Controller--Grids_Cols-File"
                                >
                                  Upload File
                                </button>
                              </div>
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

export default UploadDietChart;
