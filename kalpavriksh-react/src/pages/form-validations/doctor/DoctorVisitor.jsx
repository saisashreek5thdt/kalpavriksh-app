import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, json } from "react-router-dom";
import { FiEye, FiEdit, FiUser, FiChevronDown, FiStar } from "react-icons/fi";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { listPatients } from "../../../action/PatientAction";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";
import axios from "axios";
import { Url } from "../../../constant.js/PatientConstant";
import Swal from "sweetalert2";
import Input from "../../../Components/Input";
import Select from "../../../Components/Select";
import AsyncSelect from "react-select/async";
import Datepicker from "react-tailwindcss-datepicker";
import { useForm } from "../../../hooks/form-hooks";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../utils/validators";
import PatientCount from "./PatientCount";
import { updatePatient } from "../../../action/PatientAction";

const DoctorVisitor = () => {
  const [primaryTeamIds, setPrimaryTeamIds] = useState([]);
  const [secondaryTeamIds, setSecondaryTeamIds] = useState([]);
  const doctorSignin = useSelector((state) => state.doctorSignin);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const { doctorInfo } = doctorSignin;
  const initialEndingDate = new Date().setMonth(11);
  const [healthPlans, setHealthPlans] = useState([]);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(initialEndingDate).toISOString(),
  });
  const [healthPlanOptions, setHealthPlanOptions] = useState([]);
  const [optionsError, setOptionsError] = useState(null);
  const [paidCount, setPaidCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  // Update the state variables based on the patients array
  const patientList = useSelector((state) => state.patientList);
  const { loading, error, patients } = patientList;
  const updatedPatient = useSelector((state) => state.updatedPatient);
  const { success: patientsUpdated = "" } = updatedPatient;
  const [currentPatientId, setCurrentPatientId] = useState("");
  const [docId, setDocId] = useState("");
  const [selectedIcons, setSelectedIcons] = useState({
    ...patients?.reduce(
      (icons, patient) => ({ ...icons, [patient._id]: "HiOutlineStar" }),
      {}
    ),
    ...JSON.parse(localStorage.getItem("selectedIcons")),
  });
  const [filter, setFilter] = useState(0);
  const handleValueChange = (newValue) => {
    setValue({
      startDate: new Date(newValue.startDate).toISOString(),
      endDate: new Date(newValue.endDate).toISOString(),
    });
  };
  const handlePrimaryTeamChange = (selectedOptions) => {
    setPrimaryTeamIds(selectedOptions);
  };

  const handleSecondaryTeamChange = (selectedOptions) => {
    setSecondaryTeamIds(selectedOptions);
  };
  console.log("patients---", patients);
  const dispatch = useDispatch();



  const fetchUsers = () => {
    return axios
      .get(`${Url}/doctors/get-all`, {
        headers: {
          Authorization: `Bearer ${doctorInfo.token}`,
        },
      })
      .then(function (response) {
        const res = response.data.data;
        return res;
      });
  };
  const getDocProfile = () => {
    return axios.get(`${Url}/profile/doctor`, {
      headers: {
        Authorization: `Bearer ${doctorInfo.token}`,
      },
    })
      .then(function (response) {
        const res = response.data;
        setDocId(res?.data?.doctor?._id)
      });
  };
  useEffect(() => {
    getDocProfile()
  }, [])
  const handleChange = (selectedOptions) => {
    const value = selectedOptions.filter((e) => e.id);
    setHealthPlans({ selectedOptions });
  };

  function handlePriority(patientId) {
    const selectedPatient = patients.find(
      (patient) => patient._id === patientId
    );
    // Do something to show more data for the selected patient
    setSelectedIcons((prevIcons) => {
      const newIcons = { ...prevIcons };
      if (!newIcons[patientId]) {
        newIcons[patientId] = "HiStar";
      } else {
        newIcons[patientId] =
          prevIcons[patientId] === "HiOutlineStar" ? "HiStar" : "HiOutlineStar";
      }
      return newIcons;
    });
  }
  useEffect(() => {
    setFilteredPatients(patients);
  }, [patients]);
  useEffect(() => {
    localStorage.setItem("selectedIcons", JSON.stringify(selectedIcons));
  }, [selectedIcons]);

  useEffect(() => {
    dispatch(listPatients());
  }, [dispatch]);

  useEffect(() => {
    setTotalCount(patients?.length);
    let activeCount = 0;
    patients?.forEach((patient) => {

      if (
        patient.next_payment_date &&
        new Date(patient.next_payment_date) < new Date()
      ) {
        activeCount++

      }
    });
    setPaidCount(activeCount);
  }, [patientList, patients]);

  useEffect(() => {
    if (patientsUpdated && currentPatientId) {
      Swal.fire({
        icon: "success",
        text: "Patient updated successfully",
      });
      dispatch(listPatients());
    }
  }, [patientsUpdated]);
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

  async function fetchData() {
    try {
      const response = await fetch(`${Url}/health-plan`, {
        headers: {
          Authorization: `Bearer ${doctorInfo.token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setHealthPlanOptions([

        ...(json?.data.flatMap((opt) => ({ value: opt._id, label: opt.name })))

      ]);
    } catch (err) {
      setOptionsError(err.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const paymentModeOptions = [
    { value: "Please Select Payment Mode" },
    { value: "Cash" },
    { value: "Card" },
    { value: "Netbanking" },
    { value: "Online (UPI)" },
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
      dob: {
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
    e.preventDefault();

  };
  const handleFilter = ({
    patientName,
    healthPlan,
    paymentStatus,
    patientType,
  }) => {
    const filterPatients = patients.filter((patient) => {
      if (
        (patientName && !patient.name.includes(patientName)) ||
        (healthPlan && !patient.health_plan) ||
        (healthPlan && patient.health_plan.name !== healthPlan) ||
        (paymentStatus &&
          ((paymentStatus === "Active" && new Date(patient.next_payment_date) >= new Date()) ||
            (paymentStatus === "De-Active" &&
              patient.next_payment_date &&
              new Date(patient.next_payment_date) < new Date()))) ||
        (patientType && patientType == 'Primary' && !patient.primaryTeamIds.some(id => id == docId)) ||
        (patientType && patientType == 'Secondary' && !patient.secondaryTeamIds.some(id => id == docId))
      ) {
        return false;
      }
      return true;
    });

    setFilteredPatients(filterPatients);
  };

  useEffect(() => {
    if (currentPatientId) {
      const currenPatient = filteredPatients.find((p) => p._id === currentPatientId)
      Object.keys(currenPatient).forEach((key) =>
        inputHandler(key, currenPatient[key], true)
      )
    }
  }, [currentPatientId, inputHandler])
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updatePatient(
        currentPatientId,
        formState.inputs.phone.value,
        formState.inputs.name.value,
        formState.inputs.email.value,
        formState.inputs.dob.value,
        formState.inputs.gender.value,
        formState.inputs.height.value,
        formState.inputs.weight.value,
        formState.inputs.caretakerName.value,
        formState.inputs.relation.value,
        formState.inputs.caretakerNumber.value,
        formState.inputs.caretakerTime.value,
        formState.inputs.healthPlan.value,
        primaryTeamIds,
        secondaryTeamIds,
        formState.inputs.planDate.value,
        // formState.inputs.patientTeam.value,
        formState.inputs.amount.value,
        formState.inputs.paymentMode.value,
        formState.inputs.paymentDate.value,
        formState.inputs.refId.value,
        formState.inputs.paymentNextDate.value
      )
    );
  };
  return (
    <>
      <PatientCount
        paidCount={paidCount}
        totalCount={totalCount}
        handleClick={handleFilter}
      />

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
              <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                Priority
              </th>
              <th className="w-24 p-3 text-lg font-semibold tracking-wide text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading || filter == 1 ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox>{error}</MessageBox>
            ) : (
              filteredPatients &&
              filteredPatients.map((itm, i) => (
                <tr key={itm._id} className="bg-white border-b">
                  <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    {i + 1}
                  </td>
                  {/* <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    {itm.team}
                  </td> */}
                  <td className="p-3 text-base capitalize text-gray-700 whitespace-nowrap">
                    {itm.name}
                  </td>
                  <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    {new Date(itm?.createdOn)
                      .toLocaleString()
                      .substring(0, 8)}
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
                    <div
                      onClick={() => handlePriority(itm._id)}
                      className="inline-block p-6"
                    >
                      {selectedIcons[itm._id] === "HiStar" ? (
                        <HiStar className="h-6 w-6 text-teal-600 hover:text-teal-500" />
                      ) : (
                        <HiOutlineStar className="h-6 w-6 text-teal-600 hover:text-teal-500" />
                      )}
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
                              {
                                state: {
                                  id: itm._id,
                                  patientid: itm.patientId,
                                },
                              }
                            )
                          }
                        />
                      </div>
                      <div className="inline-block p-6">
                        <FiEdit
                          className="h-6 w-6 text-blue-600 hover:text-blue-500"
                          data-bs-toggle="modal"
                          data-bs-target="#modalPatientProfile"
                          onClick={() => {
                            setCurrentPatientId(itm._id);
                          }}
                        />
                      </div>
                      <div className="inline-block p-6">
                        <FiUser
                          className="h-6 w-6 text-cyan-600 hover:text-cyan-500"
                          onClick={() =>
                            navigate(
                              "/userrole/:roleid/dashboard/patient/mydata/"
                            )
                          }
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
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
          aria-hidden="true"
        >
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
                <form onSubmit={submitHandler}>
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
                          {/* <form onSubmit={nextStep}> */}
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <Input
                                element="input"
                                type="text"
                                label="Patient Full Name"
                                id="name"
                                placeholder="Enter Patient Full Name"
                                initialValue={formState.inputs.name.value}
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
                                initialValue={formState.inputs.email.value}
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
                                initialValue={formState.inputs.phone.value}
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
                                initialValue={formState.inputs.gender.value}
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
                                initialValue={formState.inputs.dob.value.slice(0, 10)}
                                placeholder="Enter Patient D.O.B"
                                validators={[VALIDATOR_MINLENGTH(10)]}
                                errorText="Please Enter Patient D.O.B"
                                onInput={inputHandler}
                              />
                            </div>
                          </div>
                          {/* <div className="py-4 form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <button
                                type="submit"
                                className="px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                              >
                                Save &amp; Next
                              </button>
                            </div>
                          </div> */}
                          {/* </form> */}
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
                          {/* <form onSubmit={nextStep}> */}
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <>
                                <label>Select Primary Health Team</label>
                                <AsyncSelect
                                  cacheOptions
                                  defaultOptions
                                  getOptionLabel={(e) => e.name}
                                  getOptionValue={(e) => e._id}
                                  loadOptions={fetchUsers}
                                  onChange={handlePrimaryTeamChange}
                                  isMulti
                                />


                              </>
                            </div>

                            <div className="form__Cols--Span-6">
                              <>
                                <label>Select Secondary Health Team</label>
                                <AsyncSelect
                                  cacheOptions
                                  defaultOptions
                                  getOptionLabel={(e) => e.name}
                                  getOptionValue={(e) => e._id}
                                  loadOptions={fetchUsers}
                                  onChange={handleSecondaryTeamChange}
                                  isMulti
                                />
                              </>
                            </div>
                            <div className="form__Cols--Span-6">
                              <Input
                                element="input"
                                type="number"
                                label="Patient Height"
                                id="height"
                                initialValue={formState.inputs.height.value}
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
                                initialValue={formState.inputs.weight.value}
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
                                initialValue={formState.inputs.caretakerName.value}
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
                                initialValue={formState.inputs.relation.value}
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
                                initialValue={formState.inputs.caretakerNumber.value}
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
                                initialValue={formState.inputs.caretakerTime.value}
                                placeholder="Patient Caretaker Time"
                                validators={[VALIDATOR_MINLENGTH(1)]}
                                errorText="Please Enter Patient Caretaker Time"
                                onInput={inputHandler}
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <Select
                                element="healthPlanSelect"
                                id="healthPlan"
                                label="Select Health Plan"
                                options={healthPlanOptions}
                                initialValue={formState.inputs.healthPlan.value}
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Health Plan"
                                onInput={inputHandler}
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <Input
                                element="datepicker"
                                type="time"
                                label="Health Plan Date (Start + End)"
                                id="planDate"
                                initialValue={formState.inputs?.health_plan_date?.value || ''}
                                placeholder="Health Plan Date (Start + End)"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please Select Valid Dates"
                                onInput={inputHandler}
                                value={value}
                              />
                            </div>
                          </div>
                          {/* <div className="py-4 form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <button
                                type="submit"
                                className="px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                              >
                                Save &amp; Next
                              </button>
                            </div>
                          </div> */}
                          {/* </form> */}
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
                          {/* <form onSubmit={submitHandler}> */}
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <Input
                                element="input"
                                type="text"
                                label="Amount To Be Paid"
                                id="amount"
                                initialValue={formState.inputs.amount.value || ''}
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
                                initialValue={formState.inputs.payment_mode?formState.inputs.payment_mode.value : ''}
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
                                initialValue={formState.inputs.payment_date?formState.inputs.payment_date.value.slice(0,10) : ''}
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
                                initialValue={ formState.inputs?.next_payment_date?formState.inputs.next_payment_date.value.slice(0,10) : ''}
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
                                initialValue={formState.inputs.ref_id?formState.inputs.ref_id.value : ''}
                                placeholder="Ref. Id"
                                validators={[VALIDATOR_MINLENGTH(1)]}
                                errorText="Please Enter Valid Ref.Id"
                                onInput={inputHandler}
                              />
                            </div>
                          </div>

                          {/* </form> */}
                        </div>
                      </div>
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