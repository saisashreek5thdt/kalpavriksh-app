// NPM modules
const [router, path] = [require("express").Router(), require("path")];

// Controllers
const { UserRegistration, UserRolesRegistration } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "users"
));

// Middlewares
const { UserRegisterValidation, UserRolesValidation } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "validators"
));

router.post("/register", UserRegisterValidation, UserRegistration);

router.post("/userroleregister", UserRolesValidation, UserRolesRegistration);

module.exports = router;
