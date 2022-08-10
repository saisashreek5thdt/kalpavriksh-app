import React from "react";

import { useHistory } from "react-router-dom";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";

import "tw-elements";

const CreatePatient = () => {

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push('/userrole/patient');
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
                    <div className="grid grid-cols-none gap-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Photo
                      </label>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
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
                    <div className="px-4 py-5 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="phone-number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          name="phone-number"
                          id="phone-number"
                          autoComplete="phone-number"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="full-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="full-name"
                          id="full-name"
                          autoComplete="full-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="dob"
                          className="block text-sm font-medium text-gray-700"
                        >
                          D.O.B
                        </label>
                        <input
                          type="date"
                          name="dob"
                          id="dob"
                          autoComplete="dob"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="gender"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Gender
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          autoComplete="gender"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
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

                  <div className="px-4 py-3 bg-gray-500 text-center sm:px-6">
                    <p>Step 2 Form</p>
                  </div>

                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="px-4 py-5 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="height"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Height
                        </label>
                        <input
                          type="text"
                          name="height"
                          id="height"
                          autoComplete="height"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="weight"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Weight
                        </label>
                        <input
                          type="text"
                          name="weight"
                          id="weight"
                          autoComplete="weight"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="caretake-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Caretaker's Name
                        </label>
                        <input
                          type="text"
                          name="caretake-name"
                          id="caretake-name"
                          autoComplete="caretake-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="caretaker-relation"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Caretaker's Relation
                        </label>
                        <select
                          id="caretaker-relation"
                          name="caretaker-relation"
                          autoComplete="caretaker-relation"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Select Caretaker Relation</option>
                          <option>Father</option>
                          <option>Mother</option>
                          <option>Brother</option>
                          <option>Sister</option>
                          <option>Spouse</option>
                          <option>Neice</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="caretaker-number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Caretaker's Number
                        </label>
                        <input
                          type="number"
                          name="caretaker-number"
                          id="caretaker-number"
                          autoComplete="caretaker-number"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="preferred-time"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Preferred Time to Call
                        </label>
                        <input
                          type="time"
                          name="preferred-time"
                          id="preferred-time"
                          autoComplete="preferred-time"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="plan-selected"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Plan Selected
                        </label>
                        <select
                          id="plan-selected"
                          name="plan-selected"
                          autoComplete="plan-selected"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Select Your Plan</option>
                          <option>Plan A</option>
                          <option>Plan B</option>
                          <option>Plan C</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="start-end-date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Start & End Date
                        </label>
                        <input
                          type="date"
                          name="start-end-date"
                          id="start-end-date"
                          autoComplete="start-end-date"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="select-patient-team"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Select Patient Team
                        </label>
                        <select
                          id="select-patient-team"
                          name="select-patient-team"
                          autoComplete="select-patient-team"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Select Patient Team</option>
                          <option>Team A</option>
                          <option>Team B</option>
                          <option>Team C</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid-cols-12">
                      <div className="col-span-4 sm:col-span-3">
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
                  </div>

                  <div className="px-4 py-3 bg-gray-500 text-center sm:px-6">
                    <p>Step 3 Form</p>
                  </div>

                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="px-4 py-5 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="amount"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Amount
                        </label>
                        <input
                          type="number"
                          name="amount"
                          id="amount"
                          autoComplete="amount"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="payment-mode"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Payment Mode
                        </label>
                        <select
                          id="payment-mode"
                          name="payment-mode"
                          autoComplete="payment-mode"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Select Payment Mode</option>
                          <option>Cash</option>
                          <option>Card</option>
                          <option>Online</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          autoComplete="date"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="ref-id"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Ref. ID
                        </label>
                        <input
                          type="text"
                          name="ref-id"
                          id="ref-id"
                          autoComplete="ref-id"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
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
