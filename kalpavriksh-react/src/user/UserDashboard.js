import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { CreateFormComponent, UploadDietChartComponent } from "../Components";

import Stepper from "./Stepper";
import StepperControl from "./StepperControl";

import PatientPersonalInfo from "./steps/PatientPersonalInfo";
import PatientHealthInfo from "./steps/PatientHealthInfo";
import PatientPaymentInfo from "./steps/PatientPaymentInfo";

import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";

import Navbar from "./Navbar";

const authenticateduser = JSON.parse(localStorage.getItem("kalpavriksh"));

// const role = typeof (JSON.parse(localStorage.getItem("kalpavriksh"))) === 'object' ? JSON.parse(localStorage.getItem("kalpavriksh")).username : undefined
const role = authenticateduser ? authenticateduser.username : null;

// const email = JSON.parse(localStorage.getItem("kalpavriksh")).email;
const email = authenticateduser ? authenticateduser.email : null;

const user = {
  name: `${role}`,
  email: `${email}`,
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", onclick: "", current: true },
  // { name: "Enroll Patient", href: "#", onclick: `${enrolPatientHandler}`, current: true },
  { name: "Create Form", href: "#", onclick: "", current: false },
  { name: "Upload Diet Chart", href: "#", onclick: "", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserDashboard = () => {
  const history = useHistory();

  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Step 1", "Step 2", "Step 3", "Complete"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PatientPersonalInfo />;
      case 2:
        return <PatientHealthInfo />;
      case 3:
        return <PatientPaymentInfo />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const logoutHandler = (event) => {
    event.preventDefault();
    history.push("/");
  };

  const enrolPatientHandler = () => {
    email.preventDefault();
    history.current(true);
    history.push("/userrole/createPatient");
  };

  return (
    <>
      <div className="body">
        <Disclosure as="nav" className="disclosure">
          {({ open }) => (
            <>
              <Navbar />
              <Disclosure.Panel className="disclosure__panel">
                <div className="disclosure__container">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "disclosure__item--current"
                          : "disclosure__item--current--danger",
                        "disclosure__item"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="mobile">
                  <div className="mobile__container">
                    <div className="mobile__img">
                      <img
                        className="mobile__imgtag"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="mobile__name">
                      <div className="mobile__username">
                        {user.name}
                      </div>
                      <div className="mobile__email">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mobile__button"
                    >
                      <span className="mobile__span">View notifications</span>
                      <BellIcon className="mobile__icon" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="navigation">
                    {/* {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))} */}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog relative w-full max-w-4xl md:max-w-2xl sm:max-w-xl pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Create Patient
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body w-full max-w-4xl md:max-w-2xl sm:max-w-xl relative p-4">
                {/* <PatientPersonalInfo /> */}
                <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl">
                  {/* Stepper */}
                  <div className="horizontal container mt-5 ">
                    <Stepper steps={steps} currentStep={currentStep} />

                    <div className="my-10 p-10 ">
                      {displayStep(currentStep)}
                    </div>
                  </div>

                  {/* navigation button */}
                  {currentStep !== steps.length && (
                    <StepperControl
                      handleClick={handleClick}
                      currentStep={currentStep}
                      steps={steps}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog relative w-full pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Create Form
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body w-full max-w-4xl md:max-w-2xl sm:max-w-xl relative p-4">
                {<CreateFormComponent />}
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade fixed top-0 left-0 hidden w-full max-w-4xl md:max-w-2xl sm:max-w-xl h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdrop2"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog relative w-full pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Create Form
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4">
                {/* <PatientPersonalInfo /> */}
                {<UploadDietChartComponent />}
              </div>
            </div>
          </div>
        </div>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="grid place-items-center ml-96 mt-96 py-44">
            <div>
              <div className="dropup relative">
                <button
                  type="button"
                  className="dropdown-toggle inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9"
                  id="dropdownMenuButton1u"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 mx-auto bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
                  </svg>
                </button>
                <ul
                  className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                  aria-labelledby="dropdownMenuButton1u"
                >
                  <li>
                    <a
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop2"
                    >
                      Upload DietChart
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop1"
                    >
                      Create Form
                    </a>
                  </li>

                  <li>
                    <a
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Create Patient
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserDashboard;
