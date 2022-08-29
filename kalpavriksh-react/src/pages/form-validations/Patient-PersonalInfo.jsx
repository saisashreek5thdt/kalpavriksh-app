import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../shared/Navbar";

const PatientPersonalInfo = () => {

  const history = useHistory();

  const patientPersonalHandler = (e) => {
    e.preventDefault();
    history.push('/userrole/');
  };

  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl tracking-tight font-bold text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8b g-gray-300">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="flex flex-col align-middle">
                <h2 className="text-2xl text-center font-semibold text-grey-500">
                  Enroll Patient Form
                </h2>
                <div className="grid max-w-full w-full mx-auto my-10 lg:mx-40 md:mx-32 sm:mx-10">
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <form action="#" method="POST" onSubmit={patientPersonalHandler}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                          <div className="mx-auto px-4 py-5 bg-gray-100 space-y-6 sm:p-6">
                            <div className="grid grid-cols-6 justify-center gap-6">
                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-amountPaid"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Amount Paid
                                </label>
                                <input
                                  type="number"
                                  name="patient-amountPaid"
                                  id="patient-amountPaid"
                                  autoComplete="patient-amountPaid"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-paymentMode"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Payment Mode
                                </label>
                                <select
                                  id="patient-paymentMode"
                                  name="patient-paymentMode"
                                  autoComplete="patient-paymentMode"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option>
                                    Please Select Payment Mode
                                  </option>
                                  <option>Online - UPI, etc</option>
                                  <option>Card - Debit</option>
                                  <option>Card - Credit</option>
                                  <option>Cash</option>
                                </select>
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-paymentDate"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Payment Date
                                </label>
                                <input
                                  type="date"
                                  name="patient-paymentDate"
                                  id="patient-paymentDate"
                                  autoComplete="patient-paymentDate"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-refID"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Ref. ID
                                </label>
                                <input
                                  type="text"
                                  name="patient-refID"
                                  id="patient-refID"
                                  autoComplete="patient-refID"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-300 sm:px-6">
                          <div className="text-right">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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

export default PatientPersonalInfo;
