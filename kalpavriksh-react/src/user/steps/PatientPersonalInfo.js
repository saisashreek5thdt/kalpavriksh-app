import React, { ReactFragment } from "react";

import { ChevronRightIcon } from "@heroicons/react/outline";

import "tw-elements";

import useForm from "../../Hooks/useForm";

const PatientPersonalInfo = () => {
  const { handleChange, errors } = useForm()
  return (
    <>
      <div>
        <div className="grid grid-cols-none gap-6">
          <label className="px-4 block text-sm font-medium text-gray-700">Photo</label>
          <div className="mt-1 flex items-center">
            <span className="mx-4 inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <button type="button"
              className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Change
            </button>
          </div>
        </div>
        <div className="px-4 py-5 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="phone-number"
              className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input type="number"
              name="phone-number"
              id="phone-number"
              autoComplete="phone-number"
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            {errors.phonenumber && (
              <p className="block text-sm font-medium text-red-500">
                {errors.phonenumber}
              </p>
            )}
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="email-address"
              className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input type="text"
              name="email-address"
              id="email-address"
              autoComplete="email"
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="full-name"
              className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              autoComplete="full-name"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PatientPersonalInfo