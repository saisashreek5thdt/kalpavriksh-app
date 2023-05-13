const mongoose = require('mongoose');

const Healthplan = new mongoose.Schema({
    name: String,
    duration: Number,
    price: Number,
    doctorFollowup: String,
    seniorDietecianFollowup: String,
    dietecianFollowup: String,
    file: String,
});

module.exports = mongoose.model('healthplan', Healthplan);