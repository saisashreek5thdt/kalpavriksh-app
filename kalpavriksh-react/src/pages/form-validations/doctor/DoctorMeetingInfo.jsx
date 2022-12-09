import React, { useState } from "react";
import Navbar from "../../../user/shared/Navbar";
import { FiPaperclip } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailsPatients } from "../../../action/PatientAction";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";

import Input from "../../../Components/Input";
import { useForm } from "../../../hooks/form-hooks";
import { VALIDATOR_MINLENGTH } from "../../../utils/validators";
import { createPrescription } from "../../../action/DoctorAction";
import { CREATE_PRESC_RESET } from "../../../constant.js/DoctorConstant";
import Swal from "sweetalert2";

const DoctorMeetingInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // patientId,medicine_type,medicine_name,morning_dose,afternoon_dose,evening_dose,frequency,duration,duration_days,special_inst
  const [patientId, setPatientId] = useState('')
  const [medType, setMedType] = useState('')
  const [medName, setMedName] = useState('')
  const [mornDose, setMornDose] = useState('')
  const [aftDose, setAftDose] = useState('')
  const [eveDose, setEveDose] = useState('')
  const [frquency, setFrquency] = useState()
  const [duration, setDuration] = useState()
  const [durDays, setDurDays] = useState('')
  const [specinst, setSpecinst] = useState('')
  const [open, setOpen] = useState(false)
  const { id } = location.state;
 
  const patientDetails = useSelector((state) => state.patientDetails);
  const { loading, error, patient } = patientDetails;
  const dispatch = useDispatch();
  const prescriptionCreate=useSelector(state=>state.prescriptionCreate)
  const {success}=prescriptionCreate

  useEffect(() => {
    dispatch(DetailsPatients(id));
  }, [dispatch]);
  // if (patient) {
  //   console.log(patient.data, "dt");
  // }

  const backFunc = () => {
    navigate("/userrole/:roleid/dashboard/doctor/");
  };

  useEffect(()=>{
    if(success){
      dispatch({type:CREATE_PRESC_RESET})
      // Swal.fire({
      //   icon: 'success',
      //   title: 'Priscription created succesfully',
      //   text: "Thanks",
      //   type: 'success',  
        
      // }); 
      Swal.fire({
        icon: 'success',
        title: 'Prescription created succesfully',
        // showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.reload();
      
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
      // setOpen(false)
    }
  },[success])
  const [formState, inputHandler, setFormData] = useForm({
    medicineType: {
      value: "",
      isValid: false,
    },
    medicineName: {
      value: "",
      isValid: false,
    },
    medicineDoseMorning: {
      value: "",
      isValid: false,
    },
    medicineDoseAfternoon: {
      value: "",
      isValid: false,
    },
    medicineDoseEvening: {
      value: "",
      isValid: false,
    },
    medicineFrequency: {
      value: "",
      isValid: false,
    },
    medicineDurationNumber: {
      value: "",
      isValid: false,
    },
    medicineDurationDays: {
      value: "",
      isValid: false,
    },
    medicineSplInstructions: {
      value: "",
      isValid: false,
    },
  });
  

  const createPrescriptionHandler = (e) => {
    e.preventDefault();
    dispatch(createPrescription(id,medType,medName,mornDose,aftDose,eveDose,frquency,duration,durDays,specinst))
    console.log(formState.inputs);
    // setFormData({
    //   ...formState.inputs,
    //   medicineType: {
    //     value: "",
    //     isValid: false,
    //   },
    //   medicineName: {
    //     value: "",
    //     isValid: false,
    //   },
    //   medicineDoseMorning: {
    //     value: "",
    //     isValid: false,
    //   },
    //   medicineDoseAfternoon: {
    //     value: "",
    //     isValid: false,
    //   },
    //   medicineDoseEvening: {
    //     value: "",
    //     isValid: false,
    //   },
    //   medicineFrequency: {
    //     value: "",
    //     isValid: false,
    //   },
    //   medicineDurationNumber: {
    //     value: "",
    //     isValid: false,
    //   },
    //   medicineDurationDays: {
    //     value: "",
    //     isValid: false,
    //   },
    //   medicineSplInstructions: {
    //     value: "",
    //     isValid: false,
    //   },
    // });
  };

  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <main>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox>{error}</MessageBox>
          ) : (
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <button
                type="button"
                className="text-center py-6 text-xl font-medium leading-6 text-gray-900"
                onClick={backFunc}
              >
                {" "}
                Back
              </button>
              {/* Replace with your content */}
              <div className="px-4 py-6 sm:px-0">
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Patient Appointment Information
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Personal details and application.
                    </p>
                  </div>

                  {/* {patient.data && patient.data.lentgh>0 && patient.data.map((itm)=>( */}
                  {patient.data && (
                    <div className="border-t border-gray-200">
                      <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-bold text-gray-500">
                            Appointment For
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            Cardiac Problem
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-bold text-gray-500">
                            Appointment with
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            Dr. Rajiv Singhla
                          </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-bold text-gray-500">
                            Appointment Date
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            10-09-2022
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-bold text-gray-500">
                            Patient Full Name
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {patient.data.name}
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-bold text-gray-500">
                            Patient Age
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            55 Years
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-bold text-gray-500">
                            Patient Phone Number
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {patient.data.phone}
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-bold text-gray-500">
                            Bill Amount
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {patient.data.amount}
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-bold text-gray-500">
                            Payment Status
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            Paid / Un-Paid
                          </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-bold text-gray-500">
                            Patient Health Info
                          </dt>
                          <dd className="h-auto mt-1 text-sm text-justify overflow-hidden text-gray-900 sm:col-span-2 sm:mt-0">
                            Fugiat ipsum ipsum deserunt culpa aute sint do
                            nostrud anim incididunt <br /> cillum culpa
                            consequat. Excepteur qui ipsum aliquip consequat
                            sint. Sit id mollit nulla mollit <br /> nostrud in
                            ea officia proident. Irure nostrud pariatur mollit
                            ad adipisicing <br />
                            reprehenderit deserunt qui eu.
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-bold text-gray-500">
                            Attachments
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul
                              role="list"
                              className="divide-y divide-gray-200 rounded-md border border-gray-200"
                            >
                              <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                <div className="flex w-0 flex-1 items-center">
                                  <FiPaperclip
                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-2 w-0 flex-1 truncate">
                                    Appointment
                                  </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <a
                                    href="#"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Download
                                  </a>
                                </div>
                              </li>
                              <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                <div className="flex w-0 flex-1 items-center">
                                  <FiPaperclip
                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-2 w-0 flex-1 truncate">
                                    Medical Form Data
                                  </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <a
                                    href="#"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    View
                                  </a>
                                </div>
                              </li>
                              <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                <div className="flex w-0 flex-1 items-center">
                                  <FiPaperclip
                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-2 w-0 flex-1 truncate">
                                    Add Prescription
                                  </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalPrescription"
                                    // onClick={()=>setOpen(!open)}
                                  >
                                    Create
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  )}
                  {/* ))} */}
                </div>
              </div>
              {/* /End replace */}
            </div>
          )}
        </main>
      </div>
      
      {/* {open && ( */}
 <div
 className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
 id="modalPrescription"
 tabIndex="-1"
 aria-labelledby="modalPrescriptionLabel"
 aria-hidden="true"
