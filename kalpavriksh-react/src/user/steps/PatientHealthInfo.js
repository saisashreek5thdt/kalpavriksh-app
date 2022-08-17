import React from "react";

import "tw-elements";

const PatientHealthInfo = () => {
  return (
    <>
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
        
      </div>
    </>
  );
};

export default PatientHealthInfo;
