import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  activateDoctor,
  addDoctore,
  deactivateDoctor,
  deactivateeDoctor,
  getAllDoctors,
} from "../../../action/AdminAction";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";
import {
  ACTIVATE_DOCTOR_RESET,
  CREATE_DOCTOR_RESET,
  DEACTIVATE_DOCTOR_RESET,
} from "../../../constant.js/AdminConstant";

const AccessControl = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [regId, setRegId] = useState("");
  const dispatch = useDispatch();
  const doctorList = useSelector((state) => state.doctorList);
  const { loading, error, doctors } = doctorList;
  const createDoctor=useSelector((state)=>state.doctorCreate)
  const {success,error:errorCreate}=createDoctor

  const activateDoctorVariables = useSelector((state) => state.activateDoctor);
  const {
    loading: loadingActivate,
    error: errorActivate,
    success: successActivate,
  } = activateDoctorVariables;
  const deactivateDoctorVariables = useSelector(
    (state) => state.deactivateDoctor
  );
  const {
    loading: loadingDeActivate,
    error: errorDeActivate,
    success: successDeActivate,
  } = deactivateDoctorVariables;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addDoctore(name, role, email, number, regId));
  };

  useEffect(() => {
    dispatch(getAllDoctors());
    if (successActivate) {
      dispatch({ type: ACTIVATE_DOCTOR_RESET });
      Swal.fire({
        icon: "success",
        text: "activated successfully",
      });
    }
    if (successDeActivate) {
      dispatch({ type: DEACTIVATE_DOCTOR_RESET });
      Swal.fire({
        icon: "success",
        text: "Deactivated successfully",
      });
    }

    if(success){
      dispatch({type:CREATE_DOCTOR_RESET})
      Swal.fire({
        icon: "success",
        text: "Doctor Created successfully",
      });
      setName('')
      setRole('')
      setEmail('')
      setNumber('')
      setRegId('')
    }
    if(errorCreate){
      dispatch({type:CREATE_DOCTOR_RESET})
      Swal.fire({
        icon: "error",
        text: errorCreate,
      });
      setName('')
      setRole('')
      setEmail('')
      setNumber('')
      setRegId('')
    }
  }, [dispatch, successActivate, successDeActivate,success,errorCreate]);


  const deActivate = (id,e) => {
    console.log(e,'jey');
    
  };
  const activate = (state,id) => {
    console.log(state,id,'hii');
    if(state === 'De-Active'){
   Swal.fire({
      title: "Do you want to activate user?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(activateDoctor(id));
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    }else if(state === 'Active'){
   Swal.fire({
      title: "Do you want to deactivate user?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deactivateDoctor(id));
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    }
 
  };



  return (
    <>
      <div className="card__Container--Start">
        <div className="card__Block">
          <h5 className="card__Heading">
            Add Employee
            <span className="card__Heading--Span card__Bg--Green">New</span>
          </h5>
          <p className="card__Info">
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
          <button
            type="button"
            className="card__Btn card__Bg--Green card__Btn--Bg-Green"
            data-bs-toggle="modal"
            data-bs-target="#createEmployee"
          >
            Create
          </button>
        </div>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="createEmployee"
        tabIndex="-1"
        aria-labelledby="createEmployeeLabel"
        aria-hidden="true"
      >
        <form >
          <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 className="modal__Heading" id="createEmployeeLabel">
                  Employee Creation
                </h5>
                <button
                  type="button"
                  className="modal__Btn--Close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal__Body">
                <div className="form__Grid--Rows-none">
                  <div className="form__Cols--Span-6">
                    <label
                      htmlFor="employee-name"
                      className="form__Label-Heading"
                    >
                      Enter Employee Name
                    </label>
                    <input
                     value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="employee-name"
                      id="employee-name"
                      autoComplete="given-name"
                      className="form__Input"
                    />
                  </div>
                  <div className="form__Cols--Span-6">
                    <label htmlFor="role" className="form__Label-Heading">
                      Select Role
                    </label>
                    <select
                    value={role}
                      required
                      onChange={(e) => setRole(e.target.value)}
                      id="role"
                      name="role"
                      autoComplete="role-name"
                      className="form__Select"
                    >
                      <option>Select Role</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Junior Doctor">Junior Doctor</option>
                      <option value="Dietitian">Dietitian</option>
                      {/* <option value="role4">Role 4</option> */}
                    </select>
                  </div>
                  <div className="form__Cols--Span-6">
                    <label
                      htmlFor="employee-email"
                      className="form__Label-Heading"
                    >
                      Enter Employee Email
                    </label>
                    <input
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="employee-email"
                      id="employee-email"
                      autoComplete="given-name"
                      className="form__Input"
                      value={email}
                    />
                  </div>
                  <div className="form__Cols--Span-6">
                    <label
                      htmlFor="employee-phone"
                      className="form__Label-Heading"
                    >
                      Enter Employee Phone Number
                    </label>
                    <input
                      required
                      onChange={(e) => setNumber(e.target.value)}
                      type="tel"
                      name="employee-phone"
                      id="employee-phone"
                      autoComplete="given-name"
                      className="form__Input"
                      value={number}
                    />
                  </div>
                  <div className="form__Cols--Span-6">
                    <label
                      htmlFor="employee-regno"
                      className="form__Label-Heading"
                    >
                      Enter Employee Registration No. (Optional)
                    </label>
                    <input
                      required
                      onChange={(e) => setRegId(e.target.value)}
                      type="text"
                      name="employee-regno"
                      id="employee-regno"
                      autoComplete="given-name"
                      className="form__Input"
                      value={regId}
                    />
                  </div>
                  <div className="form__Cols--Span-6">
                    <label
                      htmlFor="appointment-date"
                      className="form__Label-Heading"
                    >
                      Select Employee Photo
                    </label>
                    <input
                      type="file"
                      name="appointment-date"
                      id="appointment-date"
                      autoComplete="given-name"
                      className="form__Input"
                    />
                  </div>
                </div>
              </div>
              <div className="modal__Footer">
                <button
                  type="button"
                  className="modal__Btn--Red"
                  // data-bs-dismiss="modal"
                  onClick="$('#modal_id').modal('hide')"
                >
                  Cancel
                </button>
                <button onClick={submitHandler} data-bs-dismiss="modal" className="modal__Btn--Teal">
                  Create &amp; Save Employee
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="my-10">
        <table className="table__Container">
          <thead className="table__Head">
            <tr>
              <th className="table__Head--Text">Sl No.</th>
              <th className="table__Head--Text">Employee Name</th>
              <th className="table__Head--Text">Role</th>
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
            doctors &&
            doctors.map((doc, index) => (
              <tbody className="divide-y divide-gray-100" key={doc._id}>
                <tr className="table__Body--Row">
                  <td className="table__Body--Row_Data">{index + 1}</td>
                  <td className="table__Body--Row_Data">{doc.name}</td>
                  <td className="table__Body--Row_Data">{doc.role}</td>
                  <td className="table__Body--Row_Data">11-10-2022</td>
                  <td className="table__Body--Row_Data">
                    <select
                      id="status"
                      name="status"
                      autoComplete="status-name"
                      className="form__Select"
                      onChange={()=>activate(doc.status,doc._id)}
                    >
                      <option>{doc.status}</option>
                      {doc.status === "Active" ? (
                        <option                    
                         >
                          De-Active
                        </option>
                      ) : doc.status === "De-Active" ? (
                        <>
                          <option
                           >
                            Active
                          </option>
                        </>
                      ) : (
                        ""
                      )}
                    </select>
                  </td>
                  <td className="table__Body--Row_Data">
                    <FiEdit
                      className="table__Body--Status_Icons"
                      data-bs-toggle="modal"
                      data-bs-target="#createEmployee"
                    />
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </table>
      </div>
    </>
  );
};

export default AccessControl;
