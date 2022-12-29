import React from "react";
import PatientNav from "./PatientNav";

import ChatUI from "../../pages/shared/ChatUI";
import PatientFooter from "./PatientFooter";

const UserChat = () => {
  return (
    <>
      <div className="dashboard__Container">
        <PatientNav />
        <header className="header__Shadow">
          <div className="header__Container">
            <h1 className="header__Heading--Primary">Dashboard - Chat Page</h1>
          </div>
        </header>
        <main>
          <div className="dashboard__Main-Content">
            {/* Replace with your content */}
            <ChatUI />
            {/* /End replace */}
          </div>
        </main>
      </div>
      <PatientFooter />
    </>
  );
};

export default UserChat;
