import React from "react";
import { Link } from "react-router-dom";
import { FiPaperclip } from "react-icons/fi";

const FloatingForm = () => {
  return (
    <>
      <div className="fab__Fix-Container">
        <div className="">
          <div className="">
            <button
              className="dropdown-toggle px-6 py-5 rounded-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded rounded-full shadow-md transition duration-150 ease-in-out flex items-center whitespace-nowrap focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg active:text-white"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#AttachForms"
            >
              <FiPaperclip className="fab__Btn-Icon" />
            </button>

            {/* <ul
            className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
            aria-labelledby="dropdownMenuButton1u"
          >
            <li>
              <Link
                className="dropdown-item text-sm py-2 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                to="/userrole/:roleid/dashboard/patient/mydata/"
              >
                Daily
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-sm py-2 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                to="/userrole/:roleid/dashboard/patient/mydata/"
              >
                Weekly
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-sm py-2 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                to="/userrole/:roleid/dashboard/patient/mydata/"
              >
                Bi Weekly
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-sm py-2 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                to="/userrole/:roleid/dashboard/patient/mydata/"
              >
                Monthly
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-sm py-2 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                to="/userrole/:roleid/dashboard/patient/mydata/"
              >
                Quarterly
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-sm py-2 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                to="/userrole/:roleid/dashboard/patient/mydata/"
              >
                One Time
              </Link>
            </li>
          </ul> */}
          </div>
        </div>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="AttachForms"
        tabIndex="-1"
        aria-labelledby="AttachFormsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="AttachFormsLabel"
              >
                Select Form with Frequency
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <div className="form__Grid--Rows-none">
                <div className="form__Cols--Span-6">
                  <label htmlFor="formNames" className="form__Label-Heading">
                    Select Forms
                  </label>
                  <select
                    id="formNames"
                    name="formNames"
                    autoComplete="formNames"
                    className="form__Select"
                  >
                    <option>Select Forms</option>
                    <option value="form1">Form 1</option>
                    <option value="form2">Form 2</option>
                    <option value="form3">Form 3</option>
                    <option value="form4">Form 4</option>
                  </select>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="formFrequency"
                    className="form__Label-Heading"
                  >
                    Select Form Frequency
                  </label>
                  <select
                    id="formFrequency"
                    name="formFrequency"
                    autoComplete="formFrequency"
                    className="form__Select"
                  >
                    <option>Select Form Frequency</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="ontime">One Time</option>
                  </select>
                </div>
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
                //onClick={save}
                type="button"
                className="px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Create Your Form Frequency
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingForm;
