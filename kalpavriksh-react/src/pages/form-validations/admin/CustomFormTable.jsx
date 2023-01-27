import React from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  activateDtChart,
  activateForm,
  deactivateDtChart,
  deactivateForm,
  getAllDietChart,
} from "../../../action/AdminAction";
import { getForms } from "../../../action/PatientAction";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";
import {
  ACTIVATE_DTCHART_RESET,
  ACTIVATE_FORM_RESET,
  DEACTIVATE_DTCHART_RESET,
  DEACTIVATE_FORM_RESET,
} from "../../../constant.js/AdminConstant";

const CustomFormTable = () => {
  const dispatch = useDispatch();
  const getFomrsList = useSelector((state) => state.patientFormList);
  const { loading, error, forms } = getFomrsList;

  const activateFormVariables = useSelector((state) => state.activateform);
  const {
    loading: loadingFormAc,
    error: errorFormAc,
    success: successFormAc,
  } = activateFormVariables;
  const deactivateFormVariables = useSelector((state) => state.deactivateform);
  const {
    loading: loadingFormDe,
    error: errorFormDe,
    success: successFormDe,
  } = deactivateFormVariables;

  useEffect(() => {
    dispatch(getForms("admin"));

    if (successFormAc) {
      dispatch({ type: ACTIVATE_FORM_RESET });
      Swal.fire({
        icon: "success",
        text: "activated successfully",
      });
    }
    if (successFormDe) {
      dispatch({ type: DEACTIVATE_FORM_RESET });
      Swal.fire({
        icon: "success",
        text: "deactivated successfully",
      });
    }
  }, [successFormAc, successFormDe, ,]);

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) : str;
  };

  const activateForms = (state, id) => {
    if (state === "Active") {
      Swal.fire({
        title: "Do you want to deactivet forms?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          dispatch(deactivateForm(id));
          // Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } else if (state === "De-Active") {
      Swal.fire({
        title: "Do you want to activate forms?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          dispatch(activateForm(id));
          // Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  return (
    <>
      <div className="my-10">
        <table className="table__Container">
          <thead className="table__Head">
            <tr>
              <th className="table__Head--Text">Sl No.</th>
              <th className="table__Head--Text">Form Name</th>
              <th className="table__Head--Text">Created By</th>
              <th className="table__Head--Text">Created Date</th>
              <th className="table__Head--Text">Access</th>
              <th className="table__Head--Text">Actions</th>
            </tr>
          </thead>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox>{error}</MessageBox>
          ) : (
            forms.map((frm, index) => (
              <tbody key={frm._id}>
                <tr className="table__Body--Row">
                  <td className="table__Body--Row_Data">{index + 1}</td>
                  <td className="table__Body--Row_Data">{frm.form_title}</td>
                  <td className="table__Body--Row_Data">
                    {frm.doctorId ? frm.doctorId.name : ""}
                  </td>
                  <td className="table__Body--Row_Data">
                    {truncate(frm.createdAt, 11)}
                  </td>
                  <td className="table__Body--Row_Data">
                    <select
                      id="status"
                      name="status"
                      autoComplete="status-name"
                      className="form__Select"
                      onChange={() => activateForms(frm.status, frm._id)}
                    >
                      <option value={frm.status}>{frm.status}</option>
                      {frm.status === "Active" ? (
                        <option>De-Active</option>
                      ) : frm.status === "De-Active" ? (
                        <option>Active</option>
                      ) : (
                        ""
                      )}
                    </select>
                  </td>
                  <td className="table__Body--Row_Data">
                    <FiEdit
                      className="table__Body--Status_Icons"
                      data-bs-toggle="modal"
                      data-bs-target="#modalForms"
                    />
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </table>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="modalForms"
        tabIndex="-1"
        aria-labelledby="modalFormsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered w-auto pointer-events-none relative">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="tab__Modal--Title" id="modalFormsLabel">
                Forms Created by Doctor
              </h5>
              <button
                type="button"
                className="tab__Modal--Btn_Close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* {!loadingLatest && !errorLatest && prescLatest ? (  */}
            <div className="modal-body relative p-4">
              <div className="form__Grid--Cols-6">
                <div className="form__Cols--Span-6">
                  <label htmlFor="prescribedBy" className="form__Label-Heading">
                    Doctor Name
                  </label>
                  {/* <p className="form__Heading">{prescLatest.doctorId ? prescLatest.doctorId.name : '' }</p> */}
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="prescribedDate"
                    className="form__Label-Heading"
                  >
                    Form Created Date
                  </label>
                  {/* <p className="form__Heading">{truncate(prescLatest.createdOn,11)}</p> */}
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="medicineType" className="form__Label-Heading">
                    Form Title
                  </label>
                  {/* <p className="form__Heading">{prescLatest.medicine_type}</p> */}
                </div>
              </div>
              <div className="py-6 form__Grid--Cols-6">
                <div className="form__Cols--Span-6">
                  <label htmlFor="medicineName" className="form__Label-Heading">
                    Question Name
                  </label>
                  {/* <p className="form__Heading">{prescLatest.medicine_name}</p> */}
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="medicineName" className="form__Label-Heading">
                    Question Type
                  </label>
                  {/* <p className="form__Heading">{prescLatest.medicine_name}</p> */}
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineDuration"
                    className="form__Label-Heading"
                  >
                    Choice Name
                  </label>
                  {/* <p className="form__Heading">{prescLatest.duration_days}/ days</p> */}
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineDuration"
                    className="form__Label-Heading"
                  >
                    Choice Name
                  </label>
                  {/* <p className="form__Heading">{prescLatest.duration_days}/ days</p> */}
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineDuration"
                    className="form__Label-Heading"
                  >
                    Choice Name
                  </label>
                  {/* <p className="form__Heading">{prescLatest.duration_days}/ days</p> */}
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineDuration"
                    className="form__Label-Heading"
                  >
                    Choice Name
                  </label>
                  {/* <p className="form__Heading">{prescLatest.duration_days}/ days</p> */}
                </div>
              </div>
              <div className="py-2 form__Grid--Cols-6">
                <div className="form__Cols--Span-6">
                  <label htmlFor="medicineName" className="form__Label-Heading">
                    Question Name
                  </label>
                  {/* <p className="form__Heading">{prescLatest.medicine_name}</p> */}
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="medicineName" className="form__Label-Heading">
                    Question Type
                  </label>
                  {/* <p className="form__Heading">{prescLatest.medicine_name}</p> */}
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineDuration"
                    className="form__Label-Heading"
                  >
                    Choice Name
                  </label>
                  {/* <p className="form__Heading">{prescLatest.duration_days}/ days</p> */}
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineDuration"
                    className="form__Label-Heading"
                  >
                    Choice Name
                  </label>
                  {/* <p className="form__Heading">{prescLatest.duration_days}/ days</p> */}
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineDuration"
                    className="form__Label-Heading"
                  >
                    Choice Name
                  </label>
                  {/* <p className="form__Heading">{prescLatest.duration_days}/ days</p> */}
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineDuration"
                    className="form__Label-Heading"
                  >
                    Choice Name
                  </label>
                  {/* <p className="form__Heading">{prescLatest.duration_days}/ days</p> */}
                </div>
              </div>
              <div className="py-4 form__Grid--Cols-6">
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineSplInstructions"
                    className="form__Label-Heading"
                  >
                    Question Name
                  </label>
                  <p className="form__Heading">
                    {/* {prescLatest.special_inst} */}
                  </p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="medicineSplInstructions"
                    className="form__Label-Heading"
                  >
                    Question Type
                  </label>
                  <p className="form__Heading">
                    {/* {prescLatest.special_inst} */}
                  </p>
                </div>
              </div>
            </div>
            {/* ): */}
            {/* <MessageBox>No latest Prescription</MessageBox> */}
            {/* } */}

            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                data-bs-dismiss="modal"
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

export default CustomFormTable;
