const mongoose = require('mongoose');

const Patient = new mongoose.Schema({
    primaryTeamIds: [String],
    secondaryTeamIds: [String],
    patientId: {
        type: String,
    },
    logo: {
        type: String,
    },
    phone: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        required: true
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    caretakers_name: {
        type: String
    },
    caretakers_relation: {
        type: String
    },
    caretakers_phone: {
        type: Number
    },
    caretakers_time: {
        type: String
    },
    health_plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "healthplan"
    },
    health_plan_date: {
        startDate: Date,
        endDate: Date
    },
    amount: {
        type: Number
    },
    payment_mode: {
        type: String
    },
    payment_date: {
        type: Date
    },
    ref_id: {
        type: String
    },
    next_payment_date: {
        type: Date
    },
    observations: [{
        desc: {
            type: String,
        },
        createdOn: Date,
    }],
    otp: String,
    otpExpiresIn: String,
    createdOn: Date,
    status: {
        type: String,
        default: "Active" //De-Active
    },
    statusMessage: String,
    paymentStatus: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('patient', Patient)