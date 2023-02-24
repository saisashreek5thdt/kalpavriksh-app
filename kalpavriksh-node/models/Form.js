const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "doctor"
    },
    form_title: {
        type: String,
        required: true
    },
    answered: {
        type: Boolean,
        default: false 
    },
    questions: [
        {
            type: {
                type: String,
            },
            question_title: {
                type: String,
            },
            choise1: {
                type: String,
            },
            choise2: {
                type: String,
            },
            choise3: {
                type: String,
            },
            choise4: {
                type: String,
            },
            answers: [{
                patientId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "patient",
                    required: true,
                    unique: true
                },
                data: [String]
            }]
        },
    ],
    status: {
        type: String,
        default: "Active" //De-Active
    },
}, {timestamps: true})

module.exports = mongoose.model('form', FormSchema)
