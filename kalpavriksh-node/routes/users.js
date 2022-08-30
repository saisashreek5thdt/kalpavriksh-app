// NPM modules
const [router, path] = [require("express").Router(), require("path")];

// Controllers
const { UserRegistration, UserRolesRegistration, GetAllRegisteredUsers } = require(path.join(
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

router.get('/all', GetAllRegisteredUsers)

router.post("/userroleregister", UserRolesValidation, UserRolesRegistration);

module.exports = router;