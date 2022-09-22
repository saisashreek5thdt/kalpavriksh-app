// NPM Modules
const [path, { ObjectId }] = [require("path"), require("mongodb")];

// Mongodb Client Connection
const { client } = require(path.join(__dirname, "..", "config", "db"));

// Middlewares;
const { asyncHandler } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "asyncHandler"
));

// Desc   -  Create Diabetes Programs
// Route  -  /api/v1/diabetes/programs
// Method -  POST
// Access -  Private
exports.diabetesprograms = asyncHandler(async (req, res, next) => {
  const { name, number_of_days } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("diabetes_programs")
    .insertOne({ name, number_of_days });
  res.json({
    response: true,
    message: "Diabetes Program Registered Successfully.",
    result,
  });
});

// Desc   -  Get all Diabetes Programs
// Route  -  /api/v1/diabetes/programs/all
// Method -  GET
// Access -  Private
exports.GetAllDiabetesPrograms = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("diabetes_programs")
    .find({})
    .toArray();
  if (!result) {
    return res.json({
      response: false,
      message: "No Diabetes Programs available at the moment.",
      count: result.length,
      result,
    });
  } else {
    return res.json({
      response: true,
      message: "Fetched all Diabetes Programs.",
      count: result.length,
      result,
    });
  }
});

// Desc   -  Get Diabetes Program By Id
// Route  -  /api/v1/diabetes/programs/program/:programid
// Method -  GET
// Access -  Private
exports.GetDiabetesProgramById = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("diabetes_programs")
    .findOne({ _id: ObjectId(req.params.programid) });
  if (!result) {
    return res.json({
      response: false,
      message: "No Valid Diabetes Program available at the moment.",
      result,
    });
  } else {
    return res.json({
      response: true,
      message: "Fetched Diabetes Program Based on Id.",
      result,
    });
  }
});

// Desc   -  Update Diabetes Program By Id
// Route  -  /api/v1/diabetes/programs/program/:programid
// Method -  PUT
// Access -  Private
exports.UpdateDiabetesProgramById = asyncHandler(async (req, res, next) => {
  const { name, number_of_days } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("diabetes_programs")
    .findOne({ _id: ObjectId(req.params.programid) });
  if (!result) {
    return res.json({
      response: false,
      message: "No Valid Diabetes Program available at the moment.",
      result,
    });
  } else {
    const updatedResult = await client
      .db("kalpavrikshapp")
      .collection("diabetes_programs")
      .updateOne(
        { _id: ObjectId(req.params.programid) },
        { $set: { name, number_of_days } }
      );
    return res.json({
      response: true,
      message: "Fetched Diabetes Program Based on Id.",
      previousResult: result,
      updatedResult,
    });
  }
});

// Desc   -  Delete Diabetes Program By Id
// Route  -  /api/v1/diabetes/programs/program/:programid
// Method -  DELETE
// Access -  Private
exports.DeleteDiabetesProgramById = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("diabetes_programs")
    .findOne({ _id: ObjectId(req.params.programid) });
  if (!result) {
    return res.json({
      response: false,
      message: "No Valid Diabetes Program available at the moment.",
      result,
    });
  } else {
    await client
      .db("kalpavrikshapp")
      .collection("diabetes_programs")
      .deleteOne({ _id: ObjectId(req.params.programid) });
    return res.json({
      response: true,
      message: "Fetched Diabetes Program Based on Id.",
      result,
    });
  }
});

// Desc   -  Create Diabetes Form Questions
// Route  -  /api/v1/diabetes/dataform
// Method -  POST
// Access -  Private
exports.diabetesDataForm = asyncHandler(async (req, res, next) => {
  const { FormTitle, QuestionType, QuestionTitle, choices } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("data_forms")
    .insertOne({ FormTitle, QuestionType, QuestionTitle, choices });
  res.json({
    response: true,
    message: "Diabetes Data Form Registered Successfully.",
    result,
  });
});

// Desc   -  Get all data form questions
// Route  -  /api/v1/diabetes/dataform/all
// Method -  GET
// Access -  Private
exports.GetAlldiabetesForms = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("data_forms")
    .find({})
    .toArray();
  if (!result) {
    return res.json({
      response: false,
      message: "No Forms Available at the moment.",
    });
  } else {
    return res.json({
      response: true,
      message: "Forms Fetched successfully.",
      count: result.length,
      result,
    });
  }
});

// Desc   -  Get data form question by form id
// Route  -  /api/v1/diabetes/dataformquestion/:dataformquestionid
// Method -  GET
// Access -  Private
exports.GetSingleDataFormQuestion = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("data_forms")
    .findOne({ _id: ObjectId(req.params.dataformquestionid) });
  if (!result) {
    return res.json({ response: false, message: "No valid form available." });
  } else {
    return res.json({
      response: true,
      message: "Fetched form successfully.",
      result,
    });
  }
});

