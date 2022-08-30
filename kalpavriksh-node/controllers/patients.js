// NPM Modules
const [{ v4: uuidv4 }, path] = [require("uuid"), require("path")];

// Mongodb Client Connection
const { client } = require(path.join(__dirname, "..", "config", "db"));

// Middlewares
const { asyncHandler } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "asyncHandler"
));

exports.PatientRegistration = (req, res, next) => {
    const [ID, PATIENT_ID, DIABETES_PROGRAM_ID] = [uuidv4(), uuidv4(), uuidv4()]
    const _id = uuidv4();
    const { start_date, end_date, bill_amount, bill_paid } = req.body;
    res.json({ start_date, end_date, bill_amount, bill_paid, ID, PATIENT_ID, DIABETES_PROGRAM_ID, _id })
};

exports.PatientTeamsRegistration = (req, res, next) => {
    const [_id, PATIENT_ENROLMENT_ID, USER_ID] = [uuidv4(), uuidv4(), uuidv4()];
    res.json({ _id, PATIENT_ENROLMENT_ID, USER_ID })
};

exports.PatientPayments = (req, res, next) => {
    const [ID, PATIENT_ID, PATIENT_ENROLMENT_ID] = [uuidv4(), uuidv4(), uuidv4()]
    const _id = uuidv4();
    const { amount, payment_mode, external_transaction_no } = req.body;
    res.json({ amount, payment_mode, external_transaction_no, ID, PATIENT_ID, PATIENT_ENROLMENT_ID, _id })
};

exports.PatientDataForms = (req, res, next) => {
    const [_id, DATA_FORM_ID, PATIENT_ENROLMENT_ID, ATTACHED_BY] = [uuidv4(), uuidv4(), uuidv4(), uuidv4()];
    res.json({ _id, DATA_FORM_ID, PATIENT_ENROLMENT_ID, ATTACHED_BY })
};

exports.PatientDataFormsQuestions = (req, res, next) => {
    const [_id, DATA_FORM_ID, DATA_FORM_QUESTION_ID, QUESTION_CHOICE_ID, PATIENT_DATA_FORM_ATTACHMENT_ID] = [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()];
    const response_text = req.body
    res.json({ _id, DATA_FORM_ID, DATA_FORM_QUESTION_ID, QUESTION_CHOICE_ID, PATIENT_DATA_FORM_ATTACHMENT_ID, response_text })
};

exports.PatientFileAssignments = (req, res, next) => {
    const [_id, FILE_UPLOAD_ID, PATIENT_ENROLMENT_ID, ATTACHED_BY] = [uuidv4(), uuidv4(), uuidv4(), uuidv4()];
    res.json({ _id, FILE_UPLOAD_ID, PATIENT_ENROLMENT_ID, ATTACHED_BY })
};

exports.PatientDoctorAppointments = (req, res, next) => {
    const [_id, PATIENT_ID, DOCTOR_ID, PATIENT_ENROLMENT_ID] = [uuidv4(), uuidv4(), uuidv4(), uuidv4()];
    const { date } = req.body
    res.json({ _id, PATIENT_ID, DOCTOR_ID, PATIENT_ENROLMENT_ID, date })
};

exports.PatientMedicines = (req, res, next) => {
    const [_id, PATIENT_DOCTOR_APPOINTMENT_ID, MEDICINE_ID] = [uuidv4(), uuidv4(), uuidv4()];
    const { morning_dose, afternoon_dose, evening_dose, comments } = req.body
    res.json({ _id, PATIENT_DOCTOR_APPOINTMENT_ID, MEDICINE_ID, morning_dose, afternoon_dose, evening_dose, comments })
};

exports.PatientNotes = (req, res, next) => {
    const [_id, PATIENT_ID, DOCTOR_ID, PATIENT_ENROLMENT_ID] = [uuidv4(), uuidv4(), uuidv4(), uuidv4()];
    const { notes } = req.body
    res.json({ _id, PATIENT_ID, DOCTOR_ID, PATIENT_ENROLMENT_ID, notes })
};