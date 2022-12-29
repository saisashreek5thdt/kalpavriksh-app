import {
  CREATE_APPOINTMENT_FAIL,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_RESET,
  CREATE_APPOINTMENT_SUCCESS,
  ENROLMENT_PATIENT_FAIL,
  ENROLMENT_PATIENT_REQUEST,
  ENROLMENT_PATIENT_RESET,
  ENROLMENT_PATIENT_SUCCESS,
  GET_ALL_PATIENT_FAIL,
  GET_ALL_PATIENT_FORMS_FAIL,
  GET_ALL_PATIENT_FORMS_REQUEST,
  GET_ALL_PATIENT_FORMS_SUCCESS,
  GET_ALL_PATIENT_REQUEST,
  GET_ALL_PATIENT_SUCCESS,
  GET_APPOINTMENT_FAIL,
  GET_APPOINTMENT_REQUEST,
  GET_APPOINTMENT_SUCCESS,
  GET_PATIENT_DETAILS_FAIL,
  GET_PATIENT_DETAILS_REQUEST,
  GET_PATIENT_DETAILS_SUCCESS,
  GET_PRESCRIPTIONT_FAIL,
  GET_PRESCRIPTION_REQUEST,
  GET_PRESCRIPTION_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SENDOTP_FAIL,
  SENDOTP_REQUEST,
  SENDOTP_RESET,
  SENDOTP_SUCCESS,
} from "../constant.js/PatientConstant";

export const enrollmentPatientReducer = (state = {}, action) => {
  switch (action.type) {
    case ENROLMENT_PATIENT_REQUEST:
      return { loading: true };
    case ENROLMENT_PATIENT_SUCCESS:
      return { loading: false, enrolment: action.payload, success: true };
    case ENROLMENT_PATIENT_FAIL:
      return { loading: false, error: action.payload };
    case ENROLMENT_PATIENT_RESET:
      return {};
    default:
      return state;
  }
};


export const patientListReducer = (state = { loading:true,patients:[] }, action) => {
  switch (action.type) {
    case GET_ALL_PATIENT_REQUEST:
      return { loading: true };
    case GET_ALL_PATIENT_SUCCESS:
      return { loading: false, patients: action.payload.data };
    case GET_ALL_PATIENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const patientDetailsReducer = (state = { loading:true,patient:[] }, action) => {
  switch (action.type) {
    case GET_PATIENT_DETAILS_REQUEST:
      return { loading: true };
    case GET_PATIENT_DETAILS_SUCCESS:
      return { loading: false, patient: action.payload };
    case GET_PATIENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const patientFormListReducer = (state = { loading:true,forms:[] }, action) => {
  switch (action.type) {
    case GET_ALL_PATIENT_FORMS_REQUEST:
      return { loading: true };
    case GET_ALL_PATIENT_FORMS_SUCCESS:
      return { loading: false, forms: action.payload.data };
    case GET_ALL_PATIENT_FORMS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const appointmentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT_REQUEST:
      return { loading: true };
    case CREATE_APPOINTMENT_SUCCESS:
      return { loading: false,  success: true };
    case CREATE_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_APPOINTMENT_RESET:
      return {};
    default:
      return state;
  }
};


export const appointmentListReducer = (state = { loading:true,appointment:[] }, action) => {
  switch (action.type) {
    case GET_APPOINTMENT_REQUEST:
      return { loading: true };
    case GET_APPOINTMENT_SUCCESS:
      return { loading: false, appointment: action.payload.data };
    case GET_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const presctListReducer = (state = { loading:true,presc:[] }, action) => {
  switch (action.type) {
    case GET_PRESCRIPTION_REQUEST:
      return { loading: true };
    case GET_PRESCRIPTION_SUCCESS:
      return { loading: false, presc: action.payload.data };
    case GET_PRESCRIPTIONT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const patientOtpReducer = (state = { loading:true,otp:[] }, action) => {
  switch (action.type) {
    case SENDOTP_REQUEST:
      return { loading: true };
    case SENDOTP_SUCCESS:
      return { loading: false, presc: action.payload.data,success:true };
    case SENDOTP_FAIL:
      return { loading: false, error: action.payload };
    case SENDOTP_RESET:
      return {}  
    default:
      return state;
  }
};