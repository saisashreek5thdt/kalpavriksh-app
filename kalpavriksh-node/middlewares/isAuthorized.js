// NPM Modules
const [path, { ObjectId }, { sign, verify }] = [require("path"), require("mongodb"), require('jsonwebtoken')];

// Mongodb Client Connection
const { client } = require(path.join(__dirname, "..", "config", "db"));

// Middlewares;
const { asyncHandler } = require(path.join(
    __dirname,
    "..",
    "middlewares",
    "asyncHandler"
));

exports.isUserAuthorized = asyncHandler(async (req, res, next) => {
    const { Authorization } = req.headers
    if (!Authorization) {
        return res.json({ response: false, message: "No valid Authorization token found." })
    } else {
        const token = Authorization.replace("Bearer ", '')
        verify(token, process.env.JWTSECRET, (err, decoded) => {
            if (err) {
                return res.json({ response: false, message: "Token Expired." })
            } else {
                const { _id, token } = decoded
                client.db("kalpavrikshapp").collection('users').findOne({ _id: ObjectId(_id) }).then(user => {
                    req.user = user
                    next()
                }).catch(err => res.json({ response: false, message: err }))
            }
        })
    }
})