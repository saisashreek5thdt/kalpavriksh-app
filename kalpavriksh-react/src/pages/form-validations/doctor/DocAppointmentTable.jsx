import React, { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Selection,
    Inject,
    Edit,
    Toolbar,
    Sort,
    Filter,
} from "@syncfusion/ej2-react-grids";
import { createPrescription, getPatientOldPresc } from "../../../action/DoctorAction";
import Swal from "sweetalert2";
import { CREATE_PRESC_RESET } from "../../../constant.js/DoctorConstant";
import { AppointmentInfo, AppointmentGrid } from "../../../Data/Data_Info";
import { updateSampleSection } from "../../shared/SampleBase";
import { getAppointments } from "../../../action/PatientAction";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";
import { FiPaperclip, FiChevronDown } from "react-icons/fi";
import { getAllDietChart } from "../../../action/AdminAction";
import DocModalInfo from "./DocModalInfo";
import { useLocation } from "react-router-dom";
import { getLatesDietChartByDoctor, getLatesPrescriptionForDoctor, getPatientProfileByDoctor } from "../../../action/DoctorAction";
import { useRef } from 'react';

const DocAppointmentTable = () => {
    const [modal, setModal] = useState(false);
    const [show, setShow] = useState(false)
    const appointmentCreate = useSelector((state) => state.appointmentCreate);
    const { success } = appointmentCreate;
    const appointmentList = useSelector((state) => state.appointmentList);
    const { loading, error, appointment } = appointmentList;
    const [prescribePatient, setPrescribePatient] = useState('')
    const [prescriptions, setPrescriptions] = useState([{ id: 0 }])
    const latestPrescription = useSelector((state) => state.latestPrescription)
    const { loading: loadingLatest, error: errorLatest, prescLatest } = latestPrescription
    const patientProfileList = useSelector(state => state.patientProfileList)
    const { loading: loadingProfile, error: errorProfile, profile } = patientProfileList
    const latestDietChart = useSelector((state) => state.latestDietChart)
    const { loading: LoadingDietLatest, error: errorDietLatest, deitChartLatest } = latestDietChart
    const prescriptionCreate = useSelector((state) => state.prescriptionCreate)
    const { success: prescriptionCreateSuccess, error: prescriptionCreateError } = prescriptionCreate;
    const location = useLocation();
    //   const { id } = location.state;
    const prescriptionPatient = useSelector(
        (state) => state.prescriptionPatient
    );
    const {
        loading: loadingPres,
        error: errorPres,
        presc,
    } = prescriptionPatient;
    const dispatch = useDispatch();
    const scrollRef = useRef(null);
    useEffect(() => {
        // updateSampleSection();
        const user = "doctor";
        dispatch(getAppointments(user));
        // const user='doctor'
        dispatch(getAllDietChart(user));
        // dispatch(getPatientOldPresc(id))
    }, []);
    useEffect(() => {
        if (prescriptionCreateSuccess) {
            Swal.fire({
                icon: "success",
                text: "Prescription Created successfully",
            });
        }
        else if (prescriptionCreateError) {
            Swal.fire({
                icon: "error",
                text: "Failed to create Prescription",
            });
        }
    }, [prescriptionCreate])
    function handleScrollToBottom() {
        if (scrollRef.current) {
            scrollRef.current?.scrollIntoView({ behavior: "smooth" })
        }
    }
    useEffect(() => {
        handleScrollToBottom()
    }, [prescriptions.length])

    // const selectionsettings = { persistSelection: true };
    // const toolbarOptions = ["Delete"];
    // const editing = { allowDeleting: true, allowEditing: true };
    const truncate = (str, n) => {
        return str.length > n ? str.substr(0, n - 1) : str;
    };

    const getDetailsOfPatient = (id) => {
        dispatch(getLatesPrescriptionForDoctor(id))
        dispatch(getPatientProfileByDoctor(id))
        dispatch(getLatesDietChartByDoctor(id))
        setPrescribePatient(id)
        console.log(id)

    }
    if (deitChartLatest) {
        console.log(deitChartLatest)
    }
    const addMedicine = () => {
        const maxId = prescriptions.reduce((max, prescription) => Math.max(max, prescription.id), 0);
        setPrescriptions([...prescriptions, { id: maxId + 1 }]);
    }

    const removeMedicine = (idToRemove) => {
        setPrescriptions((oldPrescriptions) => {
            // Remove the prescription with the specified ID
            const newPrescriptions = oldPrescriptions.filter((prescription) => prescription.id !== idToRemove);

            // Update the IDs of all prescriptions with an ID greater than the one that was removed
            return newPrescriptions.map((prescription) => {
                if (prescription.id > idToRemove) {
                    return { ...prescription, id: prescription.id - 1 };
                } else {
                    return prescription;
                }
            });
        });
    };


    const handlePrescriptions = ({ e, key, i }) => {
        setPrescriptions((oldPrescriptions) => {
            const prescriptionIndex = oldPrescriptions.findIndex(prescription => prescription.id === i);
            const newPrescription = [...oldPrescriptions];
            if (prescriptionIndex === -1) {
                newPrescription.push({ id: i, [key]: e?.target.value, patientId: appointment[0]?.patientId?._id });
            } else {
                newPrescription[prescriptionIndex] = {
                    ...newPrescription[prescriptionIndex],
                    [key]: e?.target.value,
                };
            }
            return newPrescription;
        });
    }
    console.log("prescriptions", prescriptions)
    //   useEffect(() => {
    //     dispatch(getPatientOldPresc(id))
    //     if (prescriptionsuccess) {
    //       dispatch({ type: CREATE_PRESC_RESET });
    //       Swal.fire({
    //         icon: "success",
    //         title: "Prescription created succesfully",
    //         // showDenyButton: true,
    //         // showCancelButton: true,
    //         confirmButtonText: "Save",
    //         denyButtonText: `Don't save`,
    //       })
    //       setPrescriptions([])
    //       // setMedType({})
    //       // setMedName({})
    //       // setAftDose({})
    //       // setDurDays({})
    //       // setDuration({})
    //       // setEveDose({})
    //       // setFrquency({})
    //       // setMornDose({})
    //       // setSpecinst({})

    //     }
    //   }, [prescriptionsuccess]);
    const createPrescriptionHandler = (e) => {
        e.preventDefault();
        const payload = {
            patientId: prescribePatient,
            prescriptions: prescriptions,
        };
        dispatch(createPrescription(payload));
    };

    return (
        <>
            <div className="py-16 bg-white rounded-3xl">
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox>{error}</MessageBox>
                ) : (
                    <div className="my-10">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b-2 border-gray-200">
                                <tr>
                                    <th className="w-10 p-3 text-lg font-semibold tracking-wide text-left">
                                        Sl No.
                                    </th>
                                    <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                                        Doctor Name
                                    </th>
                                    <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                                        Patient Name
                                    </th>
                                    <th className="w-32 p-3 text-lg font-semibold tracking-wide text-left">
                                        Appointment Date
                                    </th>
                                    <th className="w-32 p-3 text-lg font-semibold tracking-wide text-left">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {loading ? (
                                    <LoadingBox></LoadingBox>
                                ) : error ? (
                                    <MessageBox>{error}</MessageBox>
                                ) : appointment.length > 0 ? (
                                    appointment.map((ap, i) => (
                                        <tr
                                            className="bg-white border-b cursor-pointer"
                                            key={ap._id}
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalAppointment"
                                            onClick={() => getDetailsOfPatient(ap.patientId._id)}
                                        >
                                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                                {i + 1}
                                            </td>
                                            <td className="p-3 text-base capitalize text-gray-700 whitespace-nowrap">
                                                {/* {ap.doctorId.name} */}
                                                {ap.doctorId
                                                    ? ap.doctorId.name
                                                    : ""}
                                            </td>
                                            <td className="p-3 text-base capitalize text-gray-700 whitespace-nowrap">
                                                {/* {ap.patientId.name} */}{" "}
                                                {ap.patientId
                                                    ? ap.patientId.name
                                                    : ""}
                                            </td>
                                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                                {truncate(ap.date, 11)}
                                            </td>
                                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                                <FiEye
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalAppointment"
                                                />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <MessageBox>No Appointments</MessageBox>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            {/* {setModal && <DocModalInfo show={modal} close={toggleModal}/>} */}
            <div
                className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="modalAppointment"
                backdrop="static"
                closable="false"
                aria-labelledby="modalAppointmentLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5
                                className="text-xl font-medium leading-normal text-gray-800"
                                id="modalAppointmentLabel"
                            >
                                Patient Medical Info
                            </h5>
                            <button
                                type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body relative p-4">
                            <div className="p-2">
                                <div className="relative w-full overflow-hidden">
                                    <input
                                        type="checkbox"
                                        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                                    />
                                    <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                                        <h1 className="text-lg font-semibold text-gray-600">
                                            Patient Basic Info
                                        </h1>
                                    </div>
                                    {/* Down Arrow Icon */}
                                    <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                        <FiChevronDown className="w-6 h-6" />
                                    </div>
                                    {!loadingProfile && !errorProfile && profile && (
                                        <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                                            <div className="p-4">
                                                <div className="form__Grid--Cols-6">
                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            Patient Name
                                                        </label>
                                                        <p className="form__Heading">
                                                            {profile.name}
                                                        </p>
                                                    </div>
                                                    {/* 
                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            Patient Age
                                                        </label>
                                                        <p className="form__Heading">
                                                            46 yrs
                                                        </p>
                                                    </div>
                                                     */}
                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            Patient Gender
                                                        </label>
                                                        <p className="form__Heading">
                                                            {profile.gender}
                                                        </p>
                                                    </div>
                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            Patient Phone Number
                                                        </label>
                                                        <p className="form__Heading">
                                                            {profile.phone}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative w-full overflow-hidden">
                                    <input
                                        type="checkbox"
                                        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                                    />
                                    <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                                        <h1 className="text-lg font-semibold text-gray-600">
                                            Medical Information - Latest
                                            Prescription
                                        </h1>
                                    </div>
                                    {/* Down Arrow Icon */}
                                    <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                        <FiChevronDown className="w-6 h-6" />
                                    </div>
                                    {!loadingLatest && !errorLatest && prescLatest && (
                                        <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                                            <div className="p-4">
                                                <div className="form__Grid--Cols-6">
                                                    <div className="form__Cols--Span-6">
                                                        <label htmlFor="prescribedBy" className="form__Label-Heading">
                                                            Prescribed Date
                                                        </label>
                                                        <p className="form__Heading">{truncate(prescLatest.createdOn, 11)}</p>
                                                    </div>
                                                    <div className="form__Cols--Span-6">
                                                        <label htmlFor="prescribedBy" className="form__Label-Heading">
                                                            Prescribed By
                                                        </label>
                                                        <p className="form__Heading">{prescLatest.doctorId.name}</p>
                                                    </div>

                                                    {prescLatest.medicines.map((medicine, index) => (
                                                        <React.Fragment key={index}>
                                                            <> <div className="form__Cols--Span-6 font-bold">Medicine {index + 1}</div><div className="form__Cols--Span-6 font-bold"></div></>
                                                            <div className="form__Cols--Span-6">
                                                                <label htmlFor={`medicineType${index}`} className="form__Label-Heading">
                                                                    Medicine Type
                                                                </label>
                                                                <p className="form__Heading">{medicine.medType}</p>
                                                            </div>
                                                            <div className="form__Cols--Span-6">
                                                                <label htmlFor={`medicineName${index}`} className="form__Label-Heading">
                                                                    Medicine Name
                                                                </label>
                                                                <p className="form__Heading">{medicine.medName}</p>
                                                            </div>
                                                            <div className="form__Cols--Span-6">
                                                                <label htmlFor={`medicineMorningDose${index}`} className="form__Label-Heading">
                                                                    Medicine Morning Dose
                                                                </label>
                                                                <p className="form__Heading">{medicine.mornDose}</p>
                                                            </div>
                                                            <div className="form__Cols--Span-6">
                                                                <label htmlFor={`medicineAfternoonDose${index}`} className="form__Label-Heading">
                                                                    Medicine Afternoon Dose
                                                                </label>
                                                                <p className="form__Heading">{medicine.aftDose}</p>
                                                            </div>
                                                            <div className="form__Cols--Span-6">
                                                                <label htmlFor={`medicineEveningDose${index}`} className="form__Label-Heading">
                                                                    Medicine Evening Dose
                                                                </label>
                                                                <p className="form__Heading">{medicine.eveDose}</p>
                                                            </div>
                                                            <div className="form__Cols--Span-6">
                                                                <label htmlFor={`medicineFrequency${index}`} className="form__Label-Heading">
                                                                    Medicine Frequency
                                                                </label>
                                                                <p className="form__Heading">{medicine.frequency}</p>
                                                            </div>
                                                            <div className="form__Cols--Span-6">
                                                                <label htmlFor={`medicineDuration${index}`} className="form__Label-Heading">
                                                                    Medicine Duration (Number / Days / Weeks)
                                                                </label>
                                                                <p className="form__Heading">
                                                                    {medicine.durDays} {medicine.duration}
                                                                </p>
                                                            </div>
                                                            <div className="form__Cols--Span-6">
                                                                <label htmlFor={`medicineSplInstructions${index}`} className="form__Label-Heading">
                                                                    Medicine Special Instructions
                                                                </label>
                                                                <p className="form__Heading">{medicine.specinst}</p>
                                                            </div>
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>)}

                                </div>
                            </div>
                            {!LoadingDietLatest && !errorDietLatest && deitChartLatest && (
                                <div className="p-2">
                                    <div className="relative w-full overflow-hidden">
                                        <input
                                            type="checkbox"
                                            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                                        />
                                        <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                                            <h1 className="text-lg font-semibold text-gray-600">
                                                Medical Information - Latest Diet
                                                Chart
                                            </h1>
                                        </div>
                                        {/* Down Arrow Icon */}
                                        <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                            <FiChevronDown className="w-6 h-6" />
                                        </div>
                                        <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                                            <div className="p-4">
                                                <div className="form__Grid--Cols-6">
                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            Prescribed Date
                                                        </label>
                                                        <p className="form__Heading">
                                                            {truncate(deitChartLatest.createdOn, 11)}
                                                        </p>
                                                    </div>
                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            Prescribed By
                                                        </label>
                                                        <p className="form__Heading">
                                                            {deitChartLatest.doctorId ? deitChartLatest.doctorId.name : ''}                                                    </p>
                                                    </div>
                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            Low Calories Range
                                                        </label>
                                                        <p className="form__Heading">{deitChartLatest.calorie_lower}</p>
                                                    </div>
                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            High Clories Range
                                                        </label>
                                                        <p className="form__Heading">{deitChartLatest.calorie_upper}</p>
                                                    </div>
                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            Low Carbohydrates Range
                                                        </label>
                                                        <p className="form__Heading">{deitChartLatest.ch_lower}</p>
                                                    </div>
                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            High Carbohydrates Range
                                                        </label>
                                                        <p className="form__Heading">{deitChartLatest.ch_upper}</p>
                                                    </div>
                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            Protiens Range
                                                        </label>
                                                        <p className="form__Heading">{deitChartLatest.protiens}</p>
                                                    </div>
                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            Fats Range
                                                        </label>
                                                        <p className="form__Heading">{deitChartLatest.fats}</p>
                                                    </div>

                                                    <div className="form__Cols--Span-6">
                                                        <label
                                                            htmlFor="prescribedBy"
                                                            className="form__Label-Heading"
                                                        >
                                                            Food Cusine
                                                        </label>
                                                        <p className="form__Heading">{deitChartLatest.cuisine_type}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="p-2">
                                <div className="relative w-full overflow-hidden">
                                    <input
                                        type="checkbox"
                                        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                                    />
                                    <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                                        <h1 className="text-lg font-semibold text-gray-600">
                                            Medical Information - Form Title (20/02/2023) - Daily
                                        </h1>
                                    </div>
                                    {/* Down Arrow Icon */}
                                    <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                        <FiChevronDown className="w-6 h-6" />
                                    </div>
                                    <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                                        <div className="p-4">
                                            <div className="form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Form Title Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Form Frequency Type
                                                    </label>
                                                    <p className="form__Heading">
                                                        Daily
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="py-4 form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Title Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Type
                                                    </label>
                                                    <p className="form__Heading">
                                                        Radio
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Option Selected
                                                    </label>
                                                    <p className="form__Heading">
                                                        Option Name
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="py-4 form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Title Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Type
                                                    </label>
                                                    <p className="form__Heading">
                                                        Checkbox
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Option Selected
                                                    </label>
                                                    <p className="form__Heading">
                                                        Option Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Option Selected
                                                    </label>
                                                    <p className="form__Heading">
                                                        Option Name
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="py-4 form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Title Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Type
                                                    </label>
                                                    <p className="form__Heading">
                                                        Textarea
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Option Answered
                                                    </label>
                                                    <p className="form__Heading">
                                                        Option Name
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative w-full overflow-hidden">
                                    <input
                                        type="checkbox"
                                        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                                    />
                                    <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                                        <h1 className="text-lg font-semibold text-gray-600">
                                            Medical Information - Form Title (20/02/2023) - Weekly
                                        </h1>
                                    </div>
                                    {/* Down Arrow Icon */}
                                    <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                        <FiChevronDown className="w-6 h-6" />
                                    </div>
                                    <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                                        <div className="p-4">
                                            <div className="form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Form Title Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Form Frequency Type
                                                    </label>
                                                    <p className="form__Heading">
                                                        Weekly (20/02/2023)
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="py-4 form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Title Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Type
                                                    </label>
                                                    <p className="form__Heading">
                                                        Radio
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Option Selected
                                                    </label>
                                                    <p className="form__Heading">
                                                        Option Name
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="py-4 form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Title Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Type
                                                    </label>
                                                    <p className="form__Heading">
                                                        Checkbox
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Option Selected
                                                    </label>
                                                    <p className="form__Heading">
                                                        Option Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Option Selected
                                                    </label>
                                                    <p className="form__Heading">
                                                        Option Name
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="py-4 form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Title Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Type
                                                    </label>
                                                    <p className="form__Heading">
                                                        Textarea
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Option Answered
                                                    </label>
                                                    <p className="form__Heading">
                                                        Option Name
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="relative w-full overflow-hidden">
                                    <input
                                        type="checkbox"
                                        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                                    />
                                    <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                                        <h1 className="text-lg font-semibold text-gray-600">
                                            Medical Information - Form Title (20/02/2023) - Bi-Weekly
                                        </h1>
                                    </div>
                                    {/* Down Arrow Icon */}
                                    <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                        <FiChevronDown className="w-6 h-6" />
                                    </div>
                                    <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                                        <div className="p-4">
                                            <div className="form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Form Title Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Form Frequency Type
                                                    </label>
                                                    <p className="form__Heading">
                                                        Bi-Weekly (20/02/2023)
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="py-4 form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Title Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Type
                                                    </label>
                                                    <p className="form__Heading">
                                                        Radio
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Option Selected
                                                    </label>
                                                    <p className="form__Heading">
                                                        Option Name
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="py-4 form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Title Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Type
                                                    </label>
                                                    <p className="form__Heading">
                                                        Checkbox
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Option Selected
                                                    </label>
                                                    <p className="form__Heading">
                                                        Option Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Option Selected
                                                    </label>
                                                    <p className="form__Heading">
                                                        Option Name
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="py-4 form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Title Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Question Type
                                                    </label>
                                                    <p className="form__Heading">
                                                        Textarea
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Option Answered
                                                    </label>
                                                    <p className="form__Heading">
                                                        Option Name
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 
                            <div className="p-2">
                                <div className="relative w-full overflow-hidden">
                                    <input
                                        type="checkbox"
                                        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                                    />
                                    <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                                        <h1 className="text-lg font-semibold text-gray-600">
                                            Medical Information - Payment Status
                                        </h1>
                                    </div>
                                    <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                        <FiChevronDown className="w-6 h-6" />
                                    </div>
                                    <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                                        <div className="p-4">
                                            <div className="form__Grid--Cols-6">
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Health Plan Name
                                                    </label>
                                                    <p className="form__Heading">
                                                        Plan Name
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Payment Status
                                                    </label>
                                                    <p className="form__Heading">
                                                        {" "}
                                                        Paid / Un-paid
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Pending Amount
                                                    </label>
                                                    <p className="form__Heading">
                                                        &#8377; 2000/-
                                                    </p>
                                                </div>
                                                <div className="form__Cols--Span-6">
                                                    <label
                                                        htmlFor="prescribedBy"
                                                        className="form__Label-Heading"
                                                    >
                                                        Paid Amount
                                                    </label>
                                                    <p className="form__Heading">
                                                        &#8377; 3000/-
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             */}
                            <div className="p-2">
                                    <div className="relative w-full overflow-hidden">
                                        <input
                                            type="checkbox"
                                            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                                        />
                                        <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                                            <h1 className="text-lg font-semibold text-gray-600">
                                                Medical Information - Prescription
                                            </h1>
                                        </div>
                                        <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                            <FiChevronDown className="w-6 h-6" />
                                        </div>
                                        <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                                            <form onSubmit={createPrescriptionHandler}>
                                                <div className="overflow-auto h-[33rem]">
                                                    {prescriptions.map((medicine, i) => <>
                                                        <div key={i} className={`${i > 0 ? 'mt-3' : ''} mb-2`}>
                                                            <div className="form__Grid--Cols-6">
                                                                {i === 0 ? <><div className="form__Cols--Span-6">
                                                                    <label
                                                                        htmlFor="prescribedBy"
                                                                        className="form__Label-Heading"
                                                                    >
                                                                        Doctor Name
                                                                    </label>
                                                                    <p className="form__Heading">Rajiv Singla</p>
                                                                </div>
                                                                    <div className="form__Cols--Span-6">
                                                                        <label
                                                                            htmlFor="prescribedDate"
                                                                            className="form__Label-Heading"
                                                                        >
                                                                            Prescribed Date
                                                                        </label>
                                                                        <p className="form__Heading">24-11-2022</p>
                                                                    </div></> : <><span className="form__Cols--Span-6 font-bold">Medicine {i + 1}</span>
                                                                    <span onClick={() => removeMedicine(i)} className="form__Cols--Span-6 cursor-pointer font-bold">Remove Medicine</span>
                                                                </>}
                                                                <div className="form__Cols--Span-6">
                                                                    <label
                                                                        htmlFor="medicineType"
                                                                        className="form__Label-Heading"
                                                                    >
                                                                        Medicine Type
                                                                    </label>
                                                                    <select
                                                                        className="form__Select"
                                                                        name=""
                                                                        value={prescriptions[i]?.medType || ''}
                                                                        id=""
                                                                        onChange={(e) => {
                                                                            const key = 'medType'
                                                                            handlePrescriptions({ e, key, i })
                                                                        }
                                                                        }
                                                                    >
                                                                        <option value="none">Please select</option>
                                                                        <option value="Tablet">Tablet</option>
                                                                        <option value="Tab">Tab</option>
                                                                        <option value="Injection">Injection</option>
                                                                        <option value="Injection by pen">Injection by pen</option>
                                                                        <option value="Sachet">Sachet</option>
                                                                        <option value="Rotacap">Rotacap</option>
                                                                        <option value="TAB">TAB</option>
                                                                        <option value="Ointment">Ointment</option>
                                                                        <option value="Ointment/Cream">Ointment/Cream</option>
                                                                        <option value="Tablet/Sachet">Tablet/Sachet</option>
                                                                        <option value="NEBULIZATION">NEBULIZATION</option>
                                                                    </select> 
                                                                </div>
                                                                <div className="form__Cols--Span-6">
                                                                    <label
                                                                        htmlFor="medicineName"
                                                                        className="form__Label-Heading"
                                                                    >
                                                                        Medicine Name
                                                                    </label>
                                                                    <input
                                                                        value={prescriptions[i]?.medName || ''}
                                                                        onChange={(e) => {
                                                                            const key = 'medName'
                                                                            handlePrescriptions({ e, key, i })
                                                                        }
                                                                        }
                                                                        id="medicineName"
                                                                        name="medicineName"
                                                                        type="text"
                                                                        autoComplete="medicineName"
                                                                        required
                                                                        className="form__Input"
                                                                        placeholder="Enter Medicine Name"
                                                                    />
                                                                </div>
                                                                <div className="form__Cols--Span-6">
                                                                    <label
                                                                        htmlFor="medicineMorningDose"
                                                                        className="form__Label-Heading"
                                                                    >
                                                                        Medicine Morning Dose
                                                                    </label>
                                                                    <input
                                                                        value={prescriptions[i]?.mornDose || ''}
                                                                        onChange={(e) => {
                                                                            const key = 'mornDose'
                                                                            handlePrescriptions({ e, key, i })
                                                                        }
                                                                        }
                                                                        id="medicineMorningDose"
                                                                        name="medicineMorningDose"
                                                                        type="text"
                                                                        autoComplete="medicineMorningDose"
                                                                        required
                                                                        className="form__Input"
                                                                        placeholder="Enter Medicine Morning Dose"
                                                                    />
                                                                </div>
                                                                <div className="form__Cols--Span-6">
                                                                    <label
                                                                        htmlFor="medicineAfternoonDose"
                                                                        className="form__Label-Heading"
                                                                    >
                                                                        Medicine Afternoon Dose
                                                                    </label>
                                                                    <input
                                                                        value={prescriptions[i]?.aftDose || ''}
                                                                        onChange={(e) => {
                                                                            const key = 'aftDose'
                                                                            handlePrescriptions({ e, key, i })
                                                                        }
                                                                        }
                                                                        id="medicineAfternoonDose"
                                                                        name="medicineAfternoonDose"
                                                                        type="text"
                                                                        autoComplete="medicineAfternoonDose"
                                                                        required
                                                                        className="form__Input"
                                                                        placeholder="Enter Medicine Afternoon Dose"
                                                                    />
                                                                </div>
                                                                <div className="form__Cols--Span-6">
                                                                    <label
                                                                        htmlFor="medicineEveningDose"
                                                                        className="form__Label-Heading"
                                                                    >
                                                                        Medicine Evening Dose
                                                                    </label>
                                                                    <input
                                                                        value={prescriptions[i]?.eveDose || ''}
                                                                        onChange={(e) => {
                                                                            const key = 'eveDose'
                                                                            handlePrescriptions({ e, key, i })
                                                                        }
                                                                        }
                                                                        id="medicineEveningDose"
                                                                        name="medicineEveningDose"
                                                                        type="text"
                                                                        autoComplete="medicineEveningDose"
                                                                        required
                                                                        className="form__Input"
                                                                        placeholder="Enter Medicine Evening Dose"
                                                                    />
                                                                </div>
                                                                <div className="form__Cols--Span-6">
                                                                    <label
                                                                        htmlFor="medicineFrequency"
                                                                        className="form__Label-Heading"
                                                                    >
                                                                        Medicine Frequency
                                                                    </label>
                                                                    <select
                                                                        className="form__Select"
                                                                        name=""
                                                                        id=""
                                                                        value={prescriptions[i]?.frequency || ''}
                                                                        onChange={(e) => {
                                                                            const key = 'frequency'
                                                                            handlePrescriptions({ e, key, i })
                                                                        }
                                                                        }
                                                                    >
                                                                        <option value="none">Please select</option>
                                                                        <option value="Daily">Daily</option>
                                                                        <option value="Alternative day">Alternative day</option>
                                                                        <option value="Daily/SOS">Daily/SOS</option>
                                                                        <option value="once every 15 day">
                                                                            once every 15 day
                                                                        </option>
                                                                        <option value="Day 1-21 with a gap of 7 days">
                                                                            Day 1-21 with a gap of 7 days
                                                                        </option>
                                                                        <option value="Dail">Dail</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form__Cols--Span-6">
                                                                    <label
                                                                        htmlFor="medicineDurationNumber"
                                                                        className="form__Label-Heading"
                                                                    >
                                                                        Medicine Duration (Number)
                                                                    </label>
                                                                    <select
                                                                        className="form__Select"
                                                                        name=""
                                                                        id=""
                                                                        value={prescriptions[i]?.duration || ''}
                                                                        onChange={(e) => {
                                                                            const key = 'duration'
                                                                            handlePrescriptions({ e, key, i })
                                                                        }
                                                                        }
                                                                    >
                                                                        <option value="none">Please select</option>
                                                                        <option value="Days">Days</option>
                                                                        <option value="Weeks">Weeks</option>
                                                                        <option value="Months">Months</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form__Cols--Span-6">
                                                                    <label
                                                                        htmlFor="medicineDurationDays"
                                                                        className="form__Label-Heading"
                                                                    >
                                                                        Medicine Duration (Days / Weeks)
                                                                    </label>
                                                                    <input
                                                                        value={prescriptions[i]?.durDays || ''}
                                                                        onChange={(e) => {
                                                                            const key = 'durDays'
                                                                            handlePrescriptions({ e, key, i })
                                                                        }
                                                                        }
                                                                        id="medicineDurationDays"
                                                                        name="medicineDurationDays"
                                                                        type="number"
                                                                        autoComplete="medicineDurationDays"
                                                                        required
                                                                        className="form__Input"
                                                                        placeholder="Enter Medicine Duration Days"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="form__Grid--Rows-none">
                                                                <div className="form__Cols--Span-6">
                                                                    <label
                                                                        htmlFor="medicineSplInstructions"
                                                                        className="form__Label-Heading"
                                                                    >
                                                                        Medicine Special Instructions
                                                                    </label>
                                                                    <textarea

                                                                        value={prescriptions[i]?.specinst || ''}
                                                                        onChange={(e) => {
                                                                            const key = 'specinst'
                                                                            handlePrescriptions({ e, key, i })
                                                                        }
                                                                        }
                                                                        id="medicineSplInstructions"
                                                                        name="medicineSplInstructions"
                                                                        rows="3"
                                                                        autoComplete="medicineSplInstructions"
                                                                        required
                                                                        className="form__Textarea"
                                                                        placeholder="Enter Medicine Spl Instructions"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>)}
                                                    <div ref={scrollRef}></div>
                                                </div>
                                                <div className="form__Grid--Rows-none">
                                                    <div className="form__Cols--Span-6">
                                                        <button
                                                            type="button"
                                                            className="px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                                            onClick={addMedicine}
                                                        >
                                                            Add More Medicines
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                                    <button
                                                        type="button"
                                                        className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        data-bs-dismiss="modal"
                                                        className="px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                                    >
                                                        Create &amp; Save Prescription
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button
                                type="button"
                                className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DocAppointmentTable;