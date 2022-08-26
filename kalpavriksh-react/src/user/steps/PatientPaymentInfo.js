import React from "react";
import { Formik } from 'formik';
import { Input } from '../../Components'

import "tw-elements";

const PatientPaymentInfo = () => {
  return (
    <>
      <div className="ppinfo">
        <div className="ppinfo__container">
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
                <span className="ppinfo__span">{errors.Amount && touched.Amount && errors.Amount}</span>

                <div className="ppinfo__select">
                  <label htmlFor="payment-mode" className="ppinfo__select--label">Payment Mode</label>
                  <select id="payment-mode" name="payment-mode" autoComplete="payment-mode" className="ppinfo__select--select">
                    <option>Select Payment Mode</option>
                    <option>Cash</option>
                    <option>Card</option>
                    <option>Online</option>
                  </select>
                </div>

                <Input label="Date" input="date" name="Date" id="date" onChange={handleChange} onBlur={handleBlur} value={values.Date} />
                <span className="ppinfo__span">{errors.Date && touched.Date && errors.Date}</span>

                <Input label="Ref. ID" input="text" name="RefID" id="ref-id" onChange={handleChange} onBlur={handleBlur} value={values.RefID} />
                <span className="ppinfo__span">{errors.RefID && touched.RefID && errors.RefID}</span>

                <button type="submit" disabled={isSubmitting}>Submit</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default PatientPaymentInfo;
