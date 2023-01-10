import { ACTIVATE_DOCTOR_FAIL, ACTIVATE_DOCTOR_REQUEST, ACTIVATE_DOCTOR_RESET, ACTIVATE_DOCTOR_SUCCESS, ACTIVATE_DTCHART_FAIL, ACTIVATE_DTCHART_REQUEST, ACTIVATE_DTCHART_RESET, ACTIVATE_DTCHART_SUCCESS, ACTIVATE_FORM_FAIL, ACTIVATE_FORM_REQUEST, ACTIVATE_FORM_RESET, ACTIVATE_FORM_SUCCESS, ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_SIGNOUT, CREATE_DOCTOR_FAIL, CREATE_DOCTOR_REQUEST, CREATE_DOCTOR_RESET, CREATE_DOCTOR_SUCCESS, DEACTIVATE_DOCTOR_FAIL, DEACTIVATE_DOCTOR_REQUEST, DEACTIVATE_DOCTOR_RESET, DEACTIVATE_DOCTOR_SUCCESS, DEACTIVATE_DTCHART_FAIL, DEACTIVATE_DTCHART_REQUEST, DEACTIVATE_DTCHART_RESET, DEACTIVATE_DTCHART_SUCCESS, DEACTIVATE_FORM_FAIL, DEACTIVATE_FORM_REQUEST, DEACTIVATE_FORM_RESET, DEACTIVATE_FORM_SUCCESS, GET_ALL_DIET_CHART_FAIL, GET_ALL_DIET_CHART_REQUEST, GET_ALL_DIET_CHART_SUCCESS, GET_ALL_DOCTORS_REQUEST, GET_ALL_DOCTORS_SUCCESS } from "../constant.js/AdminConstant";
import { GET_DOCTOR_PROFILE_SUCCESS } from "../constant.js/DoctorConstant";

  export const doctorCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_DOCTOR_REQUEST:
        return { loading: true };
      case CREATE_DOCTOR_SUCCESS:
        return { loading: false, doc: action.payload, success: true };
      case CREATE_DOCTOR_FAIL:
        return { loading: false, error: action.payload };
      case CREATE_DOCTOR_RESET:
        return {};
      default:
        return state;
    }
  };


  export const adminSigninReducer=(state={},action)=>{
    switch (action.type) {
      case ADMIN_LOGIN_REQUEST:
        return { loading: true };
      case ADMIN_LOGIN_SUCCESS:
        return {loading:false, adminDocInfo:action.payload} ;
      case ADMIN_LOGIN_FAIL:
        return { loading: false, error: action.payload };
      case ADMIN_SIGNOUT:
        return {};
      default:
        return state;
    }
  }

  export const doctorListReducer = (state = { loading:true,doctors:[] }, action) => {
    switch (action.type) {
      case GET_ALL_DOCTORS_REQUEST:
        return { loading: true };
      case GET_ALL_DOCTORS_SUCCESS:
        return { loading: false, doctors: action.payload.data };
      case GET_DOCTOR_PROFILE_SUCCESS:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const activateDoctorReducer = (state = { loading:true,doctors:[] }, action) => {
    switch (action.type) {
      case ACTIVATE_DOCTOR_REQUEST:
        return { loading: true };
      case ACTIVATE_DOCTOR_SUCCESS:
        return { loading: false, doctors: action.payload.data ,success:true};
      case ACTIVATE_DOCTOR_FAIL:
        return { loading: false, error: action.payload };
      case ACTIVATE_DOCTOR_RESET:
          return {};
      default:
        return state;
    }
  };

  
  export const deactivateDoctorReducer = (state = { loading:true,doctors:[] }, action) => {
    switch (action.type) {
      case DEACTIVATE_DOCTOR_REQUEST:
        return { loading: true };
      case DEACTIVATE_DOCTOR_SUCCESS:
        return { loading: false, doctors: action.payload.data ,success:true};
      case DEACTIVATE_DOCTOR_FAIL:
        return { loading: false, error: action.payload };
        case DEACTIVATE_DOCTOR_RESET:
          return {};
      default:
        return state;
    }
  };


  export const deitChartListReducer = (state = { loading:true,dietchart:[] }, action) => {
    switch (action.type) {
      case GET_ALL_DIET_CHART_REQUEST:
        return { loading: true };
      case GET_ALL_DIET_CHART_SUCCESS:
        return { loading: false, dietchart: action.payload.data };
      case GET_ALL_DIET_CHART_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };



  export const activateformReducer = (state = { loading:true,forms:[] }, action) => {
    switch (action.type) {
      case ACTIVATE_FORM_REQUEST:
        return { loading: true };
      case ACTIVATE_FORM_SUCCESS:
        return { loading: false, forms: action.payload.data ,success:true};
      case ACTIVATE_FORM_FAIL:
        return { loading: false, error: action.payload };
      case ACTIVATE_FORM_RESET:
          return {};
      default:
        return state;
    }
  };

  
  export const deactivateformReducer = (state = { loading:true,forms:[] }, action) => {
    switch (action.type) {
      case DEACTIVATE_FORM_REQUEST:
        return { loading: true };
      case DEACTIVATE_FORM_SUCCESS:
        return { loading: false, forms: action.payload.data ,success:true};
      case DEACTIVATE_FORM_FAIL:
        return { loading: false, error: action.payload };
        case DEACTIVATE_FORM_RESET:
          return {};
      default:
        return state;
    }
  };


  export const activateDtChartReducer = (state = { loading:true,chart:[] }, action) => {
    switch (action.type) {
      case ACTIVATE_DTCHART_REQUEST:
        return { loading: true };
      case ACTIVATE_DTCHART_SUCCESS:
        return { loading: false, doctors: action.payload.data ,success:true};
      case ACTIVATE_DTCHART_FAIL:
        return { loading: false, error: action.payload };
      case ACTIVATE_DTCHART_RESET:
          return {};
      default:
        return state;
    }
  };

  
  export const deactivateDtChartReducer = (state = { loading:true,chart:[] }, action) => {
    switch (action.type) {
      case DEACTIVATE_DTCHART_REQUEST:
        return { loading: true };
      case DEACTIVATE_DTCHART_SUCCESS:
        return { loading: false, doctors: action.payload.data ,success:true};
      case DEACTIVATE_DTCHART_FAIL:
        return { loading: false, error: action.payload };
        case DEACTIVATE_DTCHART_RESET:
          return {};
      default:
        return state;
    }
  };