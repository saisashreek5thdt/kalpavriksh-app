import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../shared/Navbar";

const EnrollPatient = () => {

  const history = useHistory();

  const patientFormHandler = (e) => {
      e.preventDefault();
      history.push('/userrole/:pid/enroll/healthinfo/');
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
                      <form action="#" method="POST" onSubmit={patientFormHandler}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                          <div className="mx-auto px-4 py-5 bg-gray-100 space-y-6 sm:p-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Photo
                              </label>
                              <div className="mt-1 flex items-center">
                                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                  <svg
                                    className="h-full w-full text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                </span>
                                <button
                                  type="button"
                                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Change
                                </button>
                              </div>
                            </div>
                            <div className="grid grid-cols-6 justify-center gap-6">
                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-phone"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Phone
                                </label>
                                <input
                                  type="number"
                                  name="patient-phone"
                                  id="patient-phone"
                                  autoComplete="patient-phone"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-email"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Email (Optional)
                                </label>
                                <input
                                  type="email"
                                  name="patient-email"
                                  id="patient-email"
                                  autoComplete="patient-email"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-fullName"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  name="patient-fullName"
                                  id="patient-fullName"
                                  autoComplete="patient-fullName"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-dob"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  D.O.B
                                </label>
                                <input
                                  type="date"
                                  name="patient-dob"
                                  id="patient-dob"
                                  autoComplete="patient-dob"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-gender"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Select Gender
                                </label>
                                <select
                                  id="patient-gender"
                                  name="patient-gender"
                                  autoComplete="patient-gender"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option>Please Select Gender</option>
                                  <option>Male</option>
                                  <option>Fe-Male</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-3 bg-gray-300 text-right sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
            </div>

            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default EnrollPatient;
