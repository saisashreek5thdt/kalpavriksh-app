// NPM modules
const [router, path] = [require("express").Router(), require("path")];

// Controllers
const {
  UserRegistration,
  GetAllRegisteredUsers,
  GetOneRegisterUserById,
  UserLogin,
  OTPAuthentication,
  UpdateRegisteredUser,
  DeleteRegisteredUser
} = require(path.join(__dirname, "..", "controllers", "users"));

// Middlewares
const { UserRegisterValidation } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "validators"
));
const { isUserAuthorized } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "isAuthorized"
));

router.post("/register", UserRegisterValidation, UserRegistration);

router.get("/all", GetAllRegisteredUsers);

router.get("/user/:registerid", GetOneRegisterUserById);

router.put("/login", UserLogin);

router.post("/otp", OTPAuthentication);

router.put("/user/update/:registerid", isUserAuthorized, UpdateRegisteredUser);

router.delete("/user/delete/:registerid", isUserAuthorized, DeleteRegisteredUser);

module.exports = router;
