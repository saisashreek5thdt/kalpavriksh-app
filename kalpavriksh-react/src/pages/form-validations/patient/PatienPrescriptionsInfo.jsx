import React, { useState } from "react";
import { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getLatesPrescription, getPrescriptions } from "../../../action/PatientAction";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";

const PatienPrescriptionsInfo = () => {
  const dispatch =useDispatch()
  const [filterd, setFilterd] = useState([])
  const presctList=useSelector(state=>state.presctList)
  const {loading,error,presc}=presctList
  const latestPrescription=useSelector((state)=>state.latestPrescription)
  const {loading:loadingLatest,error:errorLatest,prescLatest}=latestPrescription

  useEffect(()=>{
 dispatch(getPrescriptions())
 dispatch(getLatesPrescription())
  },[])
 


  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) : str;
  };

  return (
    <>
      <div className="tab__Card--Container">
        <div className="tab__Card--Block">
          <h5 className="tab__Card--Title">
            Prescribed Medicines
            <span className="tab__Tag--New">
              Latest
            </span>
          </h5>
          <p className="tab__Card--Info">
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
          <button
            type="button"
            className="tab__Btn tab__Btn--Hover tab__Btn--Focus tab__Btn-Active"
            data-bs-toggle="modal"
            data-bs-target="#modalPrescription"
          >
            Views
          </button>
        </div>
        <div className="tab__Card--Block">
          <h5 className="tab__Card--Title">
            Prescribed Medicines
            <span className="tab__Tag--Old">
              Old
            </span>
          </h5>
          <p className="tab__Card--Info">
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
          <button
            type="button"
            className="tab__Btn tab__Btn--Hover tab__Btn--Focus tab__Btn-Active"
            data-bs-toggle="modal"
            data-bs-target="#modalOldPrescription"
          >
            View
          </button>
        </div>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="modalPrescription"
        tabIndex="-1"
        aria-labelledby="modalPrescriptionLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered w-auto pointer-events-none relative">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="tab__Modal--Title"
                id="modalPrescriptionLabel"
              >
                Prescription
              </h5>
              <button
                type="button"
                className="tab__Modal--Btn_Close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          {!loadingLatest && !errorLatest && prescLatest && (
            <div className="modal-body relative p-4">
              <div className="form__Grid--Cols-6">
                <div className="form__Cols--Span-6">
                  <label htmlFor="prescribedBy" className="form__Label-Heading">
                    Doctor Name
                  </label>
                  <p className="form__Heading">{prescLatest.doctorId}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="prescribedDate"
                    className="form__Label-Heading"
                  >
                    Prescribed Date
                  </label>
                  <p className="form__Heading">{truncate(prescLatest.createdOn,11)}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="medicineType" className="form__Label-Heading">
                    Medicine Type
                  </label>
                  <p className="form__Heading">{prescLatest.medicine_type}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="medicineName" className="form__Label-Heading">
                    Medicine Name
                  </label>
                  <p className="form__Heading">{prescLatest.medicine_name}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineMorningDose"
                    className="form__Label-Heading"
                  >
                    Medicine Morning Dose
                  </label>
                  <p className="form__Heading">{prescLatest.morning_dose}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineAfternoonDose"
                    className="form__Label-Heading"
                  >
                    Medicine Afternoon Dose
                  </label>
                  <p className="form__Heading">{prescLatest.afternoon_dose}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineEveningDose"
                    className="form__Label-Heading"
                  >
                    Medicine Evening Dose
                  </label>
                  <p className="form__Heading">{prescLatest.evening_dose}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineFrequency"
                    className="form__Label-Heading"
                  >
                    Medicine Frequency
                  </label>
                  <p className="form__Heading">{prescLatest.frequency}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineDuration"
                    className="form__Label-Heading"
                  >
                    Medicine Duration (Number / Days / Weeks)
                  </label>
                  <p className="form__Heading">{prescLatest.duration_days}/ days</p>
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
                  <p className="form__Heading">
                    {prescLatest.special_inst}
                  </p>
                </div>
              </div>
            </div>
          )}
            
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="modalOldPrescription"
        tabIndex="-1"
        aria-labelledby="modalOldPrescriptionLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="modalOldPrescriptionLabel"
              >
                Prescription (Old Date Wise / Prescribed By)
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
                {loading ? <LoadingBox></LoadingBox>:
                error ? <MessageBox>{error}</MessageBox>:
                presc.length> 0 ? presc.map((pres)=>(
                  <div key={pres._id} className="relative w-full overflow-hidden">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  />
                  <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                    <h1 className="text-lg font-semibold text-gray-600">
                      Rajiv Singlashh / {truncate(pres.createdOn,11)}
                    </h1>
                  </div>
                  {/* Down Arrow Icon */}
                  <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                    <FiChevronDown className="w-6 h-6" />
                  </div>
                  {/* Content */}
                  <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                    <div className="p-4">
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
                          <p className="form__Heading">{truncate(pres.createdOn,11)}</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="medicineType"
                            className="form__Label-Heading"
                          >
                            Medicine Type
                          </label>
                          <p className="form__Heading">{pres.medicine_type}</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="medicineName"
                            className="form__Label-Heading"
                          >
                            Medicine Name
                          </label>
                          <p className="form__Heading">{pres.medicine_name}</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="medicineMorningDose"
                            className="form__Label-Heading"
                          >
                            Medicine Morning Dose
                          </label>
                          <p className="form__Heading">{pres.morning_dose}</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="medicineAfternoonDose"
                            className="form__Label-Heading"
                          >
                            Medicine Afternoon Dose
                          </label>
                          <p className="form__Heading">{pres.afternoon_dose}</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="medicineEveningDose"
                            className="form__Label-Heading"
                          >
                            Medicine Evening Dose
                          </label>
                          <p className="form__Heading">{pres.evening_dose}</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="medicineFrequency"
                            className="form__Label-Heading"
                          >
                            Medicine Frequency
                          </label>
                          <p className="form__Heading">{pres.frequency}</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="medicineDuration"
                            className="form__Label-Heading"
                          >
                            Medicine Duration (Number / Days / Weeks)
                          </label>
                          <p className="form__Heading">{pres.duration_days}</p>
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
                          <p className="form__Heading">
                           {pres.special_inst}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )):
                <MessageBox>No prescriptions </MessageBox>
                }
               
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatienPrescriptionsInfo;
