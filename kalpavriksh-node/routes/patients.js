// NPM modules
const [router, path] = [require("express").Router(), require("path")];

// Controllers
const { PatientRegistration, PatientTeamsRegistration, PatientPayments, PatientDataForms } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "patients"
));

// Middlewares
const { PatientRegisterValidation, PatientPaymentsValidation } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "validators"
));

router.post("/register", PatientRegisterValidation, PatientRegistration);

router.post("/patientteamsregister", PatientTeamsRegistration);

router.post("/patientpayments",PatientPaymentsValidation, PatientPayments);

router.post("/patientdataforms", PatientDataForms);

module.exports = router;
