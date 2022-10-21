// NPM Modules
const [path, { ObjectId }] = [require("path"), require("mongodb")];

// Mongodb Client Connection
const { client } = require(path.join(__dirname, "..", "config", "db"));

// Middlewares
const { asyncHandler } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "asyncHandler"
));

// Desc   -  Enroll patient data
// Route  -  /api/v1/patients/register/:patientid/:diabetesprogramid/:doctorid
// Method -  POST
// Access -  Private
exports.PatientRegistration = asyncHandler(async (req, res, next) => {
  const {
    start_date,
    end_date,
    bill_amount,
    bill_paid,
    payment_mode,
    external_transaction_no,
    data_form_attached_by,
    response_text,
    appointmentdate,
    morning_dose,
    afternoon_dose,
    evening_dose,
    comments,
  } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("patient_enrollments")
    .insertOne({
      start_date,
      end_date,
      bill_amount,
      bill_paid,
      //patientid: ObjectId(req.params.patientid),
      diabetesprogramid: ObjectId(req.params.diabetesprogramid),
      doctorid: ObjectId(req.params.doctorid),
      assignedteammember: req.query.userid ? ObjectId(req.query.userid) : null,
      payment_mode,
      external_transaction_no,
      data_form_attached_by,
      response_text,
      diabetesdataformquestionid: req.query.dataformid
        ? ObjectId(req.query.dataformid)
        : null,
      appointment: {
        appointmentdate,
        doctoridforappointment: req.query.doctoridforappointment
          ? doctoridforappointment
          : null,
      },
      medicines: {
        PatientDoctorAppointmentsid: req.query.PatientDoctorAppointmentsid
          ? req.query.PatientDoctorAppointmentsid
          : null,
        medicineid: req.query.medicineid ? req.query.medicineid : null,
        morning_dose,
        afternoon_dose,
        evening_dose,
        comments,
      },
      notes: {
        doctorid: req.query.doctoridfornotes
          ? req.query.doctoridfornotes
          : null,
        content,
      },
    });
  res.json({
    response: true,
    message: "Patient Enrollment Completed Successfully.",
    result,
  });
  // const result = await client
  //     .db("kalpavrikshapp")
  //     .collection("patient_enrollments")
  //     .insertOne({ start_date, end_date, bill_amount, bill_paid, patientid: { "$ref": "users", "$id": PATIENT_ID, "$db": "kalpavrikshapp" }, diabetesprogramid: { "$ref": "diabetes_programs", "$id": DIABETES_PROGRAM_ID, "$db": "kalpavrikshapp" } });
  // res.json({
  //     response: true,
  //     message: "Patient Enrollment Completed Successfully.",
  //     result,
  // });
});

// Desc   -  Fetch all Patients Data from db
// Route  -  /api/v1/patients/all
// Method -  POST
// Access -  Private
exports.GetAllPatientsData = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("patient_enrollments")
    .find({})
    .toArray();
  if (!result) {
    return res.json({
      response: false,
      message: "NO Patients Data available at the moment.",
      count: result.length,
      result,
    });
  } else {
    return res.json({
      response: true,
      message: "Fetched Patients Data",
      count: result.length,
      result,
    });
  }
});

// Desc   -  Fetch patient by id
// Route  -  /api/v1/patients/patient/:patientid
// Method -  GET
// Access -  Private
exports.GetPatientDetailsById = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("patient_enrollments")
    .findOne({ _id: ObjectId(req.params.patientid) });
  if (!result) {
    return res.json({
      response: false,
      message: "NO Patient Data available at the moment.",
    });
  } else {
    return res.json({
      response: true,
      message: "Fetched Patient Data",
      result,
    });
  }
});

// Desc   -  UPdate Patient By Id
// Route  -  /api/v1/patients/patient/:patientid
// Method -  PUT
// Access -  Private
exports.UpdatePatientDataById = asyncHandler(async (req, res, next) => {
  const {
    start_date,
    end_date,
    bill_amount,
    bill_paid,
    payment_mode,
    external_transaction_no,
    data_form_attached_by,
    response_text,
    appointmentdate,
    morning_dose,
    afternoon_dose,
    evening_dose,
    comments,
  } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("patient_enrollments")
    .findOne({ _id: ObjectId(req.params.patientid) });
  if (!result) {
    return res.json({
      response: false,
      message: "NO Patient Data available at the moment.",
    });
  } else {
    const updatedResult = await client
      .db("kalpavrikshapp")
      .collection("patient_enrollments")
      .updateOne(
        { _id: ObjectId(req.params.patientid) },
        {
          $set: {
            start_date,
            end_date,
            bill_amount,
            bill_paid,
            patientid: ObjectId(req.params.patientid),
            diabetesprogramid: ObjectId(req.params.diabetesprogramid),
            doctorid: ObjectId(req.params.doctorid),
            assignedteammember: req.query.userid
              ? ObjectId(req.query.userid)
              : null,
            payment_mode,
            external_transaction_no,
            data_form_attached_by,
            response_text,
            diabetesdataformquestionid: req.query.dataformid
              ? ObjectId(req.query.dataformid)
              : null,
            appointment: {
              appointmentdate,
              doctoridforappointment: req.query.doctoridforappointment
                ? doctoridforappointment
                : null,
            },
            medicines: {
              PatientDoctorAppointmentsid: req.query.PatientDoctorAppointmentsid
                ? req.query.PatientDoctorAppointmentsid
                : null,
              medicineid: req.query.medicineid ? req.query.medicineid : null,
              morning_dose,
              afternoon_dose,
              evening_dose,
              comments,
            },
            notes: {
              doctorid: req.query.doctoridfornotes
                ? req.query.doctoridfornotes
                : null,
              content,
            },
          },
        }
      );
    return res.json({
      response: true,
      message: "Patient data updated successfully.",
      previousResult: result,
      updatedResult,
    });
  }
});

// Desc   -  Delete Patient By Id
// Route  -  /api/v1/patients/patient/:patientid
// Method -  DELETE
// Access -  Private
exports.DeletePatientDetailsById = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("patient_enrollments")
    .findOne({ _id: ObjectId(req.params.patientid) });
  if (!result) {
    return res.json({
      response: false,
      message: "NO Patient Data available at the moment.",
    });
  } else {
    await client
      .db("kalpavrikshapp")
      .collection("patient_enrollments")
      .deleteOne({ _id: ObjectId(req.params.patientid) });
    return res.json({
      response: true,
      message: "Patient record deleted successfully.",
      deletedRecord: result,
    });
  }
});

exports.PatientFileAssignments = asyncHandler(async (req, res, next) => {
  const [FILE_UPLOAD_ID, PATIENT_ENROLMENT_ID, ATTACHED_BY] = [
    req.params.fileuploadid,
    req.params.patientenrollmentid,
    req.params.attachedby,
  ];
  const result = await client
    .db("kalpavrikshapp")
    .collection("patient_file_assignments")
    .insertOne({
      fileuploadid: {
        $ref: "diabetes_file_uploads",
        $id: FILE_UPLOAD_ID,
        $db: "kalpavrikshapp",
      },
      patientenrollmentid: {
        $ref: "patient_enrollments",
        $id: PATIENT_ENROLMENT_ID,
        $db: "kalpavrikshapp",
      },
      attachedby: { $ref: "users", $id: ATTACHED_BY, $db: "kalpavrikshapp" },
    });
  res.json({
    response: true,
    message: "Patient File Assignments Added Successfully.",
    result,
  });
});
