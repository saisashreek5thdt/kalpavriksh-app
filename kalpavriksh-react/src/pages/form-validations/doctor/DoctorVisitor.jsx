import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiEye, FiEdit, FiUser, FiChevronDown, FiStar } from "react-icons/fi";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { listPatients } from "../../../action/PatientAction";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";
import axios from "axios";
import { Url } from "../../../constant.js/PatientConstant";

import Input from "../../../Components/Input";
import Select from "../../../Components/Select";
import AsyncSelect from 'react-select/async';
import Datepicker from "react-tailwindcss-datepicker";
import { useForm } from "../../../hooks/form-hooks";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../../utils/validators"
import PatientCount from "./PatientCount";
import { updatePatient } from "../../../action/PatientAction";

const DoctorVisitor = () => {
  const [amount, setAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentNextDate, setPaymentNextDate] = useState("");
  const [refId, setRefId] = useState("");
  const [healthPlanId, setHealthPlanId] = useState([])
  const doctorSignin = useSelector((state) => state.doctorSignin);
  const {doctorInfo } = doctorSignin;
  const initialEndingDate= new Date().setMonth(11)
  const [healthPlans, setHealthPlans] = useState([]);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(initialEndingDate).toISOString(),
});

const patientList = useSelector((state) => state.patientList);
const { loading, error, patients } = patientList;
const [currentPatientId,setCurrentPatientId] = useState('')
const [selectedIcons, setSelectedIcons] = useState(
{...patients?.reduce((icons, patient) => ({ ...icons, [patient._id]: 'HiOutlineStar' }), {}),...JSON.parse(localStorage.getItem('selectedIcons')) }
);
const [filter,setFilter] = useState(0)
const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue({startDate: new Date(newValue.startDate).toISOString(), endDate: new Date(newValue.endDate).toISOString()});
};

  
  console.log("patients---",patients)
  const dispatch = useDispatch();

  const fetchUsers = () => {
    return  axios.get(`${Url}/doctors/get-all`, {
     headers: {
       Authorization: `Bearer ${doctorInfo.token}`,
     },
   }).then(function (response) {
     const res =  response.data.data;
     return res;
   
   })    
       
   }
   const  handleChange = (selectedOptions) => {
    const value=  selectedOptions.filter((e)=>e.id)
      setHealthPlans({ selectedOptions });
      // console.log(selectedOptions,'hea');
    }

    function handlePriority(patientId) {
      const selectedPatient = patients.find(patient => patient._id === patientId);
      // Do something to show more data for the selected patient
      setSelectedIcons(prevIcons => {
        const newIcons = { ...prevIcons };
        if (!newIcons[patientId]) {
          newIcons[patientId] = 'HiStar';
        } else {
          newIcons[patientId] = prevIcons[patientId] === 'HiOutlineStar' ? 'HiStar' : 'HiOutlineStar';
        }
        return newIcons;
      });
    }
  
    useEffect(() => {
      localStorage.setItem('selectedIcons', JSON.stringify(selectedIcons));
    }, [selectedIcons]);
  
    // useEffect(() => {
    //   const storedIcons = JSON.parse(localStorage.getItem('selectedIcons'));
    //   if (storedIcons) {
    //     setSelectedIcons(storedIcons);
    //   }
    // }, []);
  useEffect(() => {
    dispatch(listPatients());
  }, [dispatch]);
  // if(patients){
  //   console.log(patients);
  // }

