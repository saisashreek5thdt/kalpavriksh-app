import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PatientRoute({ children }) {
    const patientSignin = useSelector((state) => state.patientSignin);
    const { patientInfo } = patientSignin;
    return patientInfo ? children : <Navigate to="/"/>;
  };

export default PatientRoute


