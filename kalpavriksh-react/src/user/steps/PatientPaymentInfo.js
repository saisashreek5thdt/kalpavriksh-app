import React from "react";
import { Formik } from 'formik';
import { Input, InputPhoto } from '../../Components'

import "tw-elements";

const PatientPaymentInfo = () => {
  return (
    <>
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="px-4 py-5 grid grid-cols gap-6">
          <Formik
            initialValues={{ Amount: "", Date: "", RefID: "" }}
            validate={values => {
              const errors = {};
              if (!values.Amount) {
                errors.Amount = 'Enter a valid Amount'
              }
              if (!values.Date) {
                errors.Date = 'Enter a valid Date'
              }
              if (!values.RefID) {
                errors.RefID = 'Enter a valid RefID'
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="max-w-4xl md:max-w-2xl sm:max-w-xl">
                <Input label="Amount" input="number" name="Amount" id="amount" onChange={handleChange} onBlur={handleBlur} value={values.Amount} />
                <span className="text-red-500 text-sm">{errors.Amount && touched.Amount && errors.Amount}</span>
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
                <Input label="Date" input="date" name="Date" id="date" onChange={handleChange} onBlur={handleBlur} value={values.Date} />
                <span className="text-red-500 text-sm">{errors.Date && touched.Date && errors.Date}</span>
                <Input label="Ref. ID" input="text" name="RefID" id="ref-id" onChange={handleChange} onBlur={handleBlur} value={values.RefID} />
                <span className="text-red-500 text-sm">{errors.RefID && touched.RefID && errors.RefID}</span>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default PatientPaymentInfo;
