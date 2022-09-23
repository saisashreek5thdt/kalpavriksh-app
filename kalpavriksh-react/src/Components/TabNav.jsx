import EnrollPatient from "../pages/form-validations/Enroll-Patient";
import CreateForm from "../pages/form-validations/Create-Form";
import UploadDietChart from "../pages/form-validations/Upload-Diet-Chart";
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
            href="#tabs-homeJustify"
            className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
            id="tabs-home-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-homeJustify"
            role="tab"
            aria-controls="tabs-homeJustify"
            aria-selected="true"
          >
            Enroll Patient
          </a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-profileJustify"
            className=" nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent "
            id="tabs-profile-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profileJustify"
            role="tab"
            aria-controls="tabs-profileJustify"
            aria-selected="false"
          >
            Create Form
          </a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-messagesJustify"
            className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-messages-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messagesJustify"
            role="tab"
            aria-controls="tabs-messagesJustify"
            aria-selected="false"
          >
            Upload DietChart
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContentJustify">
        <div
          className="tab-pane fade show active"
          id="tabs-homeJustify"
          role="tabpanel"
          aria-labelledby="tabs-home-tabJustify"
        >
          <EnrollPatient />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-profileJustify"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabJustify"
        >
          <CreateForm />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-messagesJustify"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabJustify"
        >
          <UploadDietChart />
        </div>
      </div>
    </>
  );
};

export default TabNav;
