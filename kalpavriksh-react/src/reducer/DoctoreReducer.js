import { CREATE_FORM_FAIL, CREATE_FORM_REQUEST, CREATE_FORM_RESET, CREATE_FORM_SUCCESS, CREATE_PRESC_FAIL, CREATE_PRESC_REQUEST, CREATE_PRESC_RESET, CREATE_PRESC_SUCCESS, GET_APPOINTMENT_WITH_DATE_FAIL, GET_APPOINTMENT_WITH_DATE_REQUEST, GET_APPOINTMENT_WITH_DATE_SUCCESS, GET_DOCTOR_PROFILE_FAIL, GET_DOCTOR_PROFILE_REQUEST, GET_DOCTOR_PROFILE_SUCCESS, UPDATE_PATIENT_FAIL, UPDATE_PATIENT_REQUEST, UPDATE_PATIENT_RESET, UPDATE_PATIENT_SUCCESS, UPLOAD_DIET_CHART_FAIL, UPLOAD_DIET_CHART_REQUEST, UPLOAD_DIET_CHART_RESET, UPLOAD_DIET_CHART_SUCCESS } from "../constant.js/DoctorConstant";

export const dietChartUploadReducer = (state = {}, action) => {
    switch (action.type) {
      case UPLOAD_DIET_CHART_REQUEST:
        return { loading: true };
      case UPLOAD_DIET_CHART_SUCCESS:
        return { loading: false, upload: action.payload, success: true };
      case UPLOAD_DIET_CHART_FAIL:
        return { loading: false, error: action.payload };
      case UPLOAD_DIET_CHART_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const formCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_FORM_REQUEST:
        return { loading: true };
      case CREATE_FORM_SUCCESS:
        return { loading: false, upload: action.payload, success: true };
      case CREATE_FORM_FAIL:
        return { loading: false, error: action.payload };
      case CREATE_FORM_RESET:
        return {};
      default:
        return state;
    }
  };
  

  export const prescriptionCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_PRESC_REQUEST:
        return { loading: true };
      case CREATE_PRESC_SUCCESS:
        return { loading: false, pres: action.payload, success: true };
      case CREATE_PRESC_FAIL:
        return { loading: false, error: action.payload };
      case CREATE_PRESC_RESET:
        return {};
      default:
        return state;
    }
  };

  export const doctorProfileListReducer = (state = { loading:true,profile:[] }, action) => {
    switch (action.type) {
      case GET_DOCTOR_PROFILE_REQUEST:
        return { loading: true };
      case GET_DOCTOR_PROFILE_SUCCESS:
        return { loading: false, profile: action.payload.data };
      case GET_DOCTOR_PROFILE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const patientUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_PATIENT_REQUEST:
        return { loading: true };
      case UPDATE_PATIENT_SUCCESS:
        return { loading: false,  success: true };
      case UPDATE_PATIENT_FAIL:
        return { loading: false, error: action.payload };
      case UPDATE_PATIENT_RESET:
        return {};
      default:
        return state;
    }
  };

  export const appointmentDateReducer = (state = { loading:true,count:[] }, action) => {
    switch (action.type) {
      case GET_APPOINTMENT_WITH_DATE_REQUEST:
        return { loading: true };
      case GET_APPOINTMENT_WITH_DATE_SUCCESS:
        return { loading: false, count: action.payload.data };
      case GET_APPOINTMENT_WITH_DATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };