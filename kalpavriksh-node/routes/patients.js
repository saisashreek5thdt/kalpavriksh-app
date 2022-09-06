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

router.post("/register/:patientdid/:diabetesprogramid", PatientRegisterValidation, PatientRegistration);

router.post("/patientteamsregister/:patientenrollmentid/:userid", PatientTeamsRegistration);

router.post("/patientpayments/:patientid/:patientenrollmentid", PatientPaymentsValidation, PatientPayments);

router.post("/patientdataforms/:dataformid/:patientenrollmentid/:attachedby", PatientDataForms);

router.post("/patientdataformsquestions/:dataformid/:dataformquestionid/:questionschoiceid/:patadataformattachmentid", PatientDataFormsQuestionsValidation, PatientDataFormsQuestions);

router.post("/patientfileassignment/:fileuploadid/:patientenrollmentid/:attachedby", PatientDataFormsQuestions, PatientFileAssignments);

router.post("/patientdoctorappointments/:patientdid/:doctorid/:patientenrollmentid", PatientDoctorAppointmentsValidation, PatientDoctorAppointments);

router.post("/patientmedicines/:patientid/:medicineid", PatientmedicinesValidation, PatientMedicines);

router.post("/patientnotes/:patientdid/:doctorid/:patientenrollmentid", PatientNotesValidation, PatientNotes);

module.exports = router;
