import React, { Fragment, useEffect, useState } from "react";
import { useHistory, NavLink, Link } from "react-router-dom";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";

import "tw-elements";

import PatientPersonalInfo from "./patient/PatientPersonalInfo"

import PatientHealthInfo from "./patient/PatientHealthInfo";

import PatientPaymentInfo from "./patient/PatientPaymentInfo";
import Navbar from "./Navbar";

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
const userNavigation = [
  { name: `${role}`, href: "#" },
  { name: "Sign out", href: "#", onClick: "logoutHandler()" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CreatePatient = () => {

  const [isShown, setIsShown] = useState('start');

  const formStateLoader = (event) => {
    event.preventDefault();
    setIsShown(current => !current);
  };

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/userrole/patient");
  };

  return (
    <>
      <div>

        <div className="min-h-full">
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
          <div className="container mx-auto">
            <ul class="stepper" data-mdb-stepper="stepper">
              <li class="stepper-step stepper-active">
                <div class="stepper-head">
                  <span class="stepper-head-icon"> 1 </span>
                  <span class="stepper-head-text"> step1 </span>
                </div>
                <div class="stepper-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </div>
              </li>
              <li class="stepper-step">
                <div class="stepper-head">
                  <span class="stepper-head-icon"> 2 </span>
                  <span class="stepper-head-text"> step2 </span>
                </div>
                <div class="stepper-content">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </li>
              <li class="stepper-step">
                <div class="stepper-head">
                  <span class="stepper-head-icon"> 3 </span>
                  <span class="stepper-head-text"> step3 </span>
                </div>
                <div class="stepper-content">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
              </li>
            </ul>
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST" onSubmit={submitHandler}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-3 bg-gray-500 text-center sm:px-6">
                        <p>Step 1 Form</p>
                      </div>
                      <PatientPersonalInfo />
                      <div className="px-4 py-3 bg-gray-500 text-center sm:px-6">
                        <p>Step 2 Form</p>
                      </div>

                      <PatientHealthInfo />
                      <div className="grid grid-cols-6">
                        <div className="col-span-6 sm:col-span-3">
                          <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <ChevronLeftIcon
                                className="h-5 w-5 text-white"
                                aria-hidden="true"
                              />
                              Previous
                            </button>
                          </div>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Next
                              <ChevronRightIcon
                                className="h-5 w-5 text-white"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-3 bg-gray-500 text-center sm:px-6">
                        <p>Step 3 Form</p>
                      </div>
                      <PatientPaymentInfo />
                      <div className="grid grid-cols-6 bg-gray-50">
                        <div className="col-span-6 sm:col-span-3">
                          <div className="px-10 py-3 text-left sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <div className="px-4 py-3 text-right sm:px-6">
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
          </div>
        </div>
      </div>


    </>
  );
};

export default CreatePatient;
