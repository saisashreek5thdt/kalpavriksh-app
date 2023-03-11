import React from "react";
import { json, useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";



const Summaryinfo = () => {
  const doctors= [
      {
        "name": "Dr. Suha",
        "primaryPatients": 150,
        "secondaryPatients": 48,
        "programs": [
          {
            "programName": "Program 1",
            "activePatients": 150,
            "newPatients": 48
          },
          {
            "programName": "Program 2",
            "activePatients": 78,
            "newPatients": 14
          }
        ]
      },
      {
        "name": "Dr. John",
        "primaryPatients": 100,
        "secondaryPatients": 32,
        "programs": [
          {
            "programName": "Program 3",
            "activePatients": 100,
            "newPatients": 32
          },
          {
            "programName": "Program 4",
            "activePatients": 60,
            "newPatients": 12
          }
        ]
      },
      {
        "name": "Dr. Sarah",
        "primaryPatients": 75,
        "secondaryPatients": 20,
        "programs": [
          {
            "programName": "Program 5",
            "activePatients": 75,
            "newPatients": 20
          },
          {
            "programName": "Program 6",
            "activePatients": 40,
            "newPatients": 8
          }
        ]
      }
    ]
    const transformedData = doctors.map(doctor => {
      const doctorObj = {
        "Doctor Name": doctor.name,
        "Primary Patients": doctor.primaryPatients,
        "Secondary Patients": doctor.secondaryPatients
      };
    
      doctor.programs.forEach(program => {
        doctorObj[program.programName] = "Yes";
        doctorObj[`${program.programName}_activePatients`] = program.activePatients;
        doctorObj[`${program.programName}_newPatients`] = program.newPatients;
      });
    
      return doctorObj;
    });
    console.log("transformed_data",transformedData)
    const headers = [
      { label: 'Doctor Name', key: 'Doctor Name' },
      { label: 'Primary Patients', key: 'Primary Patients' },
      { label: 'Secondary Patients', key: 'Secondary Patients' }
    ];
    
    // Get an array of all program names
    const programNames = doctors.flatMap(doctor => doctor.programs.map(program => program.programName));
    console.log("programs",programNames)
    // Iterate over program names and add them as headers
    programNames.forEach(programName => {
      headers.push({ label: programName, key: programName });
      headers.push({ label: `${programName} Active Patients`, key: `${programName}_activePatients` });
      headers.push({ label: `${programName} New Patients`, key: `${programName}_newPatients` });
    });
    
  
   
  

 const PatientEnrolments =  [
  {
    programName: 'Program 1',
    activePatients: '150',
    newPatients: '48',
  },
  {
    programName: 'Program 2',
    activePatients: '100',
    newPatients: '25',
  },
  {
    programName: 'Program 3',
    activePatients: '75',
    newPatients: '10',
  },
]
  let navigate = useNavigate();

  return (
    <>
      <div className="card__Container--Evenly">
        <div className="card__Block">
          <h5 className="card__Heading">
            Pending Payment
            <span className="card__Heading--Span card__Bg--Red">Active</span>
          </h5>
          <p className="card__Info">
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
          {/* <CSVLink data={PatientEnrolments} filename={"PatientEnrolments.csv"}> */}
            <button
              type="button"
              className="card__Btn card__Bg--Red card__Btn--Bg-Red"
            >
              Download CSV 
            </button>
          {/* </CSVLink> */}
        </div>
        <div className="card__Block">
          <h5 className="card__Heading">
            Patient Enrolment
            <span className="card__Heading--Span card__Bg--Teal">
              Per Program
            </span>
          </h5>
          <p className="card__Info">
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
          <CSVLink data={PatientEnrolments} filename={"PatientEnrolments.csv"}>
            <button
              type="button"
              className="card__Btn card__Bg--Red card__Btn--Bg-Red"
            >
              Download CSV 
            </button>
          </CSVLink>
          <button
            type="button"
            className="card__Btn card__Btn--Gap-1 card__Bg--Teal card__Btn--Bg-Teal"
            onClick={() =>
              navigate(
                "/userrole/:roleid/dashboard/admin/patient/enrolment/view/"
              )
            }
          >
            View Enrolments
          </button>
        </div>
        <div className="card__Block">
          <h5 className="card__Heading">
            Employee Summary
            <span className="card__Heading--Span card__Bg--Cyan">Doctors</span>
          </h5>
          <p className="card__Info">
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
          <CSVLink data={transformedData} headers={headers} filename={"doctors.csv"}>
            <button
              type="button"
              className="card__Btn card__Bg--Red card__Btn--Bg-Red"
            >
              Download CSV 
            </button>
          </CSVLink>
          <button
            type="button"
            className="card__Btn card__Btn--Gap-2 card__Bg--Cyan card__Btn--Bg-Cyan"
            onClick={() =>
              navigate(
                "/userrole/:roleid/dashboard/admin/summary/employee/view/"
              )
            }
          >
            View Summary
          </button>
        </div>
      </div>
    </>
  );
};

export default Summaryinfo;