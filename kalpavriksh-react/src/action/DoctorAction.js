import axios from "axios";
import { UPLOAD_DIET_CHART_FAIL, UPLOAD_DIET_CHART_REQUEST, UPLOAD_DIET_CHART_SUCCESS } from "../constant.js/DoctorConstant";
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



