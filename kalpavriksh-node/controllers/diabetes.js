// NPM Modules
const [{ v4: uuidv4 }, path] = [require("uuid"), require("path")];

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
    .collection("data_form")
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
    .insertOne({ title, type_of_response, dataform : {"$ref" : "data_form", "$id" : DATA_FORM_ID, "$db" : "kalpavrikshapp"} });
  res.json({
    response: true,
    message: "Diabetes Form Questions Registered Successfully.",
    result,
  });
  res.json({ title, type_of_response, DATA_FORM_ID });
});

exports.GetAlldiabetesFormQuestions = asyncHandler(async (req, res, next) => {
    const result = await client.db('kalpavrikshapp').collection('data_form_questions').find({}).toArray()
    dbref = result.dataform
    client[dbref.$ref].findOne({"_id" : (dbRef.$id)})
    res.json(result)
})

exports.diabetesFormQuestionchoices = (req, res, next) => {
  const [_id, DATA_FORM_QUESTION_ID] = [uuidv4(), uuidv4()];
  const { title } = req.body;
  res.json({ _id, DATA_FORM_QUESTION_ID, title });
};

exports.fileUploads = (req, res, next) => {
  const [_id] = [uuidv4()];
  const { file_type, file_name, aws_bucket_link } = req.body;
  res.json({ file_type, file_name, aws_bucket_link, _id });
};

exports.medicines = (req, res, next) => {
  const [_id] = [uuidv4()];
  const { name } = req.body;
  res.json({ name, _id });
};
