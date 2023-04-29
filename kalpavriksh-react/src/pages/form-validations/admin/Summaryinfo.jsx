import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import { Url } from "../../../constant.js/PatientConstant";
import Papa from 'papaparse';
import { useSelector } from "react-redux";

const Summaryinfo = () => {
  const adminDocInfo = useSelector(state => state.adminSignin.adminDocInfo);
  const [patientData, setPatientData] = useState();
  const [patientsPendingPaymentData, setPatientsPendingPaymentData] = useState();
  const [employeeData, setEmployeeData] = useState();
  const formatDateString = (dateString) => {
    const strippedDate = dateString.slice(0, 10);
    return strippedDate
  };

  //employee-data csv
  useEffect(() => {
    if (employeeData) {
      let employeeCsvData = employeeData;
      employeeCsvData.forEach((employee) => {
        employee.programs.forEach((program, index) => {
          Object.keys(program).forEach((key) => {
            employee[`program_${index + 1}_${key}`] = program[key];
          });
        });

        delete employee.programs
      });

      const csvData = Papa.unparse(employeeCsvData);
      const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

      // Create a temporary anchor element to download the CSV file
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "patient.csv";
      link.click();
    }
  }, [employeeData])
  const fetchEmployeeData = async () => {

    fetch(`${Url}/summary/employee-data`, {
      headers: {
        Authorization: `Bearer ${adminDocInfo.token}`,
      },
    })
      .then(response => response.json())
      .then(data => setEmployeeData(data?.data))
      .catch(error => console.error(error))

  }
  //employye-data csv



  // patient-data csv
  useEffect(() => {
    if (patientData) {
      const patientCsvData = patientData.planDetails

      const csvData = Papa.unparse(patientCsvData);
      const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

      // Create a temporary anchor element to download the CSV file
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "patient.csv";
      link.click();
    }
  }, [patientData]);



  const downloadpatientData = () => {
    fetch(`${Url}/summary/patient-data`, {
      headers: {
        Authorization: `Bearer ${adminDocInfo.token}`,
      },
    })
      .then(response => response.json())
      .then(data => setPatientData(data?.data))
      .catch(error => console.error(error));



  }
  // patient-data csv

  // pending-payment csv
  useEffect(() => {
    if (patientsPendingPaymentData) {
      const modifiedPatientsPendingPaymentData = patientsPendingPaymentData?.map((patient) => ({
        ...patient,
        healthPlanStartDate: formatDateString(patient.health_plan_date?.startDate),
        healthPlanId: patient.health_plan?._id,
        healthPlanName: patient.health_plan?.name,
        healthPlanEndDate: formatDateString(patient.health_plan_date?.endDate),
        dob: formatDateString(patient?.dob),
        payment_date: formatDateString(patient?.payment_date),
        next_payment_date: formatDateString(patient?.next_payment_date),
        createdOn: formatDateString(patient?.createdOn),
        primaryTeamIds: JSON.stringify(patient?.primaryTeamIds),
        secondaryTeamIds: JSON.stringify(patient?.secondaryTeamIds),
        observations: JSON.stringify(patient?.observations),
      }));

      const patientCsvData = modifiedPatientsPendingPaymentData?.map(({ __v, health_plan_date, health_plan, ...rest }) => rest); // remove __v property from each object
      const csvData = Papa.unparse(patientCsvData);
      const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

      // Create a temporary anchor element to download the CSV file
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "patientsPendingPaymentData.csv";
      link.click();
      // document.body.removeChild(link);
    }
  }, [patientsPendingPaymentData]);

  const downloadPatientsPendingPaymentData = async () => {
    try {
      const response = await fetch(`${Url}/summary/payment-pendings`, {
        headers: {
          Authorization: `Bearer ${adminDocInfo.token}`,
        },
      });
      const data = await response.json();
      setPatientsPendingPaymentData(data?.data);
    } catch (error) {
      console.error(error);
    }
  };
  // pending payment csv
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

          <button
            // disabled={!patientsPendingPaymentData}
            onClick={downloadPatientsPendingPaymentData}
            type="button"
            className="card__Btn card__Bg--Red card__Btn--Bg-Red"
          >
            Download CSV
          </button>
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

          <button
            // disabled={!patientData}
            onClick={downloadpatientData}
            type="button"
            className="card__Btn card__Bg--Red card__Btn--Bg-Red"
          >
            Download CSV
          </button>

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

          <button
            onClick={fetchEmployeeData}
            type="button"
            className="card__Btn card__Bg--Red card__Btn--Bg-Red"
          >
            Download CSV
          </button>

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