// NPM Modules
const [path] = [require("path")];

// Mongodb Client Connection
const { client } = require(path.join(__dirname, "..", "config", "db"));

// Middlewares
const { asyncHandler } = require(path.join(
    __dirname,
    "..",
    "middlewares",
    "asyncHandler"
));

exports.PatientRegistration = asyncHandler(async (req, res, next) => {
    const [PATIENT_ID, DIABETES_PROGRAM_ID] = [req.params.patientdid, req.params.diabetesprogramid]
    const { start_date, end_date, bill_amount, bill_paid } = req.body;
    const result = await client
        .db("kalpavrikshapp")
        .collection("patient_enrollments")
        .insertOne({ start_date, end_date, bill_amount, bill_paid, patientid: { "$ref": "users", "$id": PATIENT_ID, "$db": "kalpavrikshapp" }, diabetesprogramid: { "$ref": "diabetes_programs", "$id": DIABETES_PROGRAM_ID, "$db": "kalpavrikshapp" } });
    res.json({
        response: true,
        message: "Patient Enrollment Completed Successfully.",
        result,
    });
});

exports.PatientTeamsRegistration = asyncHandler(async (req, res, next) => {
    const [PATIENT_ENROLMENT_ID, USER_ID] = [req.params.patientenrollmentid, req.params.userid];
    const result = await client
        .db("kalpavrikshapp")
        .collection("patient_teams_registration")
        .insertOne({ patientenrollmentid: { "$ref": "users", "$id": PATIENT_ENROLMENT_ID, "$db": "kalpavrikshapp" }, userid: { "$ref": "users", "$id": USER_ID, "$db": "kalpavrikshapp" } });
    res.json({
        response: true,
        message: "Patient Teams Registration Completed Successfully.",
        result,
    });
});

exports.PatientPayments = asyncHandler(async (req, res, next) => {
    const [PATIENT_ID, PATIENT_ENROLMENT_ID] = [req.params.patientid, req.params.patientenrollmentid]
    const { amount, payment_mode, external_transaction_no } = req.body;
    const result = await client
        .db("kalpavrikshapp")
        .collection("patient_payments")
        .insertOne({ amount, payment_mode, external_transaction_no, patientenrollmentid: { "$ref": "patient_enrollment", "$id": PATIENT_ENROLMENT_ID, "$db": "kalpavrikshapp" }, patientid: { "$ref": "users", "$id": PATIENT_ID, "$db": "kalpavrikshapp" } });
    res.json({
        response: true,
        message: "Patient Payments Method Added Successfully.",
        result,
    });
});

exports.PatientDataForms = asyncHandler(async (req, res, next) => {
    const [DATA_FORM_ID, PATIENT_ENROLMENT_ID, ATTACHED_BY] = [req.params.dataformid, req.params.patientenrollmentid, req.params.attachedby];
    const result = await client
        .db("kalpavrikshapp")
        .collection("patient_data_form_attachments")
        .insertOne({ patientenrollmentid: { "$ref": "patient_enrollment", "$id": PATIENT_ENROLMENT_ID, "$db": "kalpavrikshapp" }, attachedby: { "$ref": "users", "$id": ATTACHED_BY, "$db": "kalpavrikshapp" }, dataformid: { "$ref": "data_forms", "$id": DATA_FORM_ID, "$db": "kalpavrikshapp" } });
    res.json({
        response: true,
        message: "Patient Data Forms Added Successfully.",
        result,
    });
});

exports.PatientDataFormsQuestions = asyncHandler(async (req, res, next) => {
    const [DATA_FORM_ID, DATA_FORM_QUESTION_ID, QUESTION_CHOICE_ID, PATIENT_DATA_FORM_ATTACHMENT_ID] = [req.params.dataformid, req.params.dataformquestionid, req.params.questionschoiceid, req.params.patadataformattachmentid];
    const response_text = req.body
    const result = await client
        .db("kalpavrikshapp")
        .collection("patient_data_form_question_responses")
        .insertOne({ response_text, dataformid: { "$ref": "data_forms", "$id": DATA_FORM_ID, "$db": "kalpavrikshapp" }, dataformquestionid: { "$ref": "data_form_questions", "$id": DATA_FORM_QUESTION_ID, "$db": "kalpavrikshapp" }, questionschoiceid: { "$ref": "data_form_question_choices", "$id": QUESTION_CHOICE_ID, "$db": "kalpavrikshapp" }, patadataformattachmentid: { "$ref": "patient_data_form_attachments", "$id": PATIENT_DATA_FORM_ATTACHMENT_ID, "$db": "kalpavrikshapp" } });
    res.json({
        response: true,
        message: "Patient Data Form Questions Added Successfully.",
        result,
    });
});

