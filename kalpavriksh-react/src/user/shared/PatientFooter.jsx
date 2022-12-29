import React from "react";

const PatientFooter = () => {
  return (
    <>
      <footer className="footer__Box">
        <div className="footer__Container">
          <div className="footer__Flex--Box">
            <a
              href="/userrole/:roleid/dashboard/patient/mydata/"
              className="footer__Flex--Links"
            >
              My Data
            </a>
            <a
              href="/userrole/:roleid/dashboard/patient/prescriptions/"
              className="footer__Flex--Links"
            >
              Prescriptions
            </a>
            <a
              href="/userrole/:roleid/dashboard/common/chat/"
              className="footer__Flex--Links"
            >
              Chat
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PatientFooter;
