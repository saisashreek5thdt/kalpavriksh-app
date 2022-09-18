const Joi = require("joi");

exports.UserRegisterValidation = (req, res, next) => {
  const { name, phone, dob, gender, email, role } = req.body;
  const Schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    phone: Joi.string().min(10).max(13).required(),
    dob: Joi.string().required(),
    gender: Joi.number().required(),
    role: Joi.string().required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "in"] },
    }),
  });
  const { error } = Schema.validate({ name, phone, dob, gender, email, role });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
};

exports.PatientRegisterValidation = (req, res, next) => {
  const { start_date, end_date, bill_amount, bill_paid } = req.body;
  const Schema = Joi.object({
    start_date: Joi.string().required(),
    end_date: Joi.string().required(),
    bill_amount: Joi.number().required(),
    bill_paid: Joi.boolean().required(),
  });
  const { error } = Schema.validate({ start_date, end_date, bill_amount, bill_paid });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
};

exports.PatientPaymentsValidation = (req, res, next) => {
  const { amount, payment_mode, external_transaction_no } = req.body;
  const Schema = Joi.object({
    amount: Joi.number().required(),
    payment_mode: Joi.string().required(),
    external_transaction_no: Joi.string().required()
  });
  const { error } = Schema.validate({ amount, payment_mode, external_transaction_no });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
};

exports.PatientDataFormsQuestionsValidation = (req, res, next) => {
  const { response_text } = req.body;
  const Schema = Joi.object({
    response_text: Joi.string().required()
  });
  const { error } = Schema.validate({ response_text });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
};

exports.PatientDoctorAppointmentsValidation = (req, res, next) => {
  const { date } = req.body;
  const Schema = Joi.object({
    date: Joi.date().required()
  });
  const { error } = Schema.validate({ date });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
};

exports.PatientmedicinesValidation = (req, res, next) => {
  const { morning_dose, afternoon_dose, evening_dose, comments } = req.body;
  const Schema = Joi.object({
    morning_dose: Joi.number().required(),
    afternoon_dose : Joi.number().required(),
    evening_dose : Joi.number().required(),
    comments : Joi.string().required(),
  });
  const { error } = Schema.validate({ morning_dose, afternoon_dose, evening_dose, comments });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
};

exports.PatientNotesValidation = (req, res, next) => {
  const { content } = req.body;
  const Schema = Joi.object({
    content: Joi.string().required()
  });
  const { error } = Schema.validate({ content });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
};

exports.DiabetesProgramValidation = (req, res, next) => {
  const {name, number_of_days} = req.body
  const Schema= Joi.object({
    name : Joi.string().required(),
    number_of_days : Joi.number().required()
  })
  const { error } = Schema.validate({ name, number_of_days });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
}

exports.DiabetesDataFormValidation = (req, res, next) => {
  const {name} = req.body
  const Schema= Joi.object({
    name : Joi.string().required(),
  })
  const { error } = Schema.validate({ name });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
}

exports.DiabetesDataFormQuestionsValidation = (req, res, next) => {
  const {title, type_of_response} = req.body
  const Schema= Joi.object({
    title : Joi.string().required(),
    type_of_response : Joi.string().required()
  })
  const { error } = Schema.validate({ title, type_of_response });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
}

exports.DiabetesDataFormQuestionChoicesValidation = (req, res, next) => {
  const {title} = req.body
  const Schema= Joi.object({
    title : Joi.string().required(),
  })
  const { error } = Schema.validate({ title });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
}

exports.FileUploadsValidation = (req, res, next) => {
  const {file_type, file_name, aws_bucket_link} = req.body
  const Schema= Joi.object({
    file_type : Joi.string().required(),
    file_name : Joi.string().required(),
    aws_bucket_link : Joi.string().required(),
  })
  const { error } = Schema.validate({ file_type, file_name, aws_bucket_link });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
}

exports.MedicinesValidation = (req, res, next) => {
  const {name} = req.body
  const Schema= Joi.object({
    name : Joi.string().required(),
  })
  const { error } = Schema.validate({ name });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
}