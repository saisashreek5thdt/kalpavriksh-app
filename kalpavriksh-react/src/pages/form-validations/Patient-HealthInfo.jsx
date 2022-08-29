import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../shared/Navbar";

const PatientHealthInfo = () => {

  const history = useHistory();

  const patientHealthHandler = (e) => {
    e.preventDefault();
    history.push('/userrole/:pid/enroll/personalinfo/');
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
                      <form action="#" method="POST" onSubmit={patientHealthHandler}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                          <div className="mx-auto px-4 py-5 bg-gray-100 space-y-6 sm:p-6">
                            <div className="grid grid-cols-6 justify-center gap-6">
                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-height"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Height
                                </label>
                                <input
                                  type="number"
                                  name="patient-height"
                                  id="patient-height"
                                  autoComplete="patient-height"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-weight"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Weight
                                </label>
                                <input
                                  type="number"
                                  name="patient-weight"
                                  id="patient-weight"
                                  autoComplete="patient-weight"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-caretakerName"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Caretaker's Name
                                </label>
                                <input
                                  type="text"
                                  name="patient-caretakerName"
                                  id="patient-caretakerName"
                                  autoComplete="patient-caretakerName"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-caretakerRelation"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Caretaker's Relation
                                </label>
                                <select
                                  id="patient-caretakerRelation"
                                  name="patient-caretakerRelation"
                                  autoComplete="patient-caretakerRelation"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option>
                                    Please Select Caretaker's Relation
                                  </option>
                                  <option>Father</option>
                                  <option>Mother</option>
                                  <option>Son</option>
                                  <option>Daughter</option>
                                  <option>Spouse</option>
                                  <option>Uncle</option>
                                  <option>Aunt</option>
                                  <option>Other</option>
                                </select>
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-caretakerNumber"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Caretaker's Number
                                </label>
                                <input
                                  type="tel"
                                  name="patient-caretakerNumber"
                                  id="patient-caretakerNumber"
                                  autoComplete="patient-caretakerNumber"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-caretakerNumber"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Prefered Time to Call (TIME)
                                </label>
                                <input
                                  type="time"
                                  name="patient-caretakerNumber"
                                  id="patient-caretakerNumber"
                                  autoComplete="patient-caretakerNumber"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-planSelected"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Select Health Plan
                                </label>
                                <select
                                  id="patient-planSelected"
                                  name="patient-planSelected"
                                  autoComplete="patient-planSelected"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option>Please Select Health Plan</option>
                                  <option>Plan A</option>
                                  <option>Plan B</option>
                                  <option>Plan C</option>
                                  <option>Plan D</option>
                                </select>
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-startEnd"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Start &amp; End Date
                                </label>
                                <input
                                  type="date"
                                  name="patient-startEnd"
                                  id="patient-startEnd"
                                  autoComplete="patient-startEnd"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-patientTeam"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Select Patient Team
                                </label>
                                <select
                                  id="patient-patientTeam"
                                  name="patient-patientTeam"
                                  autoComplete="patient-patientTeam"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option>Please Select Patient Team</option>
                                  <option>Team A</option>
                                  <option>Team B</option>
                                  <option>Team C</option>
                                  <option>Team D</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-300 sm:px-6">
                          <div className="text-right">
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

export default PatientHealthInfo;
