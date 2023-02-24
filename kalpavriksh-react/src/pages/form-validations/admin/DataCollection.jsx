import React from "react";
import { useState, useEffect } from "react";

const DataCollection = () => {
    const [patientInfo, setPatientInfo] = useState({ patientId: "" });
    const [formInfo, setFormInfo] = useState({ selectedForm: "" });
    const [employeePerformance, setEmployeePerformance] = useState({});
    const handlePatientInputChange = (e) => {
        const value = e.target.value;
        setPatientInfo({ ...patientInfo, patientId: value });
    };

    console.log("employeePerformance", employeePerformance);
    const handleDateInputChange = (e) => {
        const { name, value } = e.target;
        setEmployeePerformance((employeePerformance) => {
            const updatedEmployeePerformance = { ...employeePerformance };
            if (value === "") {
                delete updatedEmployeePerformance[name];
            } else {
                updatedEmployeePerformance[name] = value;
            }
            return updatedEmployeePerformance;
        });
    };

    const handleFormInputChange = (e) => {
        const value = e.target.value;
        setFormInfo({ ...formInfo, selectedForm: value });
    };
    console.log("patient", patientInfo);
    console.log("forminfo", formInfo);
    return (
        <>
            <div className="card__Container--Around">
                <div className="card__Block">
                    <h5 className="card__Heading">
                        Patient Master Sheet Download
                        <span className="card__Heading--Span card__Bg--Teal">
                            Active
                        </span>
                    </h5>
                    <p className="card__Info">
                        {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
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
                                onChange={handlePatientInputChange}
                                value={patientInfo.patientId}
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
                        <span className="card__Heading--Span card__Bg--Sky">
                            Active
                        </span>
                    </h5>
                    <p className="card__Info">
                        {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
                    </p>
                    <div className="form__Grid--Rows-none">
                        <div className="form__Cols--Span-6">
                            <select
                                id="form"
                                name="form"
                                autoComplete="form-name"
                                className="form__Select"
                                onChange={handleFormInputChange}
                                // value={formInfo.selectedForm}
                            >
                                <option value="" data-default>
                                    Select Form
                                </option>
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
                        <span className="card__Heading--Span card__Bg--Cyan">
                            Active
                        </span>
                    </h5>
                    <p className="card__Info">
                        {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
                    </p>
                    <div className="form__Grid--Cols-2">
                        <div className="form__Cols--Span-6">
                            <input
                                type="date"
                                name="date1"
                                autoComplete="given-name"
                                className="form__Input"
                                placeholder="Enter Employee Id"
                                onChange={handleDateInputChange}
                            />
                        </div>
                        <div className="form__Cols--Span-6">
                            <input
                                type="date"
                                name="date2"
                                autoComplete="given-name"
                                className="form__Input"
                                placeholder="Enter Employee Id"
                                onChange={handleDateInputChange}
                            />
                        </div>
                        <div className="form__Cols--Span-6">
                            <select
                                id="activity"
                                name="activity"
                                autoComplete="activity-name"
                                className="form__Select"
                                onChange={handleDateInputChange}
                            >
                                <option value="" data-default>
                                    Select Activity
                                </option>
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
