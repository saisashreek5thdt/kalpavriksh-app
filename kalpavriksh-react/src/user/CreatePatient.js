import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Stepper from './Stepper'
import StepperControl from "./StepperControl";

import PatientPersonalInfo from "./steps/PatientPersonalInfo";
import PatientHealthInfo from "./steps/PatientHealthInfo";
import PatientPaymentInfo from './steps/PatientPaymentInfo'

import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";

import "tw-elements";

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
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="mx-auto w-full max-w-4xl md:max-w-2xl sm:max-w-xl rounded-2xl bg-white pb-2 shadow-xl">
                      {/* Stepper */}
                      <div className="horizontal container mt-5 w-full max-w-4xl md:max-w-2xl sm:max-w-xl">
                        <Stepper steps={steps} currentStep={currentStep} />

                        <div className="my-10 p-10 w-full max-w-4xl md:max-w-2xl sm:max-w-xl">
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
        </div>
      </div>


    </>
  );
};

export default CreatePatient;
