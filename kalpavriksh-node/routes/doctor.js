const router = require("express").Router();
const multer = require('multer');

const { addPatient, getAllPatients, getPatient, editPatient, addDoctor } = require('../controllers/patient');
const doctor = require('../controllers/doctor');
const dietChart = require('../controllers/diet-chart');
const form = require('../controllers/form');

const { authorize } = require("../middleware/auth");

const upload = multer()

router.post('/add-doctor', authorize("admin"), upload.array('file'), doctor.addDoctor); //
router.post('/add-patient', authorize("doctor"), upload.array('file'), addPatient);
router.get('/get-all-patients', authorize("doctor"), getAllPatients);
router.get('/patient/:id', authorize("doctor"), getPatient);
router.put('/edit-patient/:id', authorize("doctor"), editPatient);

router.post('/add-diet-chart', authorize("doctor"), upload.array('file'), dietChart.addDietChart);

router.post('/add-form', authorize("doctor"), form.addForm);

router.get('/get-all', authorize(), doctor.getAll);
router.put('/edit/:id', authorize("admin"), upload.array('file'), doctor.edit);
router.put('/deactivate/:id', authorize("admin"), doctor.deactivate);
router.put('/activate/:id', authorize("admin"), doctor.activate);

module.exports = router;