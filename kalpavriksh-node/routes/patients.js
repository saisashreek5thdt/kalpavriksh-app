// NPM modules
const [router, path] = [require("express").Router(), require("path")];

// Controllers
const {
  PatientRegistration,
  PatientDataFormsQuestions,
  PatientFileAssignments,
  GetAllPatientsData,
  GetPatientDetailsById,
  UpdatePatientDataById,
  DeletePatientDetailsById,
} = require(path.join(__dirname, "..", "controllers", "patients"));

// Middlewares
const { PatientRegisterValidation } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "validators"
));

router.post(
  "/register/:patientid/:diabetesprogramid/:doctorid",
  PatientRegisterValidation,
  PatientRegistration
);

router.get("/all", GetAllPatientsData);

router.get("/patient/:patiendid", GetPatientDetailsById);

router.put("/patient/:patiendid", UpdatePatientDataById);

router.put("/patient/:patiendid", DeletePatientDetailsById);

router.post(
  "/patientfileassignment/:fileuploadid/:patientenrollmentid/:attachedby",
  PatientFileAssignments
);

module.exports = router;
