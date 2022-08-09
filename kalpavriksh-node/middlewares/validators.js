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
