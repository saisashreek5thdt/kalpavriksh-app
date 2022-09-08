import { Link } from "react-router-dom";
const FloatingButton = () => {
  return (
    <div className="fixed right-5 bottom-5">
      <div className="">
        <div className="dropup relative">
          <button
            className="dropdown-toggle px-6 py-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
            type="button"
            id="dropdownMenuButton1u"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            +
          </button>
          <ul
            className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
            aria-labelledby="dropdownMenuButton1u"
          >
            <li>
              <Link
                className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "
                to="/userrole/:pid/enroll/"
              >
                Create Patient
              </Link>
            </li>
            <li>
              <Link
                className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "
                to="/userrole/:pid/form/createform/"
              >
                Create Form
              </Link>
            </li>
            <li>
              <Link
                className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "
                to="/userrole/:pid/form/dietform/"
              >
                Upload Diet Chart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;
