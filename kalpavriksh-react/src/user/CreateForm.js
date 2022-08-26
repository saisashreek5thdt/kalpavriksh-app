import React from "react";
import { CreateFormComponent } from '../Components'

import { useHistory } from "react-router-dom";

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

const CreateForm = () => {
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/userrole/");
  };

  return (
    <>
      <div className="crform">
        <Disclosure as="nav" className="crform__disclosure">
          {({ open }) => (
            <>
              <Navbar />

              <Disclosure.Panel className="crform__disclosure--panel">
                <div className="crform__disclosure--container">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "crform__disclosure--button--success"
                          : "crform__disclosure--button--danger",
                        "crform__disclosure-button"
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
                        className="nav__container-imagetag"
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
                  <div className="container">
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
        <CreateFormComponent />
      </div>
    </>
  );
};
export default CreateForm;
