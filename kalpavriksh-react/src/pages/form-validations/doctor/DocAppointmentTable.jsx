import React, { useEffect, useState } from "react";
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
import { AppointmentInfo, AppointmentGrid } from "../../../Data/Data_Info";
import { updateSampleSection } from "../../shared/SampleBase";
import { getAppointments } from "../../../action/PatientAction";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";
import { FiPaperclip, FiChevronDown } from "react-icons/fi";
import { getAllDietChart } from "../../../action/AdminAction";
import DocModalInfo from "./DocModalInfo";

const DocAppointmentTable = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(true);
  };
  const appointmentCreate = useSelector((state) => state.appointmentCreate);
  const { success } = appointmentCreate;
  const appointmentList = useSelector((state) => state.appointmentList);
  const { loading, error, appointment } = appointmentList;
  const deitChartList = useSelector((state) => state.deitChartList);
  const { loading: loadingDiet, error: errorDiet, dietchart } = deitChartList;

  const prescriptionPatient = useSelector((state) => state.prescriptionPatient);
  const { loading: loadingPres, error: errorPres, presc } = prescriptionPatient;
  const dispatch = useDispatch();
  useEffect(() => {
    // updateSampleSection();
    const user = "doctor";
    dispatch(getAppointments(user));
    // const user='doctor'
    dispatch(getAllDietChart(user));
    // dispatch(getPatientOldPresc(id))
  }, []);

  // const selectionsettings = { persistSelection: true };
  // const toolbarOptions = ["Delete"];
  // const editing = { allowDeleting: true, allowEditing: true };
  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) : str;
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
                      className="bg-white border-b"
                      onClick={toggleModal}
                      // data-bs-toggle="modal"
                      // data-bs-target="#modalAppointment"
                    >
                      <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                        {i + 1}
                      </td>
                      <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                        {/* {ap.doctorId.name} */}
                        {ap.doctorId ? ap.doctorId.name : ""}
                      </td>
                      <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                        {/* {ap.patientId.name} */}{" "}
                        {ap.patientId ? ap.patientId.name : ""}
                      </td>
                      <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                        {truncate(ap.date, 11)}
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
      {modal && (
        <DocModalInfo closeModal={setModal} />
      )}
    </>
  );
};

export default DocAppointmentTable;
