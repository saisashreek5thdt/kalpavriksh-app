const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor')
const Healthplan = require('../models/Healthplan');

const { getPatientId } = require('../utils/getPatientId');
const { getCurrentDate } = require('../utils/currentDate');

module.exports.addPatient = async (req, res) => {
   
    try {
        const patient = await Patient.findOne({email: req.body.email});
        if(patient) {
            return res.status(400).json({
                success: false,
                message: "A patient is already exist with given email Id",
            })
        }

        const health_program = await Healthplan.findOne({ _id: req.body.health_plan});
        if(!health_program) {
            return res.status(400).json({
                success: false,
                message: "A valid health program was not found",
            })
        }

        const newPatient = new Patient({
            patientId: "DAP-"+ await getPatientId(),
            createdOn: getCurrentDate(),
            ...req.body
        });

        await newPatient.save();

        return res.status(200).json({
            success: true,
            message: "Patient added successfully",
            data: newPatient
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
};

module.exports.getAllPatients = async (req, res) => {
    try {
        console.log('--->',req.user.id)
        
        const patients = await Patient.find({
            $or: [
              { primaryTeamIds: { $in: [req.user.id] } },
              { secondaryTeamIds: { $in: [req.user.id] } }
            ]
          }).populate('health_plan')
          
        // .select(["patientId","name", "health_plan"]);
        return res.status(200).json({
            success: true,
            message: "Successfully got all patients",
            data: patients
        })
    } catch(err) { 
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
};

module.exports.getPatient = async (req, res) => {
    try {
        const patient = await Patient.findOne({doctorId: req.user.id, _id: req.params.id}).select(["name", "age", "gender", "phone"]);
        return res.status(200).json({
            success: true,
            message: "Successfully got the patient",
            data: patient
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}; 

module.exports.editPatient = async (req, res) => {
    try {
        await Patient.findByIdAndUpdate( req.params.id, req.body);
        return res.status(200).json({
            success: true,
            message: "Successfully updated the patient",
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
};

module.exports.deactivate = async (req, res) => {
    try {

        const patient = await Patient.findOne({_id: req.params.id, 
            $or: [
                { primaryTeamIds: { $in: [req.user.id] } },
                { secondaryTeamIds: { $in: [req.user.id] } }
          ]})
        if(!patient) {
            return res.status(400).json({
                success: false,
                message: "no patient found for this doctor",
            })
        }

        patient.status = "De-Active";
        patient.statusMessage = req.body.message;

        await patient.save()

        return res.status(200).json({
            success: true,
            message: "Patient deactivated succesfully",
            data: patient
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

module.exports.activate = async (req, res) => {
    try {

        const patient = await Patient.findOne({_id: req.params.id, 
            $or: [
                { primaryTeamIds: { $in: [req.user.id] } },
                { secondaryTeamIds: { $in: [req.user.id] } }
          ]})
        if(!patient) {
            return res.status(400).json({
                success: false,
                message: "no patient found for this doctor",
            })
        }
        
        patient.status = "Active";
        patient.statusMessage = req.body.message;

        await patient.save()

        return res.status(200).json({
            success: true,
            message: "patient activated succesfully",
            data: patient
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
};

module.exports.markPayment = async (req, res) => {
    try {

        const patient = await Patient.findOne({_id: req.params.id, 
            $or: [
                { primaryTeamIds: { $in: [req.user.id] } },
                { secondaryTeamIds: { $in: [req.user.id] } }
          ]})
        if(!patient) {
            return res.status(400).json({
                success: false,
                message: "no patient found for this doctor",
            })
        }
        
        patient.paymentStatus = true;

        await patient.save()

        return res.status(200).json({
            success: true,
            message: "patient paid succesfully",
            data: patient
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
};