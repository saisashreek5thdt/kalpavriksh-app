import React from "react";
import { useNavigate } from "react-router-dom";

const Summaryinfo = () => {

  let navigate = useNavigate();

  return (
    <>
      <div className="card__Container--Evenly">
        <div className="card__Block">
          <h5 className="card__Heading">
            Pending Payment
            <span className="card__Heading--Span card__Bg--Red">
              Active
            </span>
          </h5>
          <p className="card__Info">
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
          <button
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
            type="button"
            className="card__Btn card__Bg--Teal card__Btn--Bg-Teal"
          >
            Download CSV
          </button>
          <button
            type="button"
            className="card__Btn card__Btn--Gap-1 card__Bg--Teal card__Btn--Bg-Teal"
            onClick={() => navigate('/userrole/:roleid/dashboard/admin/patient/enrolment/view/')}
          >
            View Enrolments
          </button>
        </div>
        <div className="card__Block">
          <h5 className="card__Heading">
            Employee Summary
            <span className="card__Heading--Span card__Bg--Cyan">
              Doctors
            </span>
          </h5>
          <p className="card__Info">
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
          <button
            type="button"
            className="card__Btn card__Bg--Cyan card__Btn--Bg-Cyan"
          >
            Download CSV
          </button>
          <button
            type="button"
            className="card__Btn card__Btn--Gap-2 card__Bg--Cyan card__Btn--Bg-Cyan"
            onClick={() => navigate('/userrole/:roleid/dashboard/admin/summary/employee/view/')}
          >
            View Summary
          </button>
        </div>
      </div>
    </>
  );
};

export default Summaryinfo;
