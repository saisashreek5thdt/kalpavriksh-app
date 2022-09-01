// NPM Modules
const [path] = [require("path")];

// Mongodb Client Connection
const { client } = require(path.join(__dirname, "..", "config", "db"));

// Middlewares;
const { asyncHandler } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "asyncHandler"
));

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

exports.diabetesDataForm = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("data_forms")
    .insertOne({ name });
  res.json({
    response: true,
    message: "Diabetes Data Form Registered Successfully.",
    result,
  });
});

exports.diabetesFormQuestions = asyncHandler(async (req, res, next) => {
  const [DATA_FORM_ID] = [req.params.dataformid];
  const { title, type_of_response } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("data_form_questions")
    .insertOne({ title, type_of_response, dataform: { "$ref": "data_form", "$id": DATA_FORM_ID, "$db": "kalpavrikshapp" } });
  res.json({
    response: true,
    message: "Diabetes Form Questions Registered Successfully.",
    result,
  });
});

exports.GetAlldiabetesFormQuestions = asyncHandler(async (req, res, next) => {
  const result = await client.db('kalpavrikshapp').collection('data_form_questions').find({}).toArray()
  dbref = result.dataform
  client[dbref.$ref].findOne({ "_id": (dbRef.$id) })
  res.json(result)
})

exports.diabetesFormQuestionchoices = asyncHandler(async (req, res, next) => {
  const [DATA_FORM_QUESTION_ID] = [req.params.dataformquestionid];
  const { title } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("data_form_question_choices")
    .insertOne({ title, dataformquestionid: { "$ref": "data_form_questions", "$id": DATA_FORM_QUESTION_ID, "$db": "kalpavrikshapp" } });
  res.json({
    response: true,
    message: "Diabetes Form Question Choices Registered Successfully.",
    result,
  });
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

exports.medicines = asyncHandler(async (req, res, next) => {
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
