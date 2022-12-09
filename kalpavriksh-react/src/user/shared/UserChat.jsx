import React from "react";
import PatientNav from "./PatientNav";

import ChatUI from "../../pages/shared/ChatUI";

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
      {/* <footer className="relative text-center text-white">
        <div className="container -my-5 pt-9 bg-gray-600 w-full h-auto fixed bottom-0 left-0">
          <div className="flex justify-center mb-9">
            <a
              href="/userrole/:roleid/dashboard/patient/mydata/"
              className="mr-9 text-white"
            >
              My Data
            </a>
            <a
              href="/userrole/:roleid/dashboard/patient/prescriptions/"
              className="mr-9 text-white"
            >
              Prescriptions
            </a>
            <a href="/userrole/:roleid/dashboard/common/chat/" className="mr-9 text-white font-bold">
              Chat
            </a>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default UserChat;
