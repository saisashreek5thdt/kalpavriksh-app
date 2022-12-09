import axios from "axios";
import { CREATE_FORM_FAIL, CREATE_FORM_REQUEST, CREATE_FORM_SUCCESS, CREATE_PRESC_FAIL, CREATE_PRESC_REQUEST, CREATE_PRESC_SUCCESS, UPLOAD_DIET_CHART_FAIL, UPLOAD_DIET_CHART_REQUEST, UPLOAD_DIET_CHART_SUCCESS } from "../constant.js/DoctorConstant";
import { Url } from "../constant.js/PatientConstant";


export const uploadDietCharts=(calorie_lower,calorie_upper,ch_lower,ch_upper,protiens,fats,food_type,cuisine_type)=>async(dispatch)=>{
    dispatch({type:UPLOAD_DIET_CHART_REQUEST});   
    try{
      const {data} = await axios.post(`${Url}/doctors/add-diet-chart`,{calorie_lower,calorie_upper,ch_lower,ch_upper,protiens,fats,food_type,cuisine_type})
      dispatch({type:UPLOAD_DIET_CHART_SUCCESS,payload:data});
     
    }catch(error){
        console.log(error.response.data.message,'error')
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.response;
       dispatch({ type: UPLOAD_DIET_CHART_FAIL, payload: message });
    }
  }


  export const createForm=(patientId,question_title,questions)=>async(dispatch)=>{
    dispatch({type:CREATE_FORM_REQUEST});   
    try{
      const {data} = await axios.post(`${Url}/doctors/add-form`,{patientId,question_title,questions})
      dispatch({type:CREATE_FORM_SUCCESS,payload:data});
     
    }catch(error){
        console.log(error.response.data.message,'error')
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.response;
       dispatch({ type: CREATE_FORM_FAIL, payload: message });
    }
  }


  export const createPrescription=(patientId,medicine_type,medicine_name,morning_dose,afternoon_dose,evening_dose,frequency,duration,duration_days,special_inst)=>async(dispatch)=>{
    dispatch({type:CREATE_PRESC_REQUEST});   
    try{
      const {data} = await axios.post(`${Url}/presc/add`,{patientId,medicine_type,medicine_name,morning_dose,afternoon_dose,evening_dose,frequency,duration,duration_days,special_inst})
      dispatch({type:CREATE_PRESC_SUCCESS,payload:data});
     
    }catch(error){
        console.log(error.response.data.message,'error')
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.response;
       dispatch({ type: CREATE_PRESC_FAIL, payload: message });
    }
  }
