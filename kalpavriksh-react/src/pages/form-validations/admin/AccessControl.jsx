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
  editDoctor
} from "../../../action/AdminAction";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";
import {
  ACTIVATE_DOCTOR_RESET,
  CREATE_DOCTOR_RESET,
  DEACTIVATE_DOCTOR_RESET,
} from "../../../constant.js/AdminConstant";
import { json } from "react-router-dom";

const AccessControl = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
  const [regId, setRegId] = useState("");
  const [docName, setDocName] = useState('');
  const [docRole, setDocRole] = useState('');
  const [docEmail, setDocEmail] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [docRegId, setDocRegId] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [image, setImage] = useState(null);
  const [editDocId, setEditDocId] = useState("")
  const [toggle, setToggle] = useState(true)
  const dispatch = useDispatch();
  const doctorList = useSelector((state) => state.doctorList);
  const { loading, error, doctors } = doctorList;
  const [formErrors, setFormErrors] = useState({});

  const createDoctor = useSelector((state) => state.doctorCreate)
  const updatedDoctor = useSelector((state) => state.updatedDoctor)
  const { error: updatedDoctorError } = updatedDoctor
  const { success, error: errorCreate,loading:createDocLoading } = createDoctor

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
  function handleFileChange(event) {
    const file = event.target.files[0];
    setImage(file);
  
    const reader = new FileReader();
    reader.onloadend = () => {
      const blob = new Blob([reader.result], {
        type: file.type,
      });
      const finalFile = new File([blob], file.name);
      setProfileImage(finalFile);
    };
    reader.readAsArrayBuffer(file);
  }
  
  console.log('image',profileImage)
  const validateForm = () => {
    let errors = {};

    if (!name.trim()) {
      errors.name = '*Name is required';
    } else {
      errors.name = ''
    }

    if (!role.trim()) {
      errors.role = '*Role is required';
    } else {
      errors.role = ''
    }
    if (!email) {
      errors.email = '*Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = '*Invalid email address';
    }
    if (!number || JSON.stringify(number).trim()=='') {
      errors.number = '*Number is required';
    } else {
      errors.number = ''
    }


    return errors;
  };
  const editDocHandler = (e) => {
    e.preventDefault();

    const errors = validateForm();
    console.log("errors", errors)
    console.log("test", Object.values(errors).some((e) => e.length > 0))
    if (Object.values(errors).some((e) => e.length > 0)) {
      setFormErrors(errors);
    } else {
      dispatch(editDoctor(editDocId, name, role, email, number, regId,profileImage,image))
      setEditDocId('')
    }
  }

  const validateCreateEmployeeForm = () => {
    let errors = {};
  
    if (!docName.trim()) {
      errors.docName = '*Name is required';
    } else {
      errors.docName = ''
    }
  
    if (!docRole.trim()) {
      errors.docRole = '*Role is required';
    } else {
      errors.docRole = ''
    }
    if (!docEmail) {
      errors.docEmail = '*Email is required';
    } else if (!/\S+@\S+\.\S+/.test(docEmail)) {
      errors.docEmail = '*Invalid email address';
    }
    if (!docNumber || JSON.stringify(docNumber).trim()=='') {
      errors.docNumber = '*Number is required';
    } else {
      errors.docNumber = ''
    }
  
    return errors;
  };
  

  const submitHandler = (e) => {
    e.preventDefault();
    const errors = validateCreateEmployeeForm();
    if (Object.values(errors).some((e) => e.length > 0)) {
      setFormErrors(errors);
    } else {
      dispatch(addDoctore(docName, docRole, docEmail, docNumber, docRegId,profileImage,image));
    }
  };

  useEffect(() => {
    if (updatedDoctorError === false) {
      dispatch(getAllDoctors());
      Swal.fire({
        icon: "success",
        text: "doctor updated successfully",
      });
      setName('')
      setRole('')
      setEmail('')
      setNumber('')
      setRegId('')
    }
    else if (updatedDoctorError) {
      Swal.fire({
        icon: "error",
        text: "Failed to update doctor",
      });
      setName('')
      setRole('')
      setEmail('')
      setNumber('')
      setRegId('')
    }
  }, [updatedDoctorError])
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

    if (success) {
      dispatch({ type: CREATE_DOCTOR_RESET });
      Swal.fire({
        icon: "success",
        text: "Doctor created successfully",
      });
      setDocName("");
      setDocRole("");
      setDocEmail("");
      setDocNumber("");
      setDocRegId("");
    }
    if (errorCreate) {
      dispatch({ type: CREATE_DOCTOR_RESET });
      Swal.fire({
        icon: "error",
        text: errorCreate,
      });
      setDocName("");
      setDocRole("");
      setDocEmail("");
      setDocNumber("");
      setDocRegId("");
    }

  }, [dispatch, successActivate, successDeActivate, success, errorCreate]);
  const createDoctorState = () =>{
    setDocName("");
    setDocRole("");
    setDocEmail("");
    setDocNumber("");
    setDocRegId("");
  }
  useEffect(()=>{
    createDoctorState()
  },[toggle])
  const updateDoctorState = (doctor) => {
    setName(doctor.name || '');
    setRole(doctor.role || '');
    setEmail(doctor.email || '');
    setNumber(doctor.phone || '');
    setRegId(doctor.registration_no || '');
  };
  useEffect(() => {
    if(doctors){
    const editDoc = doctors?.find((doc) => doc._id === editDocId);
  if (editDoc) {
    updateDoctorState(editDoc);
  }
}
  }, [editDocId,toggle])
  const deActivate = (id, e) => {
    console.log(e, 'jey');

  };
  const activate = (state, id) => {
    console.log(state, id, 'hii');
    if (state === 'De-Active') {
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
    } else if (state === 'Active') {
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

  console.log("id", editDocId)

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
            onClick={()=>{
              setToggle(!toggle)
              setFormErrors({})}}
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
                      value={docName}
                      required
                      onChange={(e) => setDocName(e.target.value)}
                      type="text"
                      name="employee-name"
                      id="employee-name"
                      autoComplete="given-name"
                      className="form__Input"
                    />
                    {formErrors.docName && <div className="text-red-600 text-xs">{formErrors.docName}</div>}
                  </div>
                  <div className="form__Cols--Span-6">
                    <label htmlFor="role" className="form__Label-Heading">
                      Select Role
                    </label>
                    <select
                      value={docRole}
                      required
                      onChange={(e) => setDocRole(e.target.value)}
                      id="role"
                      name="role"
                      autoComplete="role-name"
                      className="form__Select"
                    >
                      <option>Select Role</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Junior Doctor">Junior Doctor</option>
                      <option value="Dietitian">Dietitian</option>
                    </select>
                    {formErrors.docRole && <div className="text-red-600 text-xs">{formErrors.docRole}</div>}
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
                      onChange={(e) => setDocEmail(e.target.value)}
                      type="email"
                      name="employee-email"
                      id="employee-email"
                      autoComplete="given-name"
                      className="form__Input"
                      value={docEmail}
                    />
                     {formErrors.docEmail && <div className="text-red-600 text-xs">{formErrors.docEmail}</div>}
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
                      onChange={(e) => setDocNumber(e.target.value)}
                      type="number"
                      name="employee-phone"
                      id="employee-phone"
                      autoComplete="given-name"
                      className="form__Input"
                      value={docNumber}
                    />
                       {formErrors.docNumber && <div className="text-red-600 text-xs">{formErrors.docNumber}</div>}
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
                      onChange={(e) => setDocRegId(e.target.value)}
                      type="text"
                      name="employee-regno"
                      id="employee-regno"
                      autoComplete="given-name"
                      className="form__Input"
                      value={docRegId}
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
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              <div className="modal__Footer">
                <button
                  type="button"
                  className="modal__Btn--Red"
                  data-bs-dismiss="modal"
                //  onClick="$('#modal_id').modal('hide')"
                >
                  Cancel
                </button>
                <button onClick={submitHandler}
                   data-bs-dismiss={!Object.values(validateCreateEmployeeForm()).some((e) => e.length > 0)  && 'modal'}
                  className="modal__Btn--Teal">
                  Create &amp; Save Employee
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="editEmployee"
        tabIndex="-1"
        aria-labelledby="editEmployeeLabel"
        aria-hidden="true"
      >
        <form >
          <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 className="modal__Heading" id="editEmployeeLabel">
                  Update Employee
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
                    {formErrors.name && <div className="text-red-600 text-xs">{formErrors.name}</div>}
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
                    {formErrors.role && <div className="text-red-600 text-xs">{formErrors.role}</div>}
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
                    {formErrors.email && <div className="text-red-600 text-xs">{formErrors.email}</div>}
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
                      type="number"
                      name="employee-phone"
                      id="employee-phone"
                      autoComplete="given-name"
                      className="form__Input"
                      value={number}
                    />
                    {formErrors.number && <div className="text-red-600 text-xs">{formErrors.number}</div>}
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
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              <div className="modal__Footer">
                <button
                  type="button"
                  className="modal__Btn--Red"
                  data-bs-dismiss="modal"
                //onClick="$('#modal_id').modal('hide')"
                >
                  Cancel
                </button>
                <button onClick={editDocHandler}
                  data-bs-dismiss={!Object.values(validateForm()).some((e) => e.length > 0) && 'modal'}
                  className="modal__Btn--Teal">
                  UPDATE
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
                  <td className="table__Body--Row_Data"> {new Date(doc?.createdAt || doc?.createdOn).toLocaleString().substring(0, 10)}</td>
                  <td className="table__Body--Row_Data">
                    <select
                      id="status"
                      name="status"
                      autoComplete="status-name"
                      className="form__Select"
                      onChange={() => activate(doc.status, doc._id)}
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
                      onClick={() =>{
                        setFormErrors({});
                        setEditDocId(doc._id)
                        setToggle(!toggle)
                        }}

                      className="table__Body--Status_Icons"
                      data-bs-toggle="modal"
                      data-bs-target="#editEmployee"
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