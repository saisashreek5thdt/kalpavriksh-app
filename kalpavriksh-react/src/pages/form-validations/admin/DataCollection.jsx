import React from "react";
import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

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
    const data = [
        {
          "Patient ID": "1234",
          "Name": "Keerthana",
          "Age": "25",
          "Sex": "Female",
          "Phone": "555-1234",
          "Email": "keerthana@gmail.com"
        },
        {},
        {},
        {},
        {"Enrollments":""},
        {
          "Program Name": "Program 1",
          "Payment Status": "Paid",
          "Start Date": "2022-01-01",
          "End Date": "2022-03-31",
          "Primary Team": "Team A",
          "Secondary Team": "Team B",
          "Chat Messages Sent Count": "10",
          "Chat Messages Received Count": "20"
        },
        {},{},{"Prescriptions Given":""},
        {
          "Medicine Name": "Medicine 1",
          "Date": "2022-01-02",
          "Total Dose (Morning + Afternoon + Evening)": "1 pill",
          "Frequency": "daily"
        },
        {},{},{},
        {
          "Medicine Name": "Medicine 2",
          "Date": "2022-01-02",
          "Total Dose (Morning + Afternoon + Evening)": "2 pills",
          "Frequency": "twice a day"
        },
        {},{},{},
        {
          "Medicine Name": "Medicine 3",
          "Date": "2022-01-03",
          "Total Dose (Morning + Afternoon + Evening)": "1 pill",
          "Frequency": "daily"
        },
        {},{},{},
        {
          "Response 1": "Response 1",
          "Response 2": "Response 2",
          "Response 3": "Response 3",
          "Date of response": "2022-01-04",
          "Question 1": "Question 1",
          "Question 2": "Question 2",
        },
        {},{},{},
        {
          "Diet chart Date": "2022-01-06",
          "Total Calories": "2000",
          "Carbs": "100",
          "Proteins": "50",
          "Fats": "20",
          "Other attributes": "Other attributes"
        },
        {},{},{},
        {
          "Diet chart name": "Diet chart 1"
        },
        {},{},{},
        {
          "Patient feedback":"Positive Feedback"
        }
      ]
  
      const result = [];

      data.forEach((obj,index) => {
        if (index==0){
            Object.keys(obj).forEach(key=>result.push([key,obj[key]]))
        }
        if (index!=0){
        result.push(Object.keys(obj));
        result.push(Object.values(obj));
        }
      });
      const formData = [
        {
          "Program Name": "",
          "Start Date": "",
          "End Date": "",
          "Patient Name": "",
          "Patient ID": "",
          "Patient Phone": "",
          "Patient Gender": "",
          "Patient Age": "",
          "Patient's Primary Team": "",
          "Patient's Secondary Team": "",
          "Date 1": "",
          "Value 1": "",
          "Date 2": "",
          "Value 2": ""
        }]
        const formCsvData = []
        formData.forEach(obj=>{formCsvData.push(Object.keys(obj));formCsvData.push(Object.values(obj))})
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
                        <CSVLink  data={result}  filename={"PatientData.csv"}>
                            <button
                                type="button"
                                className="card__Btn card__Bg--Teal card__Btn--Bg-Teal"
                            >
                                Download CSV
                            </button>
                            </CSVLink>
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
                        <CSVLink data={formCsvData}  filename={"formData.csv"}>
                            <button
                                type="button"
                                className="card__Btn card__Bg--Sky card__Btn--Bg-Sky"
                            >
                                Download CSV
                            </button>
          </CSVLink>
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