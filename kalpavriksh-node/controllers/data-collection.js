const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Form = require('../models/Form');
const DietChart = require('../models/DietChart');
const Presc = require("../models/Presc");

const { getFormatDate } = require('../utils/common');

module.exports.getPatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.patientId)
        if(!patient) {
            return res.status(400).json({
                success: false,
                message: "patient not found",
            })
        }
        
        res.status(200).json({
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

module.exports.getForm = async (req, res) => {
    try {
        const form = await Form.findById(req.params.formId).populate('doctorId', ['name', 'email']);
        if(!form) {
            return res.status(400).json({
                success: false,
                message: "form not found",
            })
        }
        
        res.status(200).json({
            success: true,
            message: "Form successfully fetched",
            data: form
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

module.exports.employeePerformance = async (req, res) => {
    try {
        //[ 'diet-chart', 'form', 'prescription' ]

        const dateFilter = req.query.from ? (req.query.to ? { createdOn:{
            $gte: getFormatDate(req.query.from),
            $lte: getFormatDate(req.query.to)
        } }: { createdOn:{
            $gte: getFormatDate(req.query.from)
        } }): (req.query.to ? { createdOn:{
            $lte: getFormatDate(req.query.to)
        } }: { }) 
        let data = ''

        switch(req.query.activity) {
            case 'form': 
                data = await Form.find({...dateFilter}).populate('doctorId', ['name', 'email']);
                break;
            case 'diet-chart':
                data = await DietChart.find({...dateFilter}).populate('doctorId', ['name', 'email']);
                break;
            case 'prescription':
                data = await Presc.find({...dateFilter}).populate([
                    { path: "doctorId", select: ["name", "email"] },
                    { path: "patientId", select: ["name", "email"] },
                  ]);
                break;
            default: return res.status(400).json({
                success: false,
                message: "No valid activity selected",
            })
        }

        res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            data
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}