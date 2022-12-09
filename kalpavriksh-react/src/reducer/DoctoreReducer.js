import { CREATE_FORM_FAIL, CREATE_FORM_REQUEST, CREATE_FORM_RESET, CREATE_FORM_SUCCESS, CREATE_PRESC_FAIL, CREATE_PRESC_REQUEST, CREATE_PRESC_RESET, CREATE_PRESC_SUCCESS, UPLOAD_DIET_CHART_FAIL, UPLOAD_DIET_CHART_REQUEST, UPLOAD_DIET_CHART_RESET, UPLOAD_DIET_CHART_SUCCESS } from "../constant.js/DoctorConstant";

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
