import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import { doctorCreateReducer } from './reducer/AdminReducer';
import { dietChartUploadReducer, formCreateReducer, prescriptionCreateReducer } from './reducer/DoctoreReducer';
import { appointmentCreateReducer, appointmentListReducer, enrollmentPatientReducer, patientDetailsReducer, patientFormListReducer, patientListReducer, patientOtpReducer, presctListReducer } from './reducer/Patientreducer';


const initialState = {
    patientSignin: {
      patientInfo: localStorage.getItem('patientInfo')
        ? JSON.parse(localStorage.getItem('patientInfo'))
        : null,
    },
  };

const reducer =combineReducers({
    enrollmentPatient:enrollmentPatientReducer,
    patientList:patientListReducer,
    patientDetails:patientDetailsReducer,
    dietChartUpload:dietChartUploadReducer,
    formCreate:formCreateReducer,
    patientFormList:patientFormListReducer,
    appointmentCreate:appointmentCreateReducer,
    appointmentList:appointmentListReducer,
    prescriptionCreate:prescriptionCreateReducer,
    doctorCreate:doctorCreateReducer,
    presctList:presctListReducer,
    patientOtp:patientOtpReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store