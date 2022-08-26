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
    <div className="crp">
      <Disclosure as="nav" className="crp__disclosure">
        {({ open }) => (
          <>
            <Navbar />

            <Disclosure.Panel className="crp__disclosure--panel">
              <div className="crp__disclosure--container">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "disclosure--button--success"
                        : "crp__disclosure-button-danger",
                      "crp__disclosure--button"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="nav">
                <div className="nav__container">
                  <div className="nav__container--image">
                    <img
                      className="nav__container--imagetag"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="nav__sub">
                    <div className="nav__sub--username">
                      {user.name}
                    </div>
                    <div className="nav__sub--email">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="nav__sub--button"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="nav__responsive">
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
      <div className="stepper">
        <div className="stepper__container">
          <div className="stepper__body">
            <div className="stepper__body--container">
              <div className="stepper__content">
                {/* Stepper */}
                <div className="stepper__steps">
                  <Stepper steps={steps} currentStep={currentStep} />

                  <div className="stepper__currentstep">
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
  );
};

export default CreatePatient;
