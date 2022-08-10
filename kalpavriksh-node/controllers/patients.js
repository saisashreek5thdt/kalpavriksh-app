// NPM Modules
const [{ v4: uuidv4 }, path] = [require("uuid"), require("path")];

// Middlewares
// const { asyncHandler } = require(path.join(
//   __dirname,
//   "..",
//   "middlewares",
//   "asyncHandler"
// ));

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