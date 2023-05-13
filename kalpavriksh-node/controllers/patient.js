const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor')
const Healthplan = require('../models/Healthplan');

const { getPatientId } = require('../utils/getPatientId');
const { getCurrentDate } = require('../utils/currentDate');
const uploadFiles = require('../functions/uploadFile');

module.exports.addPatient = async (req, res) => {
   //console.log(req.body);
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
            photo: req.files.length > 0 ? await uploadFiles(req.files) : undefined,
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
        const patient = await Patient.findById(req.params.id)
        if(!patient) {
            return res.status(400).json({
                success: false,
                message: "no patient found",
            })
        }

        const patient1 = await Patient.findOne({email: req.body.email, _id: { $ne: req.params.id }});
        if(patient1) {
            return res.status(400).json({
                success: false,
                message: "A patient is already exist with given email Id",
            })
        }

        patient.health_plan_date = req.body.health_plan_date,
        patient.primaryTeamIds =  req.body.primaryTeamIds,
        patient.secondaryTeamIds =  req.body.secondaryTeamIds,
        patient.phone = req.body.phone,
        patient.name =  req.body.name,
        patient.email = req.body.email,
        patient.dob = req.body.dob,
        patient.gender = req.body.gender,
        patient.height = req.body.height,
        patient.weight = req.body.weight,
        patient.caretakers_name = req.body.caretakers_name,
        patient.caretakers_relation = req.body.caretakers_relation,
        patient.caretakers_phone = req.body.caretakers_phone,
        patient.caretakers_time = req.body.caretakers_time,
        patient.health_plan = req.body.health_plan,
        patient.amount = req.body.amount,
        patient.payment_mode = req.body.payment_mode,
        patient.payment_date = req.body.payment_date,
        patient.ref_id = req.body.ref_id,
        patient.next_payment_date =  req.body.next_payment_date,
        patient.observations = req.body.observations,
        //patient.photo = req.files.length > 0 ? await uploadFiles(req.files) : patient.photo;
        
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