import React from "react";
import { Formik } from 'formik';
import { Input, InputPhoto } from '../../Components'

import "tw-elements";

const PatientPersonalInfo = () => {
  return (
    <>
      <Formik
        initialValues={{ phoneNumber: "", emailAddress: "", fullName: "", dob: "" }}
        validate={values => {
          const errors = {};
          if (!values.emailAddress || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress)) {
            errors.emailAddress = 'Required';
          }
          if (!values.fullName || values.fullName.length < 4) {
            errors.fullName = 'Full name must be at least 4 characters long';
          }
          if (!values.dob) {
            errors.dob = 'Enter a valid DOB'
          }
          if (!values.phoneNumber || values.phoneNumber.length < 10 || values.phoneNumber.length > 13) {
            errors.phoneNumber = 'Please enter a valid phoneNumber'
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
          <form onSubmit={handleSubmit} className="form">
            <InputPhoto />
            <div className="form__container">
              <Input label="Phone Number" input="number" name="phoneNumber" id="phone-number" onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} />
              <span className="form__span">{errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}</span>

              <Input label="Email address" input="email" name="emailAddress" id="email-address" onChange={handleChange} onBlur={handleBlur} value={values.emailAddress} />
              <span className="form__span">{errors.emailAddress && touched.emailAddress && errors.emailAddress}</span>

              <Input label="Full Name" input="text" name="fullName" id="full-name" onChange={handleChange} onBlur={handleBlur} value={values.fullName} />
              <span className="form__span">{errors.fullName && touched.fullName && errors.fullName}</span>

              <Input label="D.O.B" input="date" name="dob" id="dob" onChange={handleChange} onBlur={handleBlur} value={values.dob} />
              <span className="form__span">{errors.dob && touched.dob && errors.dob}</span>

              <div className="form__select">
                <label htmlFor="gender" className="form__label">Gender</label>
                <select id="gender" name="gender" autoComplete="gender" onChange={handleChange} className="form__select">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default PatientPersonalInfo