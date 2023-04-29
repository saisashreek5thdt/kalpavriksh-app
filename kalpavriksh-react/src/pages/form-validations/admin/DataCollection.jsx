import React from "react";
import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import { getPerformanceData } from "../../../action/AdminAction";
import Papa from 'papaparse';
import { Url } from "../../../constant.js/PatientConstant";
import Swal from "sweetalert2";

const DataCollection = () => {
    const [patientInfo, setPatientInfo] = useState({ patientId: "" });
    const [formInfo, setFormInfo] = useState({ selectedForm: "" });
    const [employeePerformance, setEmployeePerformance] = useState({});
    const [employeeCsvError, setEmployeeCsvError] = useState(false)
    const [forms, setForms] = useState([]);
    const [patient, setPatient] = useState({});
    const [patientError, setPatientError] = useState(false);
    const dispatch = useDispatch();
    const performanceState = useSelector(state => state.employeePerformance);

    const adminDocInfo = useSelector(state => state.adminSignin.adminDocInfo);

    const formatDateString = (dateString) => {
        const strippedDate = dateString.slice(0, 10);
        return strippedDate
    };
    useEffect(() => {
        fetch(`${Url}/forms/get-all`, {
            headers: {
                Authorization: `Bearer ${adminDocInfo.token}`,
            },
        })
            .then(response => response.json())
            .then(data => { setForms(data.data) })
            .catch(error => console.error(error));
    }, [])
    const downloadPatientCsv = () => {
        if (patientInfo.patientId) {
            fetch(`${Url}/data-collection/patient/${patientInfo.patientId}`, {
                headers: {
                    Authorization: `Bearer ${adminDocInfo.token}`,
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    setPatient(data.data);
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        text: error.message,
                    });
                });
        }
        else {
            setPatientError(true)
        }
    }

    useEffect(() => {
        if (patient && Object.keys(patient).length != 0) {

            try {
                const modifiedPatient = {
                    ...patient,
                    healthPlanStartDate: formatDateString(patient.health_plan_date.startDate),
                    healthPlanEndDate: formatDateString(patient.health_plan_date.endDate),
                    dob: formatDateString(patient.dob),
                    payment_date: formatDateString(patient.payment_date),
                    next_payment_date: formatDateString(patient.next_payment_date),
                    createdOn: formatDateString(patient.createdOn),
                    primaryTeamIds: JSON.stringify(patient.primaryTeamIds),
                    secondaryTeamIds: JSON.stringify(patient.secondaryTeamIds),
                };

                delete modifiedPatient.__v;
                delete modifiedPatient.health_plan_date;

                const csvData = Papa.unparse([modifiedPatient]);
                // Create a Blob object from the CSV data[]
                const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

                // Create a temporary anchor element to download the CSV file
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "patient.csv";
                link.click();
            } catch (error) {
                console.error(error)
            }

        }
    }, [patient])
    console.log('performancedata-->', performanceState)


    useEffect(() => {

        if (performanceState.data.data) {
            try {
                const fields = ['_id', 'form_title', 'status', 'createdAt', 'updatedAt', 'questions', 'doctorId._id', 'doctorId.name', 'doctorId.email', '__v'];

                const modifiedData = performanceState?.data.data.map((item) => {
                    const modifiedItem = { ...item };
                    modifiedItem.questions = JSON.stringify(modifiedItem.questions);
                    modifiedItem.doctorId_id = modifiedItem.doctorId._id;
                    modifiedItem.doctorId_name = modifiedItem.doctorId.name;
                    modifiedItem.doctorId_email = modifiedItem.doctorId.email;
                    modifiedItem.createdOn = formatDateString(modifiedItem.createdOn)
                    delete modifiedItem.doctorId;
                    delete modifiedItem.__v;
                    return modifiedItem;
                });

                const csvData = Papa.unparse(modifiedData, { fields });
                // Create a Blob object from the CSV data[]
                const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

                // Create a temporary anchor element to download the CSV file
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "employeePerformance.csv";
                link.click();
            } catch (error) {
                console.log(error);
            }
        }
    }, [performanceState.data.data]);



    useEffect(() => {
        if ('from' in employeePerformance && 'to' in employeePerformance && 'activity' in employeePerformance) {
            setEmployeeCsvError(false)
        }
    }, [employeePerformance])

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
    const downloadCsv = async () => {
        dispatch(getPerformanceData(employeePerformance))
    }

    useEffect(() => {
        // Cleanup function to reset the state to an empty array
        return () => {
            dispatch(getPerformanceData([]));
        };
    }, [dispatch]);





    const downloadFormCsv = () => {
        if (forms) {
            const selectedForm = forms?.find((form) => form.form_title === formInfo.selectedForm) || {};
            const modifiedForm = {
                ...selectedForm,
                doctorId_id: selectedForm.doctorId?._id,
                doctorId_name: selectedForm.doctorId?.name,
                doctorId_email: selectedForm.doctorId?.email,
                questions: JSON.stringify(selectedForm?.questions),
                createdAt: formatDateString(selectedForm.createdAt),
                updatedAt: formatDateString(selectedForm.updatedAt),
            };
            delete modifiedForm.doctorId
            delete modifiedForm.__v
            // Filter out the 'doctorId' key and its sub-keys from the CSV headers
            // const csvHeaders = Object.keys(modifiedForm).filter((key) => key !== 'doctorId' && key !== '__v');

            const csvData = Papa.unparse([
                modifiedForm
            ]);
            const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

            // Create a temporary anchor element to download the CSV file
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "formData.csv";
            link.click();
        }
    }
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
                                onClick={downloadPatientCsv}
                                type="button"
                                className="card__Btn card__Bg--Teal card__Btn--Bg-Teal"
                            >
                                Download CSV
                            </button>
                            {patientError && <p className="text-red-500 mt-3 font-thin tracking-tight leading-3"> please enter the patient id</p>
                            }
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
                                <option className="font-bold" value="" data-default>
                                    Select Form
                                </option>
                                {forms.map((form) => <option >{form.form_title}</option>)}
                            </select>
                        </div>
                        <div className="form__Cols--Span-6">

                            <button
                                onClick={formInfo?.selectedForm ? downloadFormCsv : ''}
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
                                name="from"
                                autoComplete="given-name"
                                className="form__Input"
                                placeholder="Enter Employee Id"
                                onChange={handleDateInputChange}
                            />
                        </div>
                        <div className="form__Cols--Span-6">
                            <input
                                type="date"
                                name="to"
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
                                <option>form</option>
                                <option>diet-chart</option>
                                <option>prescription</option>
                                {/* <option>Diet Chart Uploaded/Allocated</option>
                                <option>Prescriptions Created</option>
                                <option>Chat Messages Count</option>
                                <option>Patient Feedback</option> */}
                            </select>
                        </div>
                        <div className="form__Cols--Span-6">
                            <button

                                onClick={() => {
                                    if ('from' in employeePerformance && 'to' in employeePerformance && 'activity' in employeePerformance) {
                                        downloadCsv();
                                        setEmployeeCsvError(false)
                                    } else {
                                        setEmployeeCsvError(true)
                                    }
                                }}
                                type="button"
                                className="card__Btn card__Bg--Cyan card__Btn--Bg-Cyan"
                            >
                                Download CSV
                            </button>
                            {employeeCsvError && <p className="text-red-500 mt-3 font-thin tracking-tight leading-3"> please fill all fields</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DataCollection;