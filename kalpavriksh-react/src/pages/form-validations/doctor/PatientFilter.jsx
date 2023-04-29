import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Url } from "../../../constant.js/PatientConstant";

const PatientFilter = ({ handleClick }) => {
  const [patientName, setPatientName] = useState("");
  const [healthPlan, setHealthPlan] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [patientType, setPatientType] = useState("");
  const [healthPlanOptions, setHealthPlanOptions] = useState([]);
  const [optionsError, setOptionsError] = useState(null);
  const doctorSignin = useSelector((state) => state.doctorSignin);
  const { doctorInfo } = doctorSignin;
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClick({
      patientName,
      healthPlan,
      paymentStatus,
      patientType,
    });
  };
  async function fetchData() {
    try {
      const response = await fetch(`${Url}/health-plan`, {
        headers: {
          Authorization: `Bearer ${doctorInfo.token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setHealthPlanOptions([

        ...(json?.data.flatMap((opt) => ({ value: opt.name, label: opt.name })))

      ]);
    } catch (err) {
      setOptionsError(err.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="card__Block">
        <h5 className="card__Heading">
          Search Patient Data
          <span className="card__Heading--Span card__Bg--Teal">Filters</span>
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="form__Grid--Rows-none">
            <div className="form__Cols--Span-6">
              <input
                type="text"
                name="patient-name"
                id="patient-name"
                autoComplete="patient-name"
                className="form__Input"
                placeholder="Search by Enter Patient Name / Phone Number"
                value={patientName}
                onChange={(event) => setPatientName(event.target.value)}
              />
            </div>
            <div className="form__Cols--Span-6">
              <select
                id="health-plan"
                name="health-plan"
                autoComplete="health-plan"

                className="form__Select"
                value={healthPlan}
                onChange={(event) => setHealthPlan(event.target.value)}
              >
                <option value="" data-default>
                  Select Programs Enrolled (Health Plan)
                </option>
                {healthPlanOptions?.map((option) => <option>{option.value}</option>)}
              </select>
            </div>
            <div className="form__Cols--Span-6">
              <select
                id="payment-status"
                name="payment-status"
                autoComplete="payment-status"
                className="form__Select"
                value={paymentStatus}
                onChange={(event) => setPaymentStatus(event.target.value)}
              >
                <option value="" data-default>
                  Select Payment Status
                </option>
                <option>Active</option>
                <option>De-Active</option>
              </select>
            </div>
            <div className="form__Cols--Span-6">
              <select
                id="patient-type"
                name="patient-type"
                autoComplete="patient-type"
                className="form__Select"
                value={patientType}
                onChange={(event) => setPatientType(event.target.value)}
              >
                <option value="" data-default>
                  Select Patient Type
                </option>
                <option>Primary</option>
                <option>Secondary</option>
              </select>
            </div>
            <div className="form__Cols--Span-6">
              <button
                //  onClick={handleClick}
                type="submit"
                className="card__Btn card__Bg--Teal card__Btn--Bg-Teal"
              >
                Search Patient
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PatientFilter;