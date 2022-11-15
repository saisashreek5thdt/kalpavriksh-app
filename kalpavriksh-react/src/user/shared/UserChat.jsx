import React from "react";
import PatientNav from "./PatientNav";

import ChatUI from "../../pages/shared/ChatUI";

const UserChat = () => {
  return (
    <>
      <div className="min-h-full">
        <PatientNav />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard - Chat Page</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <ChatUI />
            {/* /End replace */}
          </div>
        </main>
      </div>
      <footer className="relative text-center text-white">
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
      </footer>
    </>
  );
};

export default UserChat;
