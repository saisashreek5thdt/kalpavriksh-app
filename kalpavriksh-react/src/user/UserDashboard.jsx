import React from "react";

import { Container, Link, Button  } from 'react-floating-action-button'

import Navbar from "../pages/shared/Navbar";

const UserDashboard = () => {
  return (
    <>
      <div className="dashboard__Container">
        <Navbar />
        <header className="header__Box">
          <div className="header__Box--Heading">
            <h1 className="header__Box--Heading-Primary">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="dashboard__Content">
            {/* Replace with your content */}
            <div className="dashboard__Content--Box">
              <div className="dashboard__Content--Border" />
              <div>
                <Container>
                    <Link 
                      href="/userrole/:pid/enroll/personalinfo/" 
                      tooltip="Patient Enrollment Form"
                      icon="fas fa-user-plus"
                      text="Patient Enrollment Form"
                      className="fab-item btn btn-link btn-lg text-white"
                    />
                    <Link 
                      href="/userrole/:pid/enroll/healthinfo/" 
                      tooltip="Patient Enrollment Form"
                      icon="fas fa-user-plus"
                      text="Patient Enrollment Form"
                      className="fab-item btn btn-link btn-lg text-white"
                    />
                    <Link 
                      href="/userrole/:pid/enroll/" 
                      tooltip="Patient Enrollment Form"
                      icon="fas fa-user-plus"
                      text="Patient Enrollment Form"
                      className="fab-item btn btn-link btn-lg text-white"
                    />
                    <Button 
                      tooltip="The big plus button!"
                      icon="fas fa-plus"
                      rotate={true}
                      onClick={() => alert('Button Clicked')}
                    />
                </Container>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default UserDashboard;
