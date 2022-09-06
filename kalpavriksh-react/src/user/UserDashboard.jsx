import React from "react";

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
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default UserDashboard;
