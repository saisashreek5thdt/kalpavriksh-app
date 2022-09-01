// NPM modules
const [router, path] = [require("express").Router(), require("path")];

// Controllers
const { diabetesprograms, diabetesDataForm, diabetesFormQuestions,GetAlldiabetesFormQuestions, diabetesFormQuestionchoices, fileUploads } = require(path.join(
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

router.get('/dataformquestions/', GetAlldiabetesFormQuestions)

router.post('/dataformquestions/:dataformid',DiabetesDataFormQuestionsValidation, diabetesFormQuestions)

router.post('/dataformquestionchoices/:dataformquestionid',DiabetesDataFormQuestionChoicesValidation, diabetesFormQuestionchoices)

router.post('/fileuploads',FileUploadsValidation, fileUploads)

router.post('/medicines',MedicinesValidation, fileUploads)

module.exports = router