let
  name,
  phone,
  email,
  dob,
  gender,
  height,
  weight,
  healthPlan,
  caretakerName,
  relation,
  caretakerNumber,
  caretakerTime,
  planDate,
  patientTeam

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

  const paymentModeOptions = [
    { value: "Please Select Payment Mode" },
    { value: "Cash" },
    { value: "Card" },
    { value: "Netbanking" },
    { value: "Online (UPI)" }
  ];

  let navigate = useNavigate();

  const genderOptions = [
    { value: "Please Select a Gender" },
    { value: "Male" },
    { value: "Female" },
  ];

  const [formState, inputHandler, setFormData] = useForm(
    {
      phone: {
        value: "",
        isValid: false,
      },
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      dob:{
        value: "",
        isValid: false,
      },
      gender: {
        value: "",
        isValid: false,
      },
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
        value: {},
        isValid: false,
      },
      patientTeam: {
        value: "",
        isValid: false,
      },
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

  const nextStep = (e) => {
    e.preventDefault()
    // setFormData(
    //   {
    //     ...formState.inputs,
    //     phone: {
    //       value: "",
    //       isValid: false
    //     },
    //     name: {
    //       value: "",
    //       isValid: false
    //     },
    //     email: {
    //       value: "",
    //       isValid: false
    //     },
    //     dob:{
    //       value: "",
    //       isValid: false,
    //     },
    //     gender: {
    //       value: "",
    //       isValid: false
    //     },
    //     height: {
    //       value: "",
    //       isValid: false,
    //     },
    //     weight: {
    //       value: "",
    //       isValid: false,
    //     },
    //     caretakerName: {
    //       value: "",
    //       isValid: false,
    //     },
    //     relation: {
    //       value: "",
    //       isValid: false,
    //     },
    //     caretakerNumber: {
    //       value: "",
    //       isValid: false,
    //     },
    //     caretakerTime: {
    //       value: "",
    //       isValid: false,
    //     },
    //     healthPlan: {
    //       value: "",
    //       isValid: false,
    //     },
    //     planDate: {
    //       value: {},
    //       isValid: false,
    //     },
    //     patientTeam: {
    //       value: "",
    //       isValid: false,
    //     },
    //     amount: {
    //       value: "",
    //       isValid: false,
    //     },
    //     paymentMode: {
    //       value: "",
    //       isValid: false,
    //     },
    //     paymentDate: {
    //       value: "",
    //       isValid: false,
    //     },
    //     paymentNextDate: {
    //       value: "",
    //       isValid: false,
    //     },
    //     refId: {
    //       value: "",
    //       isValid: false,
    //     },
    //   },
    //   false
    // );
     name=formState.inputs.name.value
     phone=formState.inputs.phone.value
     email=formState.inputs.email.value
     dob=formState.inputs.dob.value
     gender=formState.inputs.gender.value
     height = formState.inputs.height.value
     weight = formState.inputs.weight.value
     caretakerName = formState.inputs.caretakerName.value
     relation = formState.inputs.relation.value
     caretakerNumber = formState.inputs.caretakerNumber.value
     caretakerTime = formState.inputs.caretakerTime.value
     healthPlan = healthPlans;
     planDate = formState.inputs.planDate.value 
     patientTeam = formState.inputs.patientTeam.value
    console.log('----',formState,formState.inputs)
  }
  const handleClick = () => {
    setFilter(1);
    setTimeout(() => {
      setFilter(2);
    }, 2000);
  };
  const submitHandler = (e) => {
    e.preventDefault();
      //  setAmount(formState.inputs.amount.value)
      //  setPaymentMode(formState.inputs.paymentMode.value)
      //  setPaymentDate(formState.inputs.paymentDate.value)  
      //  setPaymentNextDate(formState.inputs.paymentNextDate.value)
      //  setRefId(formState.inputs.refId.value)
    const updatedPlanDate = {
      startDate: planDate.startDate,
      endDate: planDate.endDate,
    };
    // console.log(amount,paymentMode,paymentDate,refId,paymentNextDate,'iss')
   // const createdDate = new Date().toLocaleDateString();
      dispatch(
        updatePatient(
          currentPatientId,
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
          healthPlanId,
          updatedPlanDate,
          patientTeam,
          formState.inputs.amount.value,
          formState.inputs.paymentMode.value,
          formState.inputs.paymentDate.value,
          formState.inputs.refId.value,
          formState.inputs.paymentNextDate.value,
        //  createdDate
        )
      );
  };
  return (
    <>
      <PatientCount handleClick={handleClick}/>

      <div className="my-10">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-20 p-3 text-lg font-semibold tracking-wide text-left">
                Sl No.
              </th>
              {/* <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                Doctor Name
              </th> */}
              <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                Patient Name
              </th>
              <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                Date
              </th>
              <th className="w-24 p-3 text-lg font-semibold tracking-wide text-center">
                Priority
              </th>
              <th className="w-24 p-3 text-lg font-semibold tracking-wide text-center">
                Actions
              </th>              
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {(loading || filter==1) ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox>{error}</MessageBox>
            ) : (
              patients && filter!=2 &&
              patients.map((itm, i) => (
                <tr key={itm._id} className="bg-white border-b">
                  <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    {i + 1}
                  </td>
                  {/* <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    {itm.team}
                  </td> */}
                  <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    {itm.name}
                  </td>
                  <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    11-10-2022
                  </td>
                  <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    {/* <div className="flex flex-row justify-center">
                      <div className="inline-block p-6">
                        <HiOutlineStar className="h-6 w-6 text-teal-600 hover:text-teal-500" />
                      </div>
                      <div className="inline-block p-6">
                        <HiStar className="h-6 w-6 text-teal-600 hover:text-teal-500" />
                      </div>
                    </div> */}
                    <div onClick={() => handlePriority(itm._id)} className="inline-block p-6">
                    {selectedIcons[itm._id] === 'HiStar' ? <HiStar className="h-6 w-6 text-teal-600 hover:text-teal-500" /> : <HiOutlineStar className="h-6 w-6 text-teal-600 hover:text-teal-500" />}
                      </div>
                  </td>
                  <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    <div className="flex flex-row justify-center">
                      <div className="inline-block p-6">
                        <FiEye
                          className="h-6 w-6 text-green-600 hover:text-green-500"
                          onClick={() =>
                            navigate(
                              "/userrole/:roleid/dashboard/doctor/meeting/info/",
                              { state: { id: itm._id ,patientid: itm.patientId} }
                            )
                          }
                        />
                      </div>
                      <div className="inline-block p-6">
                        <FiEdit className="h-6 w-6 text-blue-600 hover:text-blue-500"
                          data-bs-toggle="modal"
                          data-bs-target="#modalPatientProfile"
                          onClick={()=>{setCurrentPatientId(itm._id)}}
                         />                         
                      </div>
                      <div className="inline-block p-6">
                        <FiUser className="h-6 w-6 text-cyan-600 hover:text-cyan-500" onClick={() => navigate('/userrole/:roleid/dashboard/patient/mydata/')} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
            {filter==2 && <div>No patients found</div>}
          </tbody>
        </table>
      </div>
      <div className="py-4">
        <div 
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="modalPatientProfile"
        backdrop="static"
        closable="false"
        aria-labelledby="modalPatientProfileLabel"
        aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5
                    className="text-xl font-medium leading-normal text-gray-800"
                    id="modalPatientProfileLabel"
                >
                    Patient Profile
                </h5>
                <button
                    type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4">
                <div className="p-2">
                  <div className="relative w-full overflow-hidden">
                    <input
                        type="checkbox"
                        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                    />
                    <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                        <h1 className="text-lg font-semibold text-gray-600">
                            Patient Basic Info
                        </h1>
                    </div>
                    {/* Down Arrow Icon */}
                    <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                        <FiChevronDown className="w-6 h-6" />
                    </div>
                    <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                      <div className="p-4">
                        <form onSubmit={nextStep}>
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                                <Input                               
                                element="input"
                                type="text"
                                label="Patient Full Name"
                                id="name"
                                placeholder="Enter Patient Full Name"
                                validators={[VALIDATOR_MINLENGTH(1)]}
                                errorText="Please Enter Patient Full Name"
                                onInput={inputHandler}
                               />
                            </div>
                            <div className="form__Cols--Span-6">
                              <Input                               
                                  element="input"
                                  type="email"
                                  label="Patient Email"
                                  id="email"
                                  placeholder="Enter Patient Valid Email"
                                  validators={[VALIDATOR_MINLENGTH(1)]}
                                  errorText="Please Enter Patient Valid Email"
                                  onInput={inputHandler}
                                />
                            </div>
                            <div className="form__Cols--Span-6">
                                <Input                               
                                  element="input"
                                  type="tel"
                                  label="Patient Phone Number"
                                  id="phone"
                                  placeholder="Enter Patient Valid Phone Number"
                                  validators={[VALIDATOR_MINLENGTH(10)]}
                                  errorText="Please Enter Patient Valid Phone Number"
                                  onInput={inputHandler}
                                />
                            </div>
                            <div className="form__Cols--Span-6">
                              <Select
                                element="select"
                                id="gender"
                                label="Select Gender"
                                options={genderOptions}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Gender"
                                onInput={inputHandler}
                               />                                
                            </div>
                            <div className="form__Cols--Span-6">
                                <Input                               
                                  element="input"
                                  type="date"
                                  label="Patient D.O.B"
                                  id="dob"
                                  placeholder="Enter Patient D.O.B"
                                  validators={[VALIDATOR_MINLENGTH(10)]}
                                  errorText="Please Enter Patient D.O.B"
                                  onInput={inputHandler}
                                />
                            </div>
                          </div>
                          <div className="py-4 form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <button
                                type="submit"
                                className="px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
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
                <div className="p-2">
                  <div className="relative w-full overflow-hidden">
                    <input
                        type="checkbox"
                        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                    />
                    <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                        <h1 className="text-lg font-semibold text-gray-600">
                            Patient Health Info
                        </h1>
                    </div>
                    {/* Down Arrow Icon */}
                    <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                        <FiChevronDown className="w-6 h-6" />
                    </div>
                    <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                      <div className="p-4">
                        <form onSubmit={nextStep}>
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                                <Input                               
                                  element="input"
                                  type="number"
                                  label="Patient Height"
                                  id="height"
                                  placeholder="Enter Patient Height"
                                  validators={[VALIDATOR_MINLENGTH(1)]}
                                  errorText="Please Enter Patient Height"
                                  onInput={inputHandler}
                                />                                
                            </div>
                            <div className="form__Cols--Span-6">
                                <Input
                                  element="input"
                                  type="number"
                                  label="Patient Weight"
                                  id="weight"
                                  placeholder="Patient Weight"
                                  validators={[VALIDATOR_MINLENGTH(1)]}
                                  errorText="Please Enter Patient Weight"
                                  onInput={inputHandler}
                                />                                
                            </div>
                            <div className="form__Cols--Span-6">
                                <Input
                                  element="input"
                                  type="text"
                                  label="Patient Caretaker Name"
                                  id="caretakerName"
                                  placeholder="Patient Caretaker Name"
                                  validators={[VALIDATOR_MINLENGTH(1)]}
                                  errorText="Please Enter Patient Caretaker Name"
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
                                  type="tel"
                                  label="Patient Caretaker Number"
                                  id="caretakerNumber"
                                  placeholder="Patient Caretaker Number"
                                  validators={[VALIDATOR_MINLENGTH(1)]}
                                  errorText="Please Enter Patient Caretaker Number"
                                  onInput={inputHandler}
                                />
                            </div>
                            <div className="form__Cols--Span-6">
                                <Input
                                  element="input"
                                  type="time"
                                  label="Patient Caretaker Time"
                                  id="caretakerTime"
                                  placeholder="Patient Caretaker Time"
                                  validators={[VALIDATOR_MINLENGTH(1)]}
                                  errorText="Please Enter Patient Caretaker Time"
                                  onInput={inputHandler}
                                />                                
                            </div>
                            <div className="form__Cols--Span-6">
                              <Select
                                element="select"
                                id="healthPlan"
                                label="Select Health Plan"
                                options={healthPlanOptions}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Health Plan"
                                onInput={inputHandler}
                              />                                
                            </div>
                            <div className="form__Cols--Span-6">
                                <Input
                                element="input"
                                type="time"
                                label="Health Plan Date (Start + End)"
                                id="planDate"
                                placeholder="Health Plan Date (Start + End)"
                                validators={[VALIDATOR_MINLENGTH(1)]}
                                errorText="Please Select Valid Dates"
                                onInput={inputHandler}
                                value={value}
                                >
                                <Datepicker
                                    id=""
                                    primaryColor={"blue"}
                                    placeholder={"Health Plan Date (Start + End)"}
                                    value={value}
                                    onChange={
                                        handleValueChange
                                    }
                                    showShortcuts={true}
                                    inputClassName="text-slate-500 font-semibold shadow-sm"
                                />
                                </Input>                                
                            </div>
                            <div className="form__Cols--Span-6">
                                <label
                                    htmlFor="prescribedBy"
                                    className="form__Label-Heading"
                                >
                                    Patient Health Team (Multi-Select Team)
                                </label>
                                <AsyncSelect
                                  cacheOptions
                                  defaultOptions
                                  getOptionLabel={e => e.name}
                                  getOptionValue={e => e._id}
                                  loadOptions={fetchUsers}
                                   onChange={handleChange}
                                  isMulti
                                />
                            </div>
                          </div>
                          <div className="py-4 form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <button
                                type="submit"
                                className="px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
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
                <div className="p-2">
                  <div className="relative w-full overflow-hidden">
                    <input
                        type="checkbox"
                        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                    />
                    <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                        <h1 className="text-lg font-semibold text-gray-600">
                            Patient Payment Info
                        </h1>
                    </div>
                    {/* Down Arrow Icon */}
                    <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                        <FiChevronDown className="w-6 h-6" />
                    </div>
                    <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                      <div className="p-4">
                        <form onSubmit={submitHandler}>
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
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
                                <Input
                                  element="input"
                                  type="date"
                                  label="Current Month Payment Date"
                                  id="paymentDate"
                                  placeholder="Payment Date"
                                  validators={[VALIDATOR_MINLENGTH(1)]}
                                  errorText="Please Select Valid Date"
                                  onInput={inputHandler}
                                />                                
                            </div>
                            <div className="form__Cols--Span-6">
                                <Input
                                  element="input"
                                  type="date"
                                  label="Next Month Payment Date"
                                  id="paymentNextDate"
                                  placeholder="Payment Date"
                                  validators={[VALIDATOR_MINLENGTH(1)]}
                                  errorText="Please Select Valid Date"
                                  onInput={inputHandler}
                                />
                            </div>
                            <div className="form__Cols--Span-6">
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
                          </div>
                          <div className="py-4 form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <button
                                type="submit"
                               // data-bs-dismiss="modal"
                               // aria-label="Close"
                                className="px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                              >
                                Save &amp; Update Profile 
                              </button>
                            </div>
                          </div>
                        </form>                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                    type="button"
                    className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                >
                    Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorVisitor;