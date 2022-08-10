// NPM Modules
const [{ v4: uuidv4 }, path] = [require("uuid"), require("path")];

// Middlewares
// const { asyncHandler } = require(path.join(
//   __dirname,
//   "..",
//   "middlewares",
//   "asyncHandler"
// ));

exports.UserRegistration = (req, res, next) => {
  const _id = uuidv4();
  const { name, phone, dob, gender, email } = req.body;
  res.json({ name, phone, dob, gender, email, _id })
};

exports.UserRolesRegistration = (req, res, next) => {
  const _id = uuidv4();
  const { name } = req.body;
  res.json({name, _id})
};
