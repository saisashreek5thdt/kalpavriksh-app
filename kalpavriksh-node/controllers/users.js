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
  console.log({ name, phone, dob, gender, email, _id });
};

exports.UserRolesRegistration = (req, res, next) => {
  const _id = uuidv4();
  const { name } = req.body;
  console.log({name, _id});
};
