const mongoose = require('mongoose')

const Doctor = new mongoose.Schema({
    name: String,
    role: String,
    email: String,
    phone: Number,
    registration_no: String,
    avatar: String,
    status: {
        type: String,
        default: "Active" //De-Active
    },
    otp: String,
    otpExpiresIn: String,
    createdOn: Date,
})

module.exports = mongoose.model('doctor', Doctor)