import React from "react";

import "tw-elements";

const PatientPaymentInfo = () => {
  return (
    <>
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
      </div>
    </>
  );
};

export default PatientPaymentInfo;
