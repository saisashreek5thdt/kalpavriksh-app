import { CREATE_APPOINTMENT_FAIL, CREATE_APPOINTMENT_REQUEST, CREATE_APPOINTMENT_SUCCESS, ENROLMENT_PATIENT_FAIL, ENROLMENT_PATIENT_REQUEST, ENROLMENT_PATIENT_SUCCESS, GET_ALL_PATIENT_FAIL, GET_ALL_PATIENT_FORMS_FAIL, GET_ALL_PATIENT_FORMS_REQUEST, GET_ALL_PATIENT_FORMS_SUCCESS, GET_ALL_PATIENT_REQUEST, GET_ALL_PATIENT_SUCCESS, GET_APPOINTMENT_FAIL, GET_APPOINTMENT_REQUEST, GET_APPOINTMENT_SUCCESS, GET_PATIENT_DETAILS_FAIL, GET_PATIENT_DETAILS_REQUEST, GET_PATIENT_DETAILS_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, Url } from "../constant.js/PatientConstant";
import axios from 'axios'



export const patientEnrollment=(phone,name,email,dob,gender,height,weight,caretakers_name,caretakers_relation,caretakers_phone,caretakers_time,health_plan,health_plan_date,team,amount,payment_mode,payment_date,ref_id,next_payment_date)=>async(dispatch)=>{
  dispatch({type:ENROLMENT_PATIENT_REQUEST});   
  try{
    const {data} = await axios.post(`${Url}/doctors/add-patient`,{phone,name,email,dob,gender,height,weight,caretakers_name,caretakers_relation,caretakers_phone,caretakers_time,health_plan,health_plan_date,team,amount,payment_mode,payment_date,ref_id,next_payment_date})
    dispatch({type:ENROLMENT_PATIENT_SUCCESS,payload:data});
   
  }catch(error){
      console.log(error.response.data.message,'error')
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.response;
     dispatch({ type: ENROLMENT_PATIENT_FAIL, payload: message });
  }
}



export const listPatients = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PATIENT_REQUEST });
  try {    
    const { data } = await axios.get(`${Url}/doctors/get-all-patients`)      
    dispatch({ type: GET_ALL_PATIENT_SUCCESS, payload: data }); 

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_ALL_PATIENT_FAIL, payload: message });

  }
};

export const DetailsPatients = (id) => async (dispatch) => {
  dispatch({ type: GET_PATIENT_DETAILS_REQUEST });
  try {    
    const { data } = await axios.get(`${Url}/doctors/patient/${id}`)      
    dispatch({ type: GET_PATIENT_DETAILS_SUCCESS, payload: data }); 

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_PATIENT_DETAILS_FAIL, payload: message });

  }
};


export const getForms = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PATIENT_FORMS_REQUEST });
  try {    
    const { data } = await axios.get(`${Url}/forms/get-all`)      
    dispatch({ type: GET_ALL_PATIENT_FORMS_SUCCESS, payload: data }); 

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_ALL_PATIENT_FORMS_FAIL, payload: message });

  }
};


export const createAppointment=(doctorId,date)=>async(dispatch)=>{
  dispatch({type:CREATE_APPOINTMENT_REQUEST});   
  try{
    const {data} = await axios.post(`${Url}/appointments/create`,{doctorId,date})
    dispatch({type:CREATE_APPOINTMENT_SUCCESS,payload:data});
   
  }catch(error){
      console.log(error.response.data.message,'error')
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.response;
     dispatch({ type: CREATE_APPOINTMENT_FAIL, payload: message });
  }
}


export const getAppointments = () => async (dispatch) => {
  dispatch({ type: GET_APPOINTMENT_REQUEST });
  try {    
    const { data } = await axios.get(`${Url}/appointments/get-all`)      
    dispatch({ type: GET_APPOINTMENT_SUCCESS, payload: data }); 

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_APPOINTMENT_FAIL, payload: message });

  }
};
