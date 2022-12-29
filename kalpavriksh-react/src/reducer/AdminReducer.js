import { CREATE_DOCTOR_FAIL, CREATE_DOCTOR_REQUEST, CREATE_DOCTOR_RESET, CREATE_DOCTOR_SUCCESS } from "../constant.js/AdminConstant";

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
