import axios from "axios";
import { CREATE_FORM_FAIL, CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS, CREATE_PRESC_FAIL, CREATE_PRESC_REQUEST, CREATE_PRESC_SUCCESS, GET_APPOINTMENT_WITH_DATE_REQUEST, GET_APPOINTMENT_WITH_DATE_SUCCESS, GET_DOCTOR_PROFILE_FAIL, GET_DOCTOR_PROFILE_REQUEST, GET_DOCTOR_PROFILE_SUCCESS, UPDATE_PATIENT_FAIL, UPDATE_PATIENT_REQUEST, UPDATE_PATIENT_SUCCESS, UPLOAD_DIET_CHART_FAIL, UPLOAD_DIET_CHART_REQUEST, UPLOAD_DIET_CHART_SUCCESS } from "../constant.js/DoctorConstant";
import { GET_APPOINTMENT_FAIL, Url } from "../constant.js/PatientConstant";


export const uploadDietCharts=(calorie_lower,calorie_upper,ch_lower,ch_upper,protiens,fats,food_type,cuisine_type)=>async(dispatch,getState)=>{
    dispatch({type:UPLOAD_DIET_CHART_REQUEST});  
    const { doctorSignin: { doctorInfo }} = getState();

    try{
      const {data} = await axios.post(`${Url}/doctors/add-diet-chart`,{calorie_lower,calorie_upper,ch_lower,ch_upper,protiens,fats,food_type,cuisine_type},{
        headers: {Authorization: `Bearer ${doctorInfo.token}`}});    
      dispatch({type:UPLOAD_DIET_CHART_SUCCESS,payload:data});
     
    }catch(error){
        // console.log(error.response.data.message,'error')
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.response;
       dispatch({ type: UPLOAD_DIET_CHART_FAIL, payload: message });
    }
  }


  export const createForm=(form_title,questions)=>async(dispatch,getState)=>{
    dispatch({type:CREATE_FORM_REQUEST});   
    const { doctorSignin: { doctorInfo }} = getState();
    try{
      const {data} = await axios.post(`${Url}/doctors/add-form`,{form_title,questions},{
        headers: {Authorization: `Bearer ${doctorInfo.token}`}});    
      dispatch({type:CREATE_FORM_SUCCESS,payload:data});
     
    }catch(error){
        // console.log(error.response.data.message,'error')
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.response;
       dispatch({ type: CREATE_FORM_FAIL, payload: message });
    }
  }


  export const createPrescription=(patientId,medicine_type,medicine_name,morning_dose,afternoon_dose,evening_dose,frequency,duration,duration_days,special_inst)=>async(dispatch,getState)=>{
    dispatch({type:CREATE_PRESC_REQUEST});   
    const { doctorSignin: { doctorInfo }} = getState();

    try{
      const {data} = await axios.post(`${Url}/presc/add`,{patientId,medicine_type,medicine_name,morning_dose,afternoon_dose,evening_dose,frequency,duration,duration_days,special_inst},{
        headers: {Authorization: `Bearer ${doctorInfo.token}`}});    
      dispatch({type:CREATE_PRESC_SUCCESS,payload:data});
     
    }catch(error){
        // console.log(error.response.data.message,'error')
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.response;
       dispatch({ type: CREATE_PRESC_FAIL, payload: message });
    }
  }


  export const getDoctorProfile= () => async (dispatch,getState) => {
    dispatch({ type: GET_DOCTOR_PROFILE_REQUEST });
    const { doctorSignin: { doctorInfo }} = getState();
    try {    
      const { data } = await axios.get(`${Url}/profile/doctor`,{
        headers: {Authorization: `Bearer ${doctorInfo.token}`}});      
      dispatch({ type: GET_DOCTOR_PROFILE_SUCCESS, payload: data }); 
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: GET_DOCTOR_PROFILE_FAIL, payload: message });
    }
  };

  export const updatePatient=(room,id)=>async(dispatch,getState)=>{
    dispatch({type:UPDATE_PATIENT_REQUEST,room});
    const { doctorSignin: { doctorInfo }} = getState();
    try{
      const {data} = await axios.put(`${Url}/doctors/edit-patient/${id}`,room,{
        headers: {Authorization: `Bearer ${doctorInfo.token}`}});    
      dispatch({type:UPDATE_PATIENT_SUCCESS,payload:data});  
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type:UPDATE_PATIENT_FAIL, payload: message });

    }
  }

  export const getAppointmentOnDate= (date) => async (dispatch,getState) => {
    dispatch({ type: GET_APPOINTMENT_WITH_DATE_REQUEST });
    const { doctorSignin: { doctorInfo }} = getState();
    try {    
      const { data } = await axios.get(`${Url}/appointments/get-all/${date}`,{
        headers: {Authorization: `Bearer ${doctorInfo.token}`}});      
      dispatch({ type: GET_APPOINTMENT_WITH_DATE_SUCCESS, payload: data }); 
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: GET_APPOINTMENT_FAIL, payload: message });
    }
  };
  