import React from "react";

const PatientFilter = ({handleClick}) => {
    return (
        <>
            <div className="card__Block">
                <h5 className="card__Heading">
                    Search Patient Data
                    <span className="card__Heading--Span card__Bg--Teal">
                        Filters
                    </span>
                </h5>
                <form>
                    <div className="form__Grid--Rows-none">
                        <div className="form__Cols--Span-6">
                            <input
                                type="text"
                                name="patient-name"
                                id="patient-name"
                                autoComplete="patient-name"
                                className="form__Input"
                                placeholder="Search by Enter Patient Name / Phone Number"
                            />
                        </div>
                        <div className="form__Cols--Span-6">
                            <select
                                id="form"
                                name="form"
                                autoComplete="form-name"
                                className="form__Select"
                            >
                                <option value="" data-default>
                                    Select Programs Enrolled (Health Plan)
                                </option>
                                <option>Please Select Health Plan</option>
                                <option>Health Plan 1</option>
                                <option>Health Plan 2</option>
                                <option>Health Plan 3</option>
                                <option>Health Plan 4</option>
                            </select>
                        </div>
                        <div className="form__Cols--Span-6">
                            <select
                                id="form"
                                name="form"
                                autoComplete="form-name"
                                className="form__Select"
                            >
                                <option value="" data-default>
                                    Select Payment Status
                                </option>
                                <option>Please Select Payment Status</option>
                                <option>Active</option>
                                <option>De-Active</option>
                            </select>
                        </div>
                        <div className="form__Cols--Span-6">
                            <select
                                id="form"
                                name="form"
                                autoComplete="form-name"
                                className="form__Select"
                            >
                                <option value="" data-default>
                                    Select Patient Type
                                </option>
                                <option>Please Select Patient Type</option>
                                <option>Primary</option>
                                <option>Secondary</option>
                            </select>
                        </div>
                        <div className="form__Cols--Span-6">
                            <button
                            onClick={handleClick}
                                type="button"
                                className="card__Btn card__Bg--Teal card__Btn--Bg-Teal"
                            >
                                Search Patient
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PatientFilter;