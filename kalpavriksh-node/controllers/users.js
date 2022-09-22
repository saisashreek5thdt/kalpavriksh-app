// NPM Modules
const [path, { ObjectId }, { sign, verify }] = [
  require("path"),
  require("mongodb"),
  require("jsonwebtoken"),
];

// Mongodb Client Connection
const { client } = require(path.join(__dirname, "..", "config", "db"));

// Middlewares;
const { asyncHandler } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "asyncHandler"
));

// Utils
const { OtpMailer } = require(path.join(__dirname, "..", "utils", "mailer"));

// Desc   -  User Registration
// Route  -  /api/v1/users/register
// Method -  POST
// Access -  Public
exports.UserRegistration = asyncHandler(async (req, res, next) => {
  const { name, phone, dob, gender, email, role } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("users")
    .insertOne({
      name,
      phone,
      dob,
      gender,
      email,
      role,
      otp: null,
      token: null,
    });
  res.json({
    response: true,
    message: "User Registered Successfully.",
    user: result,
  });
});

// Desc   -  Fetches all registered users from DB
// Route  -  /api/v1/users/all
// Method -  GET
// Access -  Private
exports.GetAllRegisteredUsers = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("users")
    .find({})
    .toArray();
  if (!result) {
    return res.json({
      response: false,
      message: "No Registered Users Found.",
      UsersCount: result.length,
      users: result,
    });
  } else {
    return res.json({
      response: true,
      message: "Fetched Registered Users",
      UsersCount: result.length,
      users: result,
    });
  }
});

// Desc   -  Fetches Registered User Based on ID
// Route  -  /api/v1/users/user/:registerid
// Method -  GET
// Access -  Private
exports.GetOneRegisterUserById = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("users")
    .findOne({ _id: ObjectId(req.params.registerid) });
  if (!result) {
    return res.json({
      response: false,
      message: "No Registered User Found.",
      users: result,
    });
  } else {
    return res.json({
      response: true,
      message: "Fetched Registered User",
      users: result,
    });
  }
});

// Desc   -  Login If user registered
// Route  -  /api/v1/users/login
// Method -  PUT
// Access -  Public
exports.UserLogin = asyncHandler(async (req, res, next) => {
  const email = req.body;
  if (!email) {
    return res.json({ response: false, message: "Invalid Email." });
  } else {
    const result = await client
      .db("kalpavrikshapp")
      .collection("users")
      .findOne({ email });
    if (!result) {
      return res.json({ response: false, message: "No valid user found." });
    } else {
      let str =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let otp = "";
      for (let i = 0; i < 6; i++) {
        otp += str[Math.floor(Math.random() * str.length)];
      }
      OtpMailer(email, otp);
      await client
        .db("kalpavrikshapp")
        .collection("users")
        .updateOne(email, { $set: { otp } });
      const token = await sign({ _id: result._id }, process.env.JWTSECRET, {
        expiresIn: "5m",
      });
      return res.json({
        response: true,
        message: "OTP has been sent your registered email id.",
        token,
      });
    }
  }
});

// Desc   -  OTP Authentication if valid user exists
// Route  -  /api/v1/users/otp
// Method -  POST
// Access -  Private
exports.OTPAuthentication = asyncHandler(async (req, res, next) => {
  const otp = req.body;
  if (!otp) {
    return res.json({ response: false, message: "Invalid OTP." });
  } else {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.json({
        response: false,
        message: "No valid Authorized token found.",
      });
    } else {
      const token = authorization.replace("Bearer ", "");
      verify(token, process.env.JWTSECRET, (err, decode) => {
        if (err) {
          return res.json({
            response: false,
            message: "Authorization Token Expired.",
          });
        } else {
          const { _id, otp } = decoded;
          client
            .db("kalpavrikshapp")
            .collection("users")
            .findOne({ _id: ObjectId(_id) })
            .then((user) => {
              if (user.otp === otp) {
                user.otp === null;
                sign({ _id: result._id }, process.env.JWTSECRET, {
                  expiresIn: "24h",
                })
                  .then((token) => {
                    client
                      .db("kalpavrikshapp")
                      .collection("users")
                      .updateOne({ email: user.email }, { $set: { token } })
                      .then((user) =>
                        res.json({
                          response: true,
                          message: "Authorization Success.",
                          user,
                        })
                      )
                      .catch((err) =>
                        res.json({ response: false, message: err })
                      );
                  })
                  .catch((err) => res.json({ response: false, message: err }));
              }
            })
            .catch((err) =>
              res.json({ response: false, message: "No valid user found." })
            );
        }
      });
    }
  }
});

// Desc   -  Update Registered user
// Route  -  /api/v1/users/user/update/:registerid
// Method -  PUT
// Access -  Private
exports.UpdateRegisteredUser = asyncHandler(async (req, res, next) => {
  const { name, phone, dob, gender, email, role } = req.body;
  client
    .db("kalpavrikshapp")
    .collection("users")
    .updateOne(
      { _id: ObjectId(req.user._id) },
      { $set: { name, phone, dob, gender, email, role } }
    )
    .then((user) => {
      user.otp = null;
      res.json({
        response: true,
        message: "User details update success.",
        user,
      });
    })
    .catch((err) =>
      res.json({ response: false, message: "User Details Update Failed.", err })
    );
});

// Desc   -  Delete Registered user
// Route  -  /api/v1/users/user/delete/:registerid
// Method -  DELETE
// Access -  Private
exports.DeleteRegisteredUser = asyncHandler(async (req, res, next) => {
  await client
    .db("kalpavrikshapp")
    .collection("users")
    .deleteOne({ _id: ObjectId(req.user._id) });
  return res.json({ response: true, message: "User Deleted Succesfully." });
});
