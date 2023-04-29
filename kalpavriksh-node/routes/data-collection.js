const router = require("express").Router();

const { getPatient, getForm, employeePerformance } = require('../controllers/data-collection');

const { authorize } = require("../middleware/auth");

router.get('/patient/:patientId', authorize(), getPatient);
router.get('/form/:formId', authorize(), getForm);
router.get('/performance', authorize(), employeePerformance);

module.exports = router;