// NPM modules
const [router, path] = [require("express").Router(), require("path")];

// Controllers
const { diabetesprograms, diabetesDataForm, diabetesFormQuestions, diabetesFormQuestionchoices, fileUploads } = require(path.join(
    __dirname,
    "..",
    "controllers",
    "diabetes"
));

// Middlewares
const { DiabetesProgramValidation, DiabetesDataFormValidation,DiabetesDataFormQuestionsValidation, DiabetesDataFormQuestionChoicesValidation, FileUploadsValidation, MedicinesValidation } = require(path.join(
    __dirname,
    "..",
    "middlewares",
    "validators"
));

router.post('/programs', DiabetesProgramValidation, diabetesprograms)

router.post('/dataform',DiabetesDataFormValidation, diabetesDataForm)

router.post('/dataformquestions',DiabetesDataFormQuestionsValidation, diabetesFormQuestions)

router.post('/dataformquestionchoices',DiabetesDataFormQuestionChoicesValidation, diabetesFormQuestionchoices)

router.post('/fileuploads',FileUploadsValidation, fileUploads)

router.post('/medicines',MedicinesValidation, fileUploads)

module.exports = router