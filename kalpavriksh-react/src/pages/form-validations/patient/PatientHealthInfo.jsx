import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stepper } from "react-form-stepper";
import Navbar from "../../../user/shared/Navbar";

import Input from "../../../Components/Input";
import Select from "../../../Components/Select";
import Selects from 'react-select'
import AsyncSelect from 'react-select/async';
import { useForm } from "../../../hooks/form-hooks";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../utils/validators";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../../../action/AdminAction";
import { Url } from "../../../constant.js/PatientConstant";
import axios from "axios";
import Creatable from 'react-select/creatable';
const PatientHealthInfo = () => {
  // const [height, setHeight] = useState("");
  // const [weight, setWeight] = useState("");
  // const [caretakerName, setCaretakerName] = useState("");
  // const [relation, setRelation] = useState("");
  // const [caretakerNumber, setCaretakerNumber] = useState("");
  // const [caretakerTime, setCaretakerTime] = useState("");
  const [healthPlans, setHealthPlans] = useState([]);
  // const [planDate, setPlanDate] = useState("");
  const [options, setOptions] = useState([""]);
  const location = useLocation();
  const { phone, name, email, dob, gender } = location.state;
  const doctorList = useSelector((state) => state.doctorList);
  const { loading, error, doctors } = doctorList;
  const doctorSignin = useSelector((state) => state.doctorSignin);
  const {doctorInfo } = doctorSignin;
  // console.log(doctorInfo,'info');
  // console.log(healthPlans,'pl');
 const  handleChange = (selectedOptions) => {
  const value=  selectedOptions.filter((e)=>e.id)
    setHealthPlans({ selectedOptions });
    // console.log(selectedOptions,'hea');
  }

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
    { value: "Plan A" ,label:'Plan A'},
    { value: "TeaPlanm B" ,label:'Plan B'},
    { value: "TeaPlanm C" ,label:'Plan C'},
    { value: "Plan D" ,label:'Plan D'}
  ];



  const healthTeamOptions = [
    { value: "Please Select Health Team" },
    { value: "Team A" ,label:'Team A'},
    { value: "Team B" ,label:'Team B'},
    { value: "Team C" ,label:'Team C'},
    { value: "Team D" ,label:'Team D'}
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



    
    const height = formState.inputs.height.value
    const weight = formState.inputs.weight.value
    const caretakerName = formState.inputs.caretakerName.value
    const relation = formState.inputs.relation.value
    const caretakerNumber = formState.inputs.caretakerNumber.value
    const caretakerTime = formState.inputs.caretakerTime.value
    const healthPlan = healthPlans
    const planDate = formState.inputs.planDate.value
    const patientTeam = formState.inputs.patientTeam.value
    // console.log(formState)
    // if(height === '' || weight === '' || caretakerName === '' || relation === '' || caretakerNumber === '' || caretakerTime === '' || healthPlan === '' || planDate === '' || patientTeam === ''  ){
    //   alert('please fill all the fields')
    // }else{
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
    // }  
  };
 
  
const dispatch=useDispatch()
  useEffect(()=>{
    const user='doctor'
    dispatch(getAllDoctors(user))
  },[])
  // const handleInputChange = value => {
  //   console.log(value,'vl');
  // };
 

  const fetchUsers = () => {
    return  axios.get(`${Url}/doctors/get-all`, {
     headers: {
       Authorization: `Bearer ${doctorInfo}`,
     },
   }).then(function (response) {
     const res =  response.data.data;
     return res;
   
   })    
       
   }

  //  useEffect(() => {
  //   const getData = async () => {
  //     const arr = [];
  //     await axios.get(`${Url}/doctors/get-all`,{
  //       headers: {
  //         Authorization: `Bearer ${doctorInfo}`,
  //       }
  //     }).then((res) => {
  //       let result = res.data.data;
  //       result.map((user) => {
  //         return arr.push({value: user._id, label: user.name});
  //       });
  //       setOptions(arr)
  //       console.log(arr,'arr');
  //     });
  //   };
  //   getData();

  // }, []);

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
                activeStep={3}
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
                            {/* <label>Select Health Plan</label>
                            <Selects onChange={handleChange} isMulti isClearable options={healthPlanOptions} /> */}
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
                           {/* {!loading && !error && doctors &&( */}
                            <>
                            <label>Select Health Team</label>
                            {/* <Creatable
                              placeholder= "Select an individual"
                              options={options}
                              isMulti
                              handleChange={handleChange}
                              onInputChange={handleInputChange}
                              noOptionsMessage={() => "name not found"}
                            ></Creatable> */}
                            {/* <Select onChange={handleChange} isMulti isClearable 
                     
                            options={options}
                          
                            /> */}
                               <AsyncSelect
                                cacheOptions
                                defaultOptions
                              // value={selectedValue}
                              getOptionLabel={e => e.name}
                              getOptionValue={e => e._id}
                              loadOptions={fetchUsers}
                              // onInputChange={handleInputChange}
                              onChange={handleChange}
                              isMulti
                            />
                            </>
                           {/* )} */}
                          
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
                            {/* <Select
                              element="select"
                              id="patientTeam"
                              label="Select Patient Team"
                              options={healthTeamOptions}
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select Health Team"
                              onInput={inputHandler}
                            /> */}
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