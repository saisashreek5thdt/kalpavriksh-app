// NPM Modules
const [path] = [require("path")];

// Mongodb Client Connection
const { client } = require(path.join(__dirname, "..", "config", "db"));

// Middlewares;
const { asyncHandler } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "asyncHandler"
));

exports.UserRegistration = asyncHandler(async (req, res, next) => {
  const { name, phone, dob, gender, email } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("users")
    .insertOne({ name, phone, dob, gender, email });
  res.json({
    response: true,
    message: "User Registered Successfully.",
    user: result,
  });
});

exports.GetAllRegisteredUsers = asyncHandler(async (req, res, next) => {
  const result = await client
    .db("kalpavrikshapp")
    .collection("users")
    .find({})
    .toArray();
  if (!result)
    res.json({
      response: true,
      message: "Fetched Registered Users",
      UsersCount: result.length,
      users: result,
    });
  res.json({
    response: true,
    message: "Fetched Registered Users",
    UsersCount: result.length,
    users: result,
  });
});

exports.UserRolesRegistration = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const result = await client
    .db("kalpavrikshapp")
    .collection("user_roles")
    .insertOne({ name });
  res.json({
    response: true,
    message: "User_role Registered Successfully.",
    user: result,
  });
});

exports.UserRolesAssign = asyncHandler(async (req, res, next) => {
  const [USER_ROLE_ID, USER_ID] = [req.params.userroleid, req.params.userid];
  const result = await client
    .db("kalpavrikshapp")
    .collection("user_roles_assign")
    .insertOne({ userrole: { "$ref": "user_roles", "$id": USER_ROLE_ID, "$db": "kalpavrikshapp" }, user: { "$ref": "users", "$id": USER_ID, "$db": "kalpavrikshapp" } });
  res.json({
    response: true,
    message: "User Roles Assigned Successfully.",
    result,
  });
  res.json({ USER_ROLE_ID, USER_ID });
})