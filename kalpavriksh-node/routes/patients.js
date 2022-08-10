// NPM modules
const [router, path] = [require("express").Router(), require("path")];

// Controllers
const { PatientRegistration, PatientTeamsRegistration, PatientPayments, PatientDataForms, PatientDataFormsQuestions, PatientFileAssignments, PatientDoctorAppointments,PatientMedicines, PatientNotes } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "patients"
));

// Middlewares
const { PatientRegisterValidation, PatientPaymentsValidation, PatientDataFormsQuestionsValidation, PatientDoctorAppointmentsValidation, PatientmedicinesValidation, PatientNotesValidation } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "validators"
));

router.post("/register", PatientRegisterValidation, PatientRegistration);

router.post("/patientteamsregister", PatientTeamsRegistration);

router.post("/patientpayments", PatientPaymentsValidation, PatientPayments);

router.post("/patientdataforms", PatientDataForms);

router.post("/patientdataformsquestions", PatientDataFormsQuestionsValidation, PatientDataFormsQuestions);

router.post("/patientfileassignment", PatientDataFormsQuestions, PatientFileAssignments);

router.post("/patientdoctorappointments", PatientDoctorAppointmentsValidation, PatientDoctorAppointments);

router.post("/patientmedicines", PatientmedicinesValidation, PatientMedicines);

router.post("/patientnotes", PatientNotesValidation, PatientNotes);

module.exports = router;
