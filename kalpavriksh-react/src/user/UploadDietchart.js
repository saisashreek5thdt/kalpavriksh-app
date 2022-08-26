import React from "react";
import { useHistory } from "react-router-dom";

import {UploadDietChartComponent} from '../Components'

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

const UploadDietchart = () => {
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/userrole/");
  };

  return (
    <>
      <div>
        {/* <h2>User Dashboard - {role}</h2> */}
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
                            ? "disclosure__current"
                            : "disclosure__current--danger",
                          "disclosure__button"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="container">
                    <div className="container__flex">
                      <div className="container__flex--shrink">
                        <img
                          className="container__imagetag"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="container__responsive">
                        <div className="container__username">
                          {user.name}
                        </div>
                        <div className="container__email">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="button"
                      >
                        <span className="button__span">View notifications</span>
                        <BellIcon className="button__icon" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mobile">
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
          <UploadDietChartComponent />
        </div>
      </div>
    </>
  );
};

export default UploadDietchart;