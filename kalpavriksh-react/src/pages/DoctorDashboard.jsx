import React from "react";

import {PopupButton} from '../Components'

const DoctorDashboard = () => {
  return (
    <React.Fragment>
        <PopupButton className="" />
      <nav class="relative w-full flex flex-wrap items-center justify-between py-3 text-gray-500 hover:text-gray-700 focus:text-gray-700">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div class="container-fluid">
            <a class="text-xl text-black" href="#">
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
            </a>
          </div>
          <div className="flex text-indigo-500">
            <p className="mr-4">
              {JSON.parse(localStorage.getItem("kalpavriksh")).username}
            </p>
            <a
              className="dropdown-toggle flex items-center hidden-arrow"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <rect fill="none" />
                <line
                  x1="127.992"
                  x2="127.992"
                  y1="48.003"
                  y2="124.003"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                  d="M176.00189,54.23268a88,88,0,1,1-96.00346-.00021"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default DoctorDashboard;
