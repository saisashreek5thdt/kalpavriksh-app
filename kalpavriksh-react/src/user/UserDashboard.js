import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Stepper from './Stepper'
import StepperControl from "./StepperControl";

import PatientPersonalInfo from "./steps/PatientPersonalInfo";
import PatientHealthInfo from "./steps/PatientHealthInfo";
import PatientPaymentInfo from './steps/PatientPaymentInfo'

import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";

import Navbar from './Navbar';

const authenticateduser = JSON.parse(localStorage.getItem('kalpavriksh'))

// const role = typeof (JSON.parse(localStorage.getItem("kalpavriksh"))) === 'object' ? JSON.parse(localStorage.getItem("kalpavriksh")).username : undefined
const role = authenticateduser ? authenticateduser.username : null

// const email = JSON.parse(localStorage.getItem("kalpavriksh")).email;
const email = authenticateduser ? authenticateduser.email : null

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
//////////////////////////////////////////////////////////////////////////////////////////// Create Form Code Starts
const CreateForm = () => {
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/userrole/");
  };
  return (<div className="container mx-auto">
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST" onSubmit={submitHandler}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="px-4 py-5 grid grid-rows-10 gap-8">
                  <div className="col-span-12 sm:col-span-3">
                    <label
                      htmlFor="form-title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Form Title
                    </label>
                    <input
                      type="text"
                      name="form-title"
                      id="form-title"
                      autoComplete="form-title"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="px-0 py-2 grid grid-rows-10 gap-8">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="px-4 py-3 text-left sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add Question
                      </button>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-5 grid grid-rows-10 gap-8">
                  <div className="col-span-12 sm:col-span-3">
                    <label
                      htmlFor="question-type"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Question Type
                    </label>
                    <select
                      id="question-type"
                      name="question-type"
                      autoComplete="question-type"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Select Question Type</option>
                      <option>Input</option>
                      <option>M.C.Q's - Radio</option>
                      <option>M.C.Q's - Checkbox</option>
                    </select>
                  </div>
                </div>

                <div className="px-4 py-5 grid grid-rows-10 gap-8">
                  <div className="col-span-12 sm:col-span-3">
                    <label
                      htmlFor="question-title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Question Title
                    </label>
                    <input
                      type="text"
                      name="question-title"
                      id="question-title"
                      autoComplete="question-title"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="px-4 py-5 grid grid-cols-10 gap-8">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="question-num-1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Question
                    </label>
                    <input
                      type="text"
                      name="question-num-1"
                      id="question-num-1"
                      autoComplete="question-num-1"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="question-num-1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Question Choice
                    </label>
                    <input
                      type="text"
                      name="question-num-2"
                      id="question-num-2"
                      autoComplete="question-num-2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="question-num-3"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Question Choice
                    </label>
                    <input
                      type="text"
                      name="question-num-3"
                      id="question-num-3"
                      autoComplete="question-num-3"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="question-num-4"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Question Choice
                    </label>
                    <input
                      type="text"
                      name="question-num-4"
                      id="question-num-4"
                      autoComplete="question-num-4"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="question-num-5"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Question Choice
                    </label>
                    <input
                      type="text"
                      name="question-num-5"
                      id="question-num-5"
                      autoComplete="question-num-5"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="question-num-6"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Question Choice
                    </label>
                    <input
                      type="text"
                      name="question-num-6"
                      id="question-num-6"
                      autoComplete="question-num-6"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="col-span-6 sm:col-span-3">
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>)
}

//////////////////////////////////////////////////////////////////////////////////////////// Create Form Code Ends

//////////////////////////////////////////////////////////////////////////////////////////// Upload Diet Chart Code Starts

