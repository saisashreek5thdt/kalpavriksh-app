import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";

import "tw-elements";

import PatientPersonalInfo from "./patient/PatientPersonalInfo";

import PatientHealthInfo from "./patient/PatientHealthInfo";

import PatientPaymentInfo from "./patient/PatientPaymentInfo";

const CreatePatient = () => {

  const [isShown, setIsShown] = useState('start');

  const formStateLoader = (event) => {
    event.preventDefault();
    setIsShown(current => !current);
  };

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/userrole/patient");
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST" onSubmit={submitHandler}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                  <PatientPersonalInfo />
                  </div>                  
                  <div className="px-4 py-3 bg-gray-500 text-center sm:px-6">
                    <p>Step 2 Form</p>
                  </div>

                  <PatientHealthInfo />
                  <div className="grid grid-cols-6">
                    <div className="col-span-6 sm:col-span-3">
                      <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <ChevronLeftIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                          Previous
                        </button>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Next
                          <ChevronRightIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-gray-500 text-center sm:px-6">
                    <p>Step 3 Form</p>
                  </div>
                  <PatientPaymentInfo />
                  <div className="grid grid-cols-6 bg-gray-50">
                    <div className="col-span-6 sm:col-span-3">
                      <div className="px-10 py-3 text-left sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <div className="px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePatient;
