import PatientInfo from "../pages/form-validations/PatientInfo";
import PatientDoctorInfo from "../pages/form-validations/PatientDoctorInfo";

const TabNav = () => {
  return (
    <>
      <ul
        className="nav nav-tabs nav-justified flex flex-col md:flex-row flex-frow list-none border-b-0 pl-0 mb-4"
        id="tabs-tabJustify"
        role="tablist"
      >
        <li className="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-appointmentsJustify"
            className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-appointments-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-appointmentsJustify"
            role="tab"
            aria-controls="tabs-appointmentsJustify"
            aria-selected="false"
          >
            Appointments
          </a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-mypatientsJustify"
            className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-mypatients-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-mypatientsJustify"
            role="tab"
            aria-controls="tabs-mypatientsJustify"
            aria-selected="false"
          >
            My Patients
          </a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-chatJustify"
            className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-chat-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-chatJustify"
            role="tab"
            aria-controls="tabs-chatJustify"
            aria-selected="false"
          >
            Chat
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContentJustify">
        <div
          className="tab-pane fade"
          id="tabs-appointmentsJustify"
          role="tabpanel"
          aria-labelledby="tabs-appointments-tabJustify"
        >
          <PatientInfo />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-mypatientsJustify"
          role="tabpanel"
          aria-labelledby="tabs-mypatients-tabJustify"
        >
          <PatientDoctorInfo />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-chatJustify"
          role="tabpanel"
          aria-labelledby="tabs-chat-tabJustify"
        >
          Chat Section
        </div>
      </div>
    </>
  );
};

export default TabNav;