// Desc   -  Update data form question by form id
// Route  -  /api/v1/diabetes/dataformquestion/:dataformquestionid
// Method -  PUT
// Access -  Private
exports.UpdateDataFormQuestion = asyncHandler(async (req, res, next) => {
  const { FormTitle, QuestionType, QuestionTitle, choices } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("data_forms")
    .findOne({ _id: ObjectId(req.params.dataformquestionid) });
  if (!result) {
    return res.json({ response: false, message: "No valid form available." });
  } else {
    const updatedResult = await client
      .db("kalpavrikshapp")
      .collection("data_forms")
      .updateOne(
        { _id: ObjectId(req.params.dataformquestionid) },
        { $set: { FormTitle, QuestionType, QuestionTitle, choices } }
      );
    return res.json({
      response: true,
      message: "Data Form updated successfully.",
      previousResult: result,
      updatedResult,
    });
  }
});

// Desc   -  Delete data form question by form id
// Route  -  /api/v1/diabetes/dataformquestion/:dataformquestionid
// Method -  DELETE
// Access -  Private
exports.DeleteDataFormQuestion = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("data_forms")
    .findOne({ _id: ObjectId(req.params.dataformquestionid) });
  if (!result) {
    return res.json({ response: false, message: "No valid form available." });
  } else {
    await client
      .db("kalpavrikshapp")
      .collection("data_forms")
      .deleteOne({ _id: ObjectId(req.params.dataformquestionid) });
    return res.json({
      response: true,
      message: "Data Form deleted successfully.",
      result,
    });
  }
});

exports.fileUploads = asyncHandler(async (req, res, next) => {
  const { file_type, file_name, aws_bucket_link } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("diabetes_file_uploads")
    .insertOne({ file_type, file_name, aws_bucket_link });
  res.json({
    response: true,
    message: "Diabetes Files Uploaded Successfully.",
    result,
  });
});

// Desc   -  Create Medicines
// Route  -  /api/v1/diabetes/medicines
// Method -  POST
// Access -  Private
exports.createMedicines = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("diabetes_medicines")
    .insertOne({ name });
  res.json({
    response: true,
    message: "Diabetes Medicines Registered Successfully.",
    result,
  });
});

// Desc   -  Get All Medicines List
// Route  -  /api/v1/diabetes/medicines/all
// Method -  GET
// Access -  Private
exports.GetAllMedicines = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("diabetes_medicines")
    .find({})
    .toArray();
  if (!result) {
    return res.json({
      response: false,
      message: "No Medicines available at the moment.",
      count: result.length,
      result,
    });
  } else {
    return res.json({
      response: false,
      message: "Medicines available at the moment.",
      count: result.length,
      result,
    });
  }
});

// Desc   -  Get Medicine By Id
// Route  -  /api/v1/diabetes/medicines/medicine/:medicineid
// Method -  GET
// Access -  Private
exports.GetMedicineById = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("diabetes_medicines")
    .findOne({ _id: ObjectId(req.params.medicineid) });
  if (!result) {
    return res.json({
      response: false,
      message: "No Valid Medicine available at the moment.",
    });
  } else {
    return res.json({
      response: false,
      message: "Medicine Available.",
      result,
    });
  }
});

// Desc   -  Update Medicine By Id
// Route  -  /api/v1/diabetes/medicines/medicine/:medicineid
// Method -  PUT
// Access -  Private
exports.UpdateMedicineById = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("diabetes_medicines")
    .findOne({ _id: ObjectId(req.params.medicineid) });
  if (!result) {
    return res.json({
      response: false,
      message: "No Valid Medicine available at the moment.",
    });
  } else {
    const updatedResult = await client
      .db("kalpavrikshapp")
      .collection("diabetes_medicines")
      .udpateOne({ _id: ObjectId(req.params.medicineid) }, { $set: { name } });
    return res.json({
      response: true,
      message: "Updated Medicine Details.",
      previousResult: result,
      updatedResult,
    });
  }
});

// Desc   -  Delete Medicine By Id
// Route  -  /api/v1/diabetes/medicines/medicine/:medicineid
// Method -  DELETE
// Access -  Private
exports.DeleteMedicineById = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("diabetes_medicines")
    .findOne({ _id: ObjectId(req.params.medicineid) });
  if (!result) {
    return res.json({
      response: false,
      message: "No Valid Medicine available at the moment.",
    });
  } else {
    await client
      .db("kalpavrikshapp")
      .collection("diabetes_medicines")
      .deleteOne({ _id: ObjectId(req.params.medicineid) });
    return res.json({
      response: false,
      message: "Deleted Medicine Successfully.",
      result,
    });
  }
});