>
 <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none presc">
   <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
     <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
       <h5
         className="text-xl font-medium leading-normal text-gray-800"
         id="modalPrescriptionLabel"
       >
         Prescription
       </h5>
       <button
         type="button"
         className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
         data-bs-dismiss="modal"
         aria-label="Close"
       ></button>
     </div>
     <div className="modal-body relative p-4">
       <form onSubmit={createPrescriptionHandler}>
         <div className="form__Grid--Cols-6">
           <div className="form__Cols--Span-6">
             <label
               htmlFor="prescribedBy"
               className="form__Label-Heading"
             >
               Doctor Name
             </label>
             <p className="form__Heading">Rajiv Singla</p>
           </div>
           <div className="form__Cols--Span-6">
             <label
               htmlFor="prescribedDate"
               className="form__Label-Heading"
             >
               Prescribed Date
             </label>
             <p className="form__Heading">24-11-2022</p>
           </div>
           <div className="form__Cols--Span-6">
             <label
               htmlFor="medicineType"
               className="form__Label-Heading"
             >
               Medicine Type
             </label>
             <select name="" id=""  onChange={(e)=>setMedType(e.target.value)}>
              <option value="none">Please select</option>
              <option value="Tablet">Tablet</option>
              <option value="Tab">Tab</option>
              <option value="Injection">Injection</option>
              <option value="Injection by pen">Injection by pen</option>
              <option value="Sachet">Sachet</option>
              <option value="Rotacap">Rotacap</option>
              <option value="TAB">TAB</option>
              <option value="Ointment">Ointment</option>
              <option value="Ointment/Cream">Ointment/Cream</option>
              <option value="Tablet/Sachet">Tablet/Sachet</option>
              <option value="NEBULIZATION">NEBULIZATION</option>

             </select>
             {/* <Input
               element="input"
               type="text"
               id="medicineType"
               label="Medicine Type"
               placeholder="Enter Medicine Type"
               validators={VALIDATOR_MINLENGTH(1)}
               errorText="Please Enter Valid Medicine Type"
               onInput={inputHandler}
             /> */}
           </div>
           <div className="form__Cols--Span-6">
             <label
               htmlFor="medicineName"
               className="form__Label-Heading"
             >
               Medicine Name
             </label>
             <input
               onChange={(e)=>setMedName(e.target.value)}
               id="medicineName"
               name="medicineName"
               type="text"
               autoComplete="medicineName"
               required
               className="form__Input"
               placeholder="Enter Medicine Name"
             />
             {/* <Input
               element="input"
               type="text"
               id="medicineName"
               label="Medicine Name"
               placeholder="Enter Medicine Name"
               validators={VALIDATOR_MINLENGTH(1)}
               errorText="Please Enter Valid Medicine Name"
               onInput={inputHandler}
             /> */}
           </div>
           <div className="form__Cols--Span-6">
             <label
               htmlFor="medicineMorningDose"
               className="form__Label-Heading"
             >
               Medicine Morning Dose
             </label>
             <input
               onChange={(e)=>setMornDose(e.target.value)}
               id="medicineMorningDose"
               name="medicineMorningDose"
               type="text"
               autoComplete="medicineMorningDose"
               required
               className="form__Input"
               placeholder="Enter Medicine Morning Dose"
             />
             {/* <Input
               element="input"
               type="text"
               id="medicineDoseMorning"
               label="Medicine Morning Dose"
               placeholder="Enter Medicine Morning Dose"
               validators={VALIDATOR_MINLENGTH(1)}
               errorText="Please Enter Valid Medicine Morning Dose"
               onInput={inputHandler}
             /> */}
           </div>
           <div className="form__Cols--Span-6">
             <label
               htmlFor="medicineAfternoonDose"
               className="form__Label-Heading"
             >
               Medicine Afternoon Dose
             </label>
             <input
             onChange={(e)=>setAftDose(e.target.value)}
               id="medicineAfternoonDose"
               name="medicineAfternoonDose"
               type="text"
               autoComplete="medicineAfternoonDose"
               required
               className="form__Input"
               placeholder="Enter Medicine Afternoon Dose"
             />
             {/* <Input
               element="input"
               type="text"
               id="medicineDoseAfternoon"
               label="Medicine Afternoon Dose"
               placeholder="Enter Medicine Afternoon Dose"
               validators={VALIDATOR_MINLENGTH(1)}
               errorText="Please Enter Valid Medicine Afternoon Dose"
               onInput={inputHandler}
             /> */}
           </div>
           <div className="form__Cols--Span-6">
             <label
               htmlFor="medicineEveningDose"
               className="form__Label-Heading"
             >
               Medicine Evening Dose
             </label>
             <input
             onChange={(e)=>setEveDose(e.target.value)}
               id="medicineEveningDose"
               name="medicineEveningDose"
               type="text"
               autoComplete="medicineEveningDose"
               required
               className="form__Input"
               placeholder="Enter Medicine Evening Dose"
             />
             {/* <Input
               element="input"
               type="text"
               id="medicineDoseEvening"
               label="Medicine Evening Dose"
               placeholder="Enter Medicine Evening Dose"
               validators={VALIDATOR_MINLENGTH(1)}
               errorText="Please Enter Valid Medicine Evening Dose"
               onInput={inputHandler}
             /> */}
           </div>
           <div className="form__Cols--Span-6">
             <label
               htmlFor="medicineFrequency"
               className="form__Label-Heading"
             >
               Medicine Frequency
             </label>
             <select name="" id="" onChange={(e)=>setFrquency(e.target.value)}>
             <option value="none">Please select</option>
              <option value="Daily">Daily</option>
              <option value="Alternative day">Alternative day</option>
              <option value="Daily/SOS">Daily/SOS</option>
              <option value="once every 15 day">once every 15 day</option>
              <option value="Day 1-21 with a gap of 7 days">Day 1-21 with a gap of 7 days</option>
              <option value="Dail">Dail</option>

             </select>
             {/* <Input
               element="input"
               type="text"
               id="medicineFrequency"
               label="Medicine Frequency"
               placeholder="Enter Medicine Frequency"
               validators={VALIDATOR_MINLENGTH(1)}
               errorText="Please Enter Valid Medicine Frequency"
               onInput={inputHandler}
             /> */}
           </div>
           <div className="form__Cols--Span-6">
             <label
               htmlFor="medicineDurationNumber"
               className="form__Label-Heading"
             >
               Medicine Duration (Number)
             </label>
             <select name="" id=""  onChange={(e)=>setDurDays(e.target.value)}>
             <option value="none">Please select</option>
              <option value="Days">Days</option>
              <option value="Weeks">Weeks</option>
              <option value="Months">Months</option>
             </select>
             {/* <Input
               element="input"
               type="text"
               id="medicineDurationNumber"
               label="Medicine Duration Number"
               placeholder="Enter Medicine Duration Number"
               validators={VALIDATOR_MINLENGTH(1)}
               errorText="Please Enter Valid Medicine Duration Number"
               onInput={inputHandler}
             /> */}
           </div>
           <div className="form__Cols--Span-6">
             <label
               htmlFor="medicineDurationDays"
               className="form__Label-Heading"
             >
               Medicine Duration (Days / Weeks)
             </label>
             <input
             onChange={(e)=>setDurDays(e.target.value)}
               id="medicineDurationDays"
               name="medicineDurationDays"
               type="number"
               autoComplete="medicineDurationDays"
               required
               className="form__Input"
               placeholder="Enter Medicine Duration Days"
             />
             {/* <Input
               element="input"
               type="text"
               id="medicineDurationDays"
               label="Medicine Duration Days"
               placeholder="Enter Medicine Duration Days"
               validators={VALIDATOR_MINLENGTH(1)}
               errorText="Please Enter Valid Medicine Duration Days"
               onInput={inputHandler}
             /> */}
           </div>
         </div>
       
       <div className="form__Grid--Rows-none">
         <div className="form__Cols--Span-6">
           <label
             htmlFor="medicineSplInstructions"
             className="form__Label-Heading"
           >
             Medicine Special Instructions
           </label>
           <textarea
             onChange={(e)=>setSpecinst(e.target.value)}
               id="medicineSplInstructions"
               name="medicineSplInstructions"
               rows="3"
               autoComplete="medicineSplInstructions"
               required
               className="form__Textarea"
               placeholder="Enter Medicine Spl Instructions"
             ></textarea>
           {/* <Input
             id="medicineSplInstructions"
             label="Medicine Spl Instructions"
             placeholder="Enter Medicine Spl Instructions"
             validators={VALIDATOR_MINLENGTH(1)}
             errorText="Please Enter Special Instructions for usage of Medicines"
             onInput={inputHandler}
           /> */}
         </div>
       </div>
       <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
       <button
         type="button"
         className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
         data-bs-dismiss="modal"
       >
         Cancel
       </button>
       <button
        
         type="submit"
         className="px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
       >
         Create &amp; Save Prescription
       </button>
     </div>
       </form>
     </div>
    
   </div>
 </div>
</div>
      {/* )} */}
     
    </>
  );
};

export default DoctorMeetingInfo;
