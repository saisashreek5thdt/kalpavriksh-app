import React from "react";
import PatientNav from "./PatientNav";
import PatienPrescriptionsInfo from "../../pages/form-validations/patient/PatienPrescriptionsInfo";
import PatientAppointmentInfo from "../../pages/form-validations/patient/PatientAppointmentInfo";
import PatientObservation from "../../pages/form-validations/patient/PatientObservation";

const PatientPrescriptions = () => {
  return (
    <>
      <div className="min-h-full">
        <PatientNav />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <ul
                className="nav nav-tabs nav-justified flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
                id="tabs-tabJustify"
                role="tablist"
              >
                <li
                  className="nav-item flex-grow text-center"
                  role="presentation"
                >
                  <a
                    href="#tabs-appointmentJustify"
                    className="nav-link w-full block font-medium text-md leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
                    id="tabs-appointment-tabJustify"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-appointmentJustify"
                    role="tab"
                    aria-controls="tabs-appointmentJustify"
                    aria-selected="true"
                  >
                    Latest Prescriptions
                  </a>
                </li>
                <li
                  className="nav-item flex-grow text-center"
                  role="presentation"
                >
                  <a
                    href="#tabs-mypatientsJustify"
                    className="nav-link w-full block font-medium text-md leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                    id="tabs-mypatients-tabJustify"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-mypatientsJustify"
                    role="tab"
                    aria-controls="tabs-mypatientsJustify"
                    aria-selected="false"
                  >
                    Appointments
                  </a>
                </li>
                <li
                  className="nav-item flex-grow text-center"
                  role="presentation"
                >
                  <a
                    href="#tabs-chatJustify"
                    className="nav-link w-full block font-medium text-md leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                    id="tabs-chat-tabJustify"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-chatJustify"
                    role="tab"
                    aria-controls="tabs-chatJustify"
                    aria-selected="false"
                  >
                    Personal Observations
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="tabs-tabContentJustify">
                <div
                  className="tab-pane fade show active"
                  id="tabs-appointmentJustify"
                  role="tabpanel"
                  aria-labelledby="tabs-appointment-tabJustify"
                >
                  <PatienPrescriptionsInfo />
                  <div className="flex justify-evenly py-9">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                        Prescribed Diet Chart
                        <span className="text-xs inline-block mx-3 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">
                          Latest
                        </span>
                      </h5>
                      <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        View
                      </button>
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                        Prescribed Diet Chart
                        <span className="text-xs inline-block mx-3 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded-full">
                          Old
                        </span>
                      </h5>
                      <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tabs-mypatientsJustify"
                  role="tabpanel"
                  aria-labelledby="tabs-mypatients-tabJustify"
                >
                 <PatientAppointmentInfo /> 
                </div>
                <div
                  className="tab-pane fade"
                  id="tabs-chatJustify"
                  role="tabpanel"
                  aria-labelledby="tabs-chat-tabJustify"
                >
                  <PatientObservation />
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
      <footer className="relative text-center text-white">
        <div className="container pt-9 bg-gray-600 w-full fixed bottom-0 left-0">
          <div className="flex justify-center mb-9">
            <a
              href="/userrole/:roleid/dashboard/patient/mydata/"
              className="mr-9 text-white"
            >
              My Data
            </a>
            <a
              href="/userrole/:roleid/dashboard/patient/prescriptions/"
              className="mr-9 text-white font-bold"
            >
              Prescriptions
            </a>
            <a
              href="/userrole/:roleid/dashboard/common/chat/"
              className="mr-9 text-white"
            >
              Chat
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PatientPrescriptions;