exports.PatientFileAssignments = asyncHandler(async (req, res, next) => {
    const [FILE_UPLOAD_ID, PATIENT_ENROLMENT_ID, ATTACHED_BY] = [req.params.fileuploadid, req.params.patientenrollmentid, req.params.attachedby];
    const result = await client
        .db("kalpavrikshapp")
        .collection("patient_file_assignments")
        .insertOne({ fileuploadid: { "$ref": "diabetes_file_uploads", "$id": FILE_UPLOAD_ID, "$db": "kalpavrikshapp" }, patientenrollmentid: { "$ref": "patient_enrollments", "$id": PATIENT_ENROLMENT_ID, "$db": "kalpavrikshapp" }, attachedby: { "$ref": "users", "$id": ATTACHED_BY, "$db": "kalpavrikshapp" } });
    res.json({
        response: true,
        message: "Patient File Assignments Added Successfully.",
        result,
    });
});

exports.PatientDoctorAppointments = asyncHandler(async (req, res, next) => {
    const [PATIENT_ID, DOCTOR_ID, PATIENT_ENROLMENT_ID] = [req.params.patientdid, req.params.doctorid, req.params.patientenrollmentid];
    const { date } = req.body
    const result = await client
        .db("kalpavrikshapp")
        .collection("patient_doctor_appointments")
        .insertOne({ date, patientdid: { "$ref": "users", "$id": PATIENT_ID, "$db": "kalpavrikshapp" }, doctorid: { "$ref": "users", "$id": DOCTOR_ID, "$db": "kalpavrikshapp" }, patientenrollmentid: { "$ref": "patient_enrollments", "$id": PATIENT_ENROLMENT_ID, "$db": "kalpavrikshapp" } });
    res.json({
        response: true,
        message: "Patient Doctor Appointments Added Successfully.",
        result,
    });
});

exports.PatientMedicines = asyncHandler(async (req, res, next) => {
    const [PATIENT_DOCTOR_APPOINTMENT_ID, MEDICINE_ID] = [req.params.patientid, req.params.medicineid];
    const { morning_dose, afternoon_dose, evening_dose, comments } = req.body
    const result = await client
        .db("kalpavrikshapp")
        .collection("patient_medicines")
        .insertOne({ morning_dose, afternoon_dose, evening_dose, comments, PatientDoctorAppointmentsid: { "$ref": "patient_doctor_appointments", "$id": PATIENT_DOCTOR_APPOINTMENT_ID, "$db": "kalpavrikshapp" }, medicineid: { "$ref": "diabetes_medicines", "$id": MEDICINE_ID, "$db": "kalpavrikshapp" } });
    res.json({
        response: true,
        message: "Patient Medicines Added Successfully.",
        result,
    });
});

exports.PatientNotes = asyncHandler(async (req, res, next) => {
    const [PATIENT_ID, DOCTOR_ID, PATIENT_ENROLMENT_ID] = [req.params.patientdid, req.params.doctorid, req.params.patientenrollmentid];
    const { notes } = req.body
    const result = await client
        .db("kalpavrikshapp")
        .collection("patient_notes")
        .insertOne({ notes, patientdid: { "$ref": "users", "$id": PATIENT_ID, "$db": "kalpavrikshapp" }, doctorid: { "$ref": "users", "$id": DOCTOR_ID, "$db": "kalpavrikshapp" }, patientenrollmentid: { "$ref": "patient_enrollments", "$id": PATIENT_ENROLMENT_ID, "$db": "kalpavrikshapp" } });
    res.json({
        response: true,
        message: "Patient Notes Added Successfully.",
        result,
    });
});