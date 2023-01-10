import { CREATE_APPOINTMENT_FAIL, CREATE_APPOINTMENT_REQUEST, CREATE_APPOINTMENT_SUCCESS, CREATE_OBSERVATION_FAIL, CREATE_OBSERVATION_REQUEST, CREATE_OBSERVATION_SUCCESS, DOCTOR_LOGIN_SUCCESS, DOCTOR_SIGNOUT, ENROLMENT_PATIENT_FAIL, ENROLMENT_PATIENT_REQUEST, ENROLMENT_PATIENT_SUCCESS, GET_ALL_PATIENT_FAIL, GET_ALL_PATIENT_FORMS_FAIL, GET_ALL_PATIENT_FORMS_REQUEST, GET_ALL_PATIENT_FORMS_SUCCESS, GET_ALL_PATIENT_REQUEST, GET_ALL_PATIENT_SUCCESS, GET_APPOINTMENT_FAIL, GET_APPOINTMENT_REQUEST, GET_APPOINTMENT_SUCCESS, GET_LATEST_DIET_CHART_FAIL, GET_LATEST_DIET_CHART_REQUEST, GET_LATEST_DIET_CHART_SUCCESS, GET_LATEST_PRESCRIPTIONT_FAIL, GET_LATEST_PRESCRIPTION_REQUEST, GET_LATEST_PRESCRIPTION_SUCCESS, GET_OBSERVATION_FAIL, GET_OBSERVATION_REQUEST, GET_OBSERVATION_SUCCESS, GET_PATIENT_DETAILS_FAIL, GET_PATIENT_DETAILS_REQUEST, GET_PATIENT_DETAILS_SUCCESS, GET_PATIENT_PROFILE_FAIL, GET_PATIENT_PROFILE_REQUEST, GET_PATIENT_PROFILE_SUCCESS, GET_PRESCRIPTIONT_FAIL, GET_PRESCRIPTION_REQUEST, GET_PRESCRIPTION_SUCCESS, PATIENT_LOGIN_FAIL, PATIENT_LOGIN_REQUEST, PATIENT_LOGIN_SUCCESS, PATIENT_SIGNOUT, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, SENDOTP_FAIL, SENDOTP_REQUEST, SENDOTP_SUCCESS, SUBMIT_FORM_FAIL, SUBMIT_FORM_REQUEST, SUBMIT_FORM_SUCCESS, Url, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constant.js/PatientConstant";
import axios from 'axios'



export const patientEnrollment=(phone,name,email,dob,gender,height,weight,caretakers_name,caretakers_relation,caretakers_phone,caretakers_time,doctors,health_plan_date,team,amount,payment_mode,payment_date,ref_id,next_payment_date)=>async(dispatch,getState)=>{
  dispatch({type:ENROLMENT_PATIENT_REQUEST});   
  const { doctorSignin: { doctorInfo }} = getState();

  try{
    const {data} = await axios.post(`${Url}/doctors/add-patient`,{phone,name,email,dob,gender,height,weight,caretakers_name,caretakers_relation,caretakers_phone,caretakers_time,doctors,health_plan_date,team,amount,payment_mode,payment_date,ref_id,next_payment_date},{
      headers: {
        Authorization: `Bearer ${doctorInfo.token}`,
      },
    });
    dispatch({type:ENROLMENT_PATIENT_SUCCESS,payload:data});
   
  }catch(error){
      // console.log(error.response.data.message,'error')
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.response;
     dispatch({ type: ENROLMENT_PATIENT_FAIL, payload: message });
  }
}



export const listPatients = () => async (dispatch,getState) => {
  dispatch({ type: GET_ALL_PATIENT_REQUEST });
  const { doctorSignin: { doctorInfo }} = getState();
  // console.log(doctorInfo,'infoss');    
  try {    
    const { data } = await axios.get(`${Url}/doctors/get-all-patients`,{
      headers: {
        Authorization: `Bearer ${doctorInfo.token}`,
      },
    });
    dispatch({ type: GET_ALL_PATIENT_SUCCESS, payload: data }); 

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_ALL_PATIENT_FAIL, payload: message });

  }
};

export const DetailsPatients = (id) => async (dispatch,getState) => {
  dispatch({ type: GET_PATIENT_DETAILS_REQUEST });
  const { doctorSignin: { doctorInfo }} = getState();

  try {    
    const { data } = await axios.get(`${Url}/doctors/patient/${id}`,{
      headers: {
        Authorization: `Bearer ${doctorInfo.token}`,
      },
    });      
    dispatch({ type: GET_PATIENT_DETAILS_SUCCESS, payload: data }); 

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_PATIENT_DETAILS_FAIL, payload: message });

  }
};


export const getForms = (user) => async (dispatch,getState) => {
  dispatch({ type: GET_ALL_PATIENT_FORMS_REQUEST });
  const { patientSignin: { patientInfo }} = getState();
  const { adminSignin: { adminDocInfo }} = getState();


  try {    
    if(user=== 'admin'){
      const { data } = await axios.get(`${Url}/forms/get-all`,{
        headers: {
          Authorization: `Bearer ${adminDocInfo.token}`,
        },
      });  
       dispatch({ type: GET_ALL_PATIENT_FORMS_SUCCESS, payload: data }); 
    }else{
      const { data } = await axios.get(`${Url}/forms/get-all`,{
        headers: {
          Authorization: `Bearer ${patientInfo.token}`,
        },
      });  
       dispatch({ type: GET_ALL_PATIENT_FORMS_SUCCESS, payload: data }); 
    }

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_ALL_PATIENT_FORMS_FAIL, payload: message });

  }
};


export const createAppointment=(doctorId,date)=>async(dispatch,getState)=>{
  dispatch({type:CREATE_APPOINTMENT_REQUEST});   
  const { patientSignin: { patientInfo }} = getState();
  try{
    const {data} = await axios.post(`${Url}/appointments/create`,{doctorId,date},{
      headers: {
        Authorization: `Bearer ${patientInfo.token}`,
      },
    });      
    dispatch({type:CREATE_APPOINTMENT_SUCCESS,payload:data});  
  }catch(error){
      // console.log(error.response.data.message,'error')
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.response;
     dispatch({ type: CREATE_APPOINTMENT_FAIL, payload: message });
  }
}


export const getAppointments = (user) => async (dispatch,getState) => {
  dispatch({ type: GET_APPOINTMENT_REQUEST });
  const { doctorSignin: { doctorInfo }} = getState();
  const { patientSignin: { patientInfo }} = getState();
  

  try {    
    if(user ==='doctor'){
      const { data } = await axios.get(`${Url}/appointments/get-all`,{
        headers: {
          Authorization: `Bearer ${doctorInfo.token}`,
        },
      });      
      dispatch({ type: GET_APPOINTMENT_SUCCESS, payload: data }); 
    }else{
      const { data } = await axios.get(`${Url}/appointments/get-all`,{
        headers: {
          Authorization: `Bearer ${patientInfo.token}`,
        },
      });      
      dispatch({ type: GET_APPOINTMENT_SUCCESS, payload: data }); 
    }
   

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_APPOINTMENT_FAIL, payload: message });

  }
};


export const getPrescriptions = () => async (dispatch,getState) => {
  dispatch({ type: GET_PRESCRIPTION_REQUEST });
  const { patientSignin: { patientInfo }} = getState();

  try {    
    const { data } = await axios.get(`${Url}/presc/get-all`,{
      headers: {
        Authorization: `Bearer ${patientInfo.token}`,
      },
    });      
    dispatch({ type: GET_PRESCRIPTION_SUCCESS, payload: data }); 

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_PRESCRIPTIONT_FAIL, payload: message });

  }
};


export const patientOtp =(email,user)=>async(dispatch)=>{
  dispatch({type:SENDOTP_REQUEST,payload:{email}});
  try{
    const {data}= await axios.post(`${Url}/auth/login`,{email,user})
    dispatch({type:SENDOTP_SUCCESS,payload:data});
    // localStorage.setItem('adminDocInfo', JSON.stringify(data));
  }catch(error){
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
     dispatch({ type: SENDOTP_FAIL, payload: message })
  }
}

export const patientLogin =(email,user,otp)=>async(dispatch)=>{
  dispatch({type:USER_LOGIN_REQUEST,payload:{email}});
  try{
    const {data}= await axios.post(`${Url}/auth/submit-otp`,{email,user,otp})
    if(user =='doctor'){
      dispatch({type:DOCTOR_LOGIN_SUCCESS,payload:data});
      // console.log(data.token,'dctrt');
      localStorage.setItem('doctorInfo', JSON.stringify(data));

    }else if(user =='patient'){
     dispatch({type:PATIENT_LOGIN_SUCCESS,payload:data});
      // console.log(data.token,'ptt');
      localStorage.setItem('patientInfo', JSON.stringify(data));
    }    
  }catch(error){
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
     dispatch({ type: USER_LOGIN_FAIL, payload: message })
  }
}


export const doctorSignout = () => (dispatch) => {
  localStorage.removeItem("doctorInfo");
  dispatch({ type: DOCTOR_SIGNOUT });
};

export const patientSignout = () => (dispatch) => {
  localStorage.removeItem("patientInfo");
  dispatch({ type: PATIENT_SIGNOUT });
};

export const listObservation = (id) => async (dispatch,getState) => {
  dispatch({ type: GET_OBSERVATION_REQUEST });
  const { patientSignin: { patientInfo }} = getState();
  try {    
    const { data } = await axios.get(`${Url}/observations`,{
      headers: {Authorization: `Bearer ${patientInfo.token}`}});      
    dispatch({ type: GET_OBSERVATION_SUCCESS, payload: data }); 
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_OBSERVATION_FAIL, payload: message });
  }
};

export const createObservations=(desc)=>async(dispatch,getState)=>{
  dispatch({type:CREATE_OBSERVATION_REQUEST});   
  const { patientSignin: { patientInfo }} = getState();
  try{
    const {data} = await axios.post(`${Url}/observations`,{desc},{
      headers: {
        Authorization: `Bearer ${patientInfo.token}`,
      },
    });
    dispatch({type:CREATE_OBSERVATION_SUCCESS,payload:data});  
  }catch(error){
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.response;
     dispatch({ type: CREATE_OBSERVATION_FAIL, payload: message });
  }
}


export const getPatientProfile= () => async (dispatch,getState) => {
  dispatch({ type: GET_PATIENT_PROFILE_REQUEST });
  const { patientSignin: { patientInfo }} = getState();
  try {    
    const { data } = await axios.get(`${Url}/profile/patient`,{
      headers: {Authorization: `Bearer ${patientInfo.token}`}});      
    dispatch({ type: GET_PATIENT_PROFILE_SUCCESS, payload: data }); 
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_PATIENT_PROFILE_FAIL, payload: message });
  }
};


export const submitForm=(doctorId,date)=>async(dispatch,getState)=>{
  dispatch({type:SUBMIT_FORM_REQUEST});   
  const { patientSignin: { patientInfo }} = getState();
  try{
    const {data} = await axios.post(`${Url}/forms/submit-form`,{doctorId,date},{
      headers: {
        Authorization: `Bearer ${patientInfo.token}`,
      },
    });      
    dispatch({type:SUBMIT_FORM_SUCCESS,payload:data});  
  }catch(error){
      // console.log(error.response.data.message,'error')
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.response;
     dispatch({ type: SUBMIT_FORM_FAIL, payload: message });
  }
}



export const getLatesPrescription= () => async (dispatch,getState) => {
  dispatch({ type: GET_LATEST_PRESCRIPTION_REQUEST });
  const { patientSignin: { patientInfo }} = getState();
  try {    
    const { data } = await axios.get(`${Url}/presc/latest-presc`,{
      headers: {Authorization: `Bearer ${patientInfo.token}`}});      
    dispatch({ type: GET_LATEST_PRESCRIPTION_SUCCESS, payload: data }); 
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_LATEST_PRESCRIPTIONT_FAIL, payload: message });
  }
};

export const getLatesDietChart= () => async (dispatch,getState) => {
  dispatch({ type: GET_LATEST_DIET_CHART_REQUEST});
  const { patientSignin: { patientInfo }} = getState();
  try {    
    const { data } = await axios.get(`${Url}/diet-charts/latest-diets`,{
      headers: {Authorization: `Bearer ${patientInfo.token}`}});      
    dispatch({ type: GET_LATEST_DIET_CHART_SUCCESS, payload: data }); 
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_LATEST_DIET_CHART_FAIL, payload: message });
  }
};