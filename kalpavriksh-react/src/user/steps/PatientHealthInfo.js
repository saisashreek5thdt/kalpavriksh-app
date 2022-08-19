import React from "react";
import { Formik } from 'formik';
import { Input } from '../../Components'

import "tw-elements";

const PatientHealthInfo = () => {
  return (
    <>
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="px-4 py-5 grid grid-cols gap-6">
          <Formik
            initialValues={{ height: "", weight: "", caretakerName: "", caretakerNumber: "", preferredTime: "", startEndDate: "" }}
            validate={values => {
              const errors = {};
              if (!values.height || values.height < 0) {
                errors.height = 'Enter a valid height';
              }
              if (!values.weight || values.weight < 0) {
                errors.weight = 'Enter a valid weight';
              }
              if (!values.caretakerName || values.caretakerName.length < 4) {
                errors.caretakerName = 'Enter a valid caretaker Name'
              }
              if (!values.caretakerNumber || values.caretakerNumber.length < 10 || values.caretakerNumber.length > 13) {
                errors.caretakerNumber = 'Enter a valid caretaker Mobile Number'
              }
              if (!values.preferredTime) {
                errors.preferredTime = "Enter a valid preferred time"
              }
              if (!values.startEndDate) {
                errors.startEndDate = "Enter a valid start End Date"
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
              <form onSubmit={handleSubmit}>
                <Input className="w-full max-w-4xl md:max-w-2xl sm:max-w-xl" label="Height" input="number" name="height" id="height" onChange={handleChange} onBlur={handleBlur} value={values.height} />
                <span className="text-red-500 text-sm">{errors.height && touched.height && errors.height}</span>
                <Input className="w-full max-w-4xl md:max-w-2xl sm:max-w-xl" label="Weight" input="number" name="weight" id="weight" onChange={handleChange} onBlur={handleBlur} value={values.weight} />
                <span className="text-red-500 text-sm">{errors.weight && touched.weight && errors.weight}</span>
                <Input className="w-full max-w-4xl md:max-w-2xl sm:max-w-xl" label="Caretaker's Name" input="text" name="caretakerName" id="caretaker-name" onChange={handleChange} onBlur={handleBlur} value={values.caretakerName} />
                <span className="text-red-500 text-sm">{errors.caretakerName && touched.caretakerName && errors.caretakerName}</span>
                <div className="w-full max-w-4xl md:max-w-2xl sm:max-w-xl col-span-6 sm:col-span-3">
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
                    className="mt-1 block w-full max-w-4xl md:max-w-2xl sm:max-w-xl py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                <Input label="Caretaker's Number" input="number" name="caretakerNumber" id="caretaker-number" onChange={handleChange} onBlur={handleBlur} value={values.caretakerNumber} />
                <span className="text-red-500 text-sm">{errors.caretakerNumber && touched.caretakerNumber && errors.caretakerNumber}</span>
                <Input label="Preferred Time to Call" input="time" name="preferredTime" id="preferred-time" onChange={handleChange} onBlur={handleBlur} value={values.preferredTime} />
                <span className="text-red-500 text-sm">{errors.preferredTime && touched.preferredTime && errors.preferredTime}</span>
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
                <Input label="Start & End Date" input="date" name="startEndDate" id="start-end-date" onChange={handleChange} onBlur={handleBlur} value={values.startEndDate} />
                <span className="text-red-500 text-sm">{errors.startEndDate && touched.startEndDate && errors.startEndDate}</span>
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

export default PatientHealthInfo;
