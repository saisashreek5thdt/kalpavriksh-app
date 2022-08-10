// NPM Modules
const [{ v4: uuidv4 }, path] = [require("uuid"), require("path")];

// Middlewares
// const { asyncHandler } = require(path.join(
//   __dirname,
//   "..",
//   "middlewares",
//   "asyncHandler"
// ));


exports.diabetesprograms = (req, res, next) => {
    const _id = uuidv4()
    const { name, number_of_days } = req.body
    res.json({ _id, name, number_of_days })
}

exports.diabetesDataForm = (req, res, next) => {
    const _id = uuidv4()
    const { name } = req.body
    res.json({ _id, name })
}

exports.diabetesFormQuestions = (req, res, next) => {
    const [_id, DATA_FORM_ID] = [uuidv4(), uuidv4()]
    const { title, type_of_response } = req.body
    res.json({ title, type_of_response, _id, DATA_FORM_ID })
}

exports.diabetesFormQuestionchoices = (req, res, next) => {
    const [_id, DATA_FORM_QUESTION_ID] = [uuidv4(), uuidv4()]
    const { title } = req.body
    res.json({ _id, DATA_FORM_QUESTION_ID, title })
}

exports.fileUploads = (req, res, next) => {
    const [_id,] = [uuidv4()]
    const { file_type, file_name, aws_bucket_link } = req.body
    res.json({ file_type, file_name, aws_bucket_link, _id })
}

exports.medicines = (req, res, next) => {
    const [_id,] = [uuidv4()]
    const { name } = req.body
    res.json({ name, _id })
}