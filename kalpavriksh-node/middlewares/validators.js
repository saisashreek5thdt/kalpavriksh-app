const Joi = require("joi");

exports.UserRegisterValidation = (req, res, next) => {
  const { name, phone, dob, gender, email } = req.body;
  const Schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    phone: Joi.string().min(10).max(13).required(),
    dob: Joi.string().required(),
    gender: Joi.number().required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "in"] },
    }),
  });
  const { error } = Schema.validate({ name, phone, dob, gender, email });
  if (error)
    return res.status(400).json({ response: false, error: error.message });
  next();
};

exports.UserRolesValidation = (req, res, next) => {
  const { name } = req.body;
  const Schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
  });
  const { error } = Schema.validate({ name });
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