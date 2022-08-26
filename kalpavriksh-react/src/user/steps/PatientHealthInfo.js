import React from "react";
import { Formik } from 'formik';
import { Input } from '../../Components'

import "tw-elements";

const PatientHealthInfo = () => {
  return (
    <>
      <div className="phinfo">
        <div className="phinfo-container">
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
                <Input label="Height" input="number" name="height" id="height" onChange={handleChange} onBlur={handleBlur} value={values.height} />
                <span className="phinfo__span">{errors.height && touched.height && errors.height}</span>

                <Input label="Weight" input="number" name="weight" id="weight" onChange={handleChange} onBlur={handleBlur} value={values.weight} />
                <span className="phinfo__span">{errors.weight && touched.weight && errors.weight}</span>

                <Input label="Caretaker's Name" input="text" name="caretakerName" id="caretaker-name" onChange={handleChange} onBlur={handleBlur} value={values.caretakerName} />
                <span className="phinfo__span">{errors.caretakerName && touched.caretakerName && errors.caretakerName}</span>

                <div className="phinfo__select">
                  <label htmlFor="caretaker-relation" className="phinfo__select--label"> Caretaker's Relation</label>
                  <select id="caretaker-relation" name="caretaker-relation" autoComplete="caretaker-relation" className="phinfo__select--select">
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
                <span className="phinfo__span">{errors.caretakerNumber && touched.caretakerNumber && errors.caretakerNumber}</span>

                <Input label="Preferred Time to Call" input="time" name="preferredTime" id="preferred-time" onChange={handleChange} onBlur={handleBlur} value={values.preferredTime} />
                <span className="phinfo__span">{errors.preferredTime && touched.preferredTime && errors.preferredTime}</span>

                <div className="phinfo__select">
                  <label htmlFor="plan-selected" className="phinfo__select--label">Plan Selected</label>
                  <select id="plan-selected" name="plan-selected" autoComplete="plan-selected" className="phinfo__select--select">
                    <option>Select Your Plan</option>
                    <option>Plan A</option>
                    <option>Plan B</option>
                    <option>Plan C</option>
                  </select>
                </div>

                <Input label="Start & End Date" input="date" name="startEndDate" id="start-end-date" onChange={handleChange} onBlur={handleBlur} value={values.startEndDate} />
                <span className="phinfo__span">{errors.startEndDate && touched.startEndDate && errors.startEndDate}</span>

                <div className="phinfo__select">
                  <label htmlFor="select-patient-team" className="phinfo__select--label">Select Patient Team</label>
                  <select id="select-patient-team" name="select-patient-team" autoComplete="select-patient-team" className="phinfo__select--select">
                    <option>Select Patient Team</option>
                    <option>Team A</option>
                    <option>Team B</option>
                    <option>Team C</option>
                  </select>
                </div>

                <button type="submit" disabled={isSubmitting}>Submit</button>
              </form>
            )}
          </Formik>
        </div>

      </div>
    </>
  );
};

export default PatientHealthInfo;
