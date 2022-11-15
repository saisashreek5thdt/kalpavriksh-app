import { UPLOAD_DIET_CHART_FAIL, UPLOAD_DIET_CHART_REQUEST, UPLOAD_DIET_CHART_RESET, UPLOAD_DIET_CHART_SUCCESS } from "../constant.js/DoctorConstant";

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
  

