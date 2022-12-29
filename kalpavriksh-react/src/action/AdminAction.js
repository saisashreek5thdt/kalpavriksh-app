import axios from "axios";
import { CREATE_DOCTOR_FAIL, CREATE_DOCTOR_REQUEST, CREATE_DOCTOR_SUCCESS } from "../constant.js/AdminConstant";
import { Url } from "../constant.js/PatientConstant";



  export const addDoctore=(name,role,email,phone,registration_no)=>async(dispatch)=>{
    dispatch({type:CREATE_DOCTOR_REQUEST});   
    try{
      const {data} = await axios.post(`${Url}/doctors/add-doctor`,{name,role,email,phone,registration_no})
      dispatch({type:CREATE_DOCTOR_SUCCESS,payload:data});
     
    }catch(error){
        console.log(error.response.data.message,'error')
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.response;
       dispatch({ type: CREATE_DOCTOR_FAIL, payload: message });
    }
  }
