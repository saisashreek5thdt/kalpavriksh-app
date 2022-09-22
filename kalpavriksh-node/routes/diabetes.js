// NPM modules
const [router, path] = [require("express").Router(), require("path")];

// Controllers
const {
  diabetesprograms,
  diabetesDataForm,
  GetAlldiabetesForms,
  fileUploads,
  GetSingleDataFormQuestion,
  UpdateDataFormQuestion,
  DeleteDataFormQuestion,
  GetAllDiabetesPrograms,
  GetDiabetesProgramById,
  UpdateDiabetesProgramById,
  DeleteDiabetesProgramById,
  createMedicines,
  GetAllMedicines,
  GetMedicineById,
  UpdateMedicineById,
  DeleteMedicineById,
} = require(path.join(__dirname, "..", "controllers", "diabetes"));

// Middlewares
const {
  DiabetesProgramValidation,
  DiabetesDataFormValidation,
  FileUploadsValidation,
  MedicinesValidation,
} = require(path.join(__dirname, "..", "middlewares", "validators"));

router.post("/programs", DiabetesProgramValidation, diabetesprograms);

router.get("/programs/all", GetAllDiabetesPrograms);

router.get("/programs/program/:programid", GetDiabetesProgramById);

router.put("/programs/program/:programid", UpdateDiabetesProgramById);

router.delete("/programs/program/:programid", DeleteDiabetesProgramById);

router.post("/dataform", DiabetesDataFormValidation, diabetesDataForm);

router.get("/dataform/all", GetAlldiabetesForms);

router.get("/dataform/:dataformquestionid", GetSingleDataFormQuestion);

router.put("/dataform/:dataformquestionid", UpdateDataFormQuestion);

router.delete("/dataform/:dataformquestionid", DeleteDataFormQuestion);

router.post("/fileuploads", FileUploadsValidation, fileUploads);

router.post("/medicines", MedicinesValidation, createMedicines);

router.get("/medicines/all", GetAllMedicines);

router.get("/medicines/medicine/:medicineid", GetMedicineById);

router.put("/medicines/medicine/:medicineid", UpdateMedicineById);

router.delete("/medicines/medicine/:medicineid", DeleteMedicineById);

module.exports = router;