const UploadDietChart = () => {
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/userrole/");
  };
  return (
    <div className="container mx-auto">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST" onSubmit={submitHandler}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="px-4 py-5 grid grid-cols-6 gap-8">
                    <div className="col-span-12 sm:col-span-3">
                      <label
                        htmlFor="lower-value"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Calories Range (Lower Value)
                      </label>
                      <input
                        type="text"
                        name="lower-value"
                        id="lower-value"
                        autoComplete="lower-value"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-3">
                      <label
                        htmlFor="upper-value"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Calories Range (Upper Value)
                      </label>
                      <input
                        type="text"
                        name="upper-value"
                        id="upper-value"
                        autoComplete="upper-value"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="px-4 py-5 grid grid-cols-6 gap-8">
                    <div className="col-span-12 sm:col-span-3">
                      <label
                        htmlFor="lower-value"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Carbohydrates Range (Lower Value)
                      </label>
                      <input
                        type="text"
                        name="lower-value"
                        id="lower-value"
                        autoComplete="lower-value"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-3">
                      <label
                        htmlFor="upper-value"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Carbohydrates Range (Upper Value)
                      </label>
                      <input
                        type="text"
                        name="upper-value"
                        id="upper-value"
                        autoComplete="upper-value"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="px-4 py-5 grid grid-cols-6 gap-8">
                    <div className="col-span-12 sm:col-span-3">
                      <label
                        htmlFor="protiens"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Protiens
                      </label>
                      <input
                        type="text"
                        name="protiens"
                        id="protiens"
                        autoComplete="protiens"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-3">
                      <label
                        htmlFor="fats"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Fats
                      </label>
                      <input
                        type="text"
                        name="fats"
                        id="fats"
                        autoComplete="fats"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="px-4 py-5 grid grid-cols-6 gap-8">
                    <div className="col-span-12 sm:col-span-3">
                      <label
                        htmlFor="veg-nonveg-egg"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Veg/Non-Veg/Egg
                      </label>
                      <input
                        type="text"
                        name="veg-nonveg-egg"
                        id="veg-nonveg-egg"
                        autoComplete="veg-nonveg-egg"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-3">
                      <label
                        htmlFor="cuisine"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cuisine
                      </label>
                      <select
                        id="cuisine"
                        name="cuisine"
                        autoComplete="cuisine"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Select Cuisine</option>
                        <option>Cuisine A</option>
                        <option>Cuisine B</option>
                        <option>Cuisine C</option>
                      </select>
                    </div>

                    <div className="px-0 py-2 grid grid-rows-10 gap-8">
                      <div className="col-span-6 sm:col-span-3">
                        <div className="px-4 py-3 text-left sm:px-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Cover photo
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                  <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                  >
                                    <span>Upload a file</span>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      className="sr-only"
                                    />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="col-span-6 sm:col-span-3">
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const UserDashboard = () => {

  const history = useHistory();

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Step 1",
    "Step 2",
    "Step 3",
    "Complete",
  ];

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
      <div className="h-screen">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <Navbar />
              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
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


        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog relative w-full pointer-events-none">
            <div
              class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div
                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                  Create Patient
                </h5>
                <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body relative p-4">
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

        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog relative w-full pointer-events-none">
            <div
              class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div
                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                  Create Form
                </h5>
                <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body relative p-4">
                {/* <PatientPersonalInfo /> */}
                {CreateForm()}
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog relative w-full pointer-events-none">
            <div
              class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div
                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                  Create Form
                </h5>
                <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body relative p-4">
                {/* <PatientPersonalInfo /> */}
                {UploadDietChart()}
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
          <div class="grid place-items-end mr-24 mt-96">
            <div>
              <div class="dropup relative">
                <button type="button" className="dropdown-toggle inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9" type="button"
                  id="dropdownMenuButton1u"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 mx-auto bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /> </svg>
                </button>
                <ul
                  class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1u">
                  <li>
                    <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">Upload DietChart</a>
                  </li>
                  <li>
                    <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Create Form</a>
                  </li>


                  <li>
                    <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create Patient</a>
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
