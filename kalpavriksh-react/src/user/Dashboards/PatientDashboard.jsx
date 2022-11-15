import React from "react";
import PatientNav from "../shared/PatientNav";

const PatientDashboard = () => {
  return (
    <>
      <div className="min-h-full">
        <PatientNav />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
      <footer className="relative text-center text-white">
        <div className="container w-full pt-9 bg-gray-600 fixed bottom-0 left-0 right-0">
          <div className="flex justify-center mb-9">
            <a
              href="/userrole/:roleid/dashboard/patient/mydata/"
              className="mr-9 text-white"
            >
              My Data
            </a>
            <a href="/userrole/:roleid/dashboard/patient/prescriptions/" className="mr-9 text-white">
              Prescriptions
            </a>
            <a href="/userrole/:roleid/dashboard/common/chat/" className="mr-9 text-white">
              Chat
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PatientDashboard;
