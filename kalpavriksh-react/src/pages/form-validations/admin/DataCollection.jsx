import React from "react";

const DataCollection = () => {
  return (
    <>
      <div className="card__Container--Around">
        <div className="card__Block">
          <h5 className="card__Heading">
            Patient Master Sheet Download
            <span className="card__Heading--Span card__Bg--Teal">Active</span>
          </h5>
          <p className="card__Info">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="form__Grid--Rows-none">
            <div className="form__Cols--Span-6">
              <input
                type="text"
                name="employee-name"
                id="employee-name"
                autoComplete="given-name"
                className="form__Input"
                placeholder="Enter Patient Id"
              />
            </div>
            <div className="form__Cols--Span-6">
              <button
                type="button"
                className="card__Btn card__Bg--Teal card__Btn--Bg-Teal"
              >
                Download CSV
              </button>
            </div>
          </div>
        </div>
        <div className="card__Block">
          <h5 className="card__Heading">
            Form Master Sheet Download
            <span className="card__Heading--Span card__Bg--Sky">Active</span>
          </h5>
          <p className="card__Info">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="form__Grid--Rows-none">
            <div className="form__Cols--Span-6">
              <select
                id="form"
                name="form"
                autoComplete="form-name"
                className="form__Select"
              >
                <option>Select Form</option>
                <option>Form 1</option>
                <option>Form 2</option>
                <option>Form 3</option>
                <option>Form 4</option>
              </select>
            </div>
            <div className="form__Cols--Span-6">
              <button
                type="button"
                className="card__Btn card__Bg--Sky card__Btn--Bg-Sky"
              >
                Download CSV
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 card__Container--Start">
        <div className="card__Block">
          <h5 className="card__Heading">
            Employee Performance
            <span className="card__Heading--Span card__Bg--Cyan">Active</span>
          </h5>
          <p className="card__Info">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="form__Grid--Cols-2">
            <div className="form__Cols--Span-6">
              <input
                type="date"
                name="employee-name"
                id="employee-name"
                autoComplete="given-name"
                className="form__Input"
                placeholder="Enter Employee Id"
              />
            </div>
            <div className="form__Cols--Span-6">
              <input
                type="date"
                name="employee-name"
                id="employee-name"
                autoComplete="given-name"
                className="form__Input"
                placeholder="Enter Employee Id"
              />
            </div>
            <div className="form__Cols--Span-6">
              <select
                id="activity"
                name="activity"
                autoComplete="activity-name"
                className="form__Select"
              >
                <option>Select Activity</option>
                <option>Diet Chart Uploaded/Allocated</option>
                <option>Prescriptions Created</option>
                <option>Chat Messages Count</option>
                <option>Patient Feedback</option>
              </select>
            </div>
            <div className="form__Cols--Span-6">
              <button
                type="button"
                className="card__Btn card__Bg--Cyan card__Btn--Bg-Cyan"
              >
                Download CSV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataCollection;
