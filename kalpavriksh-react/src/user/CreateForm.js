import React, { Fragment } from "react";
import { useHistory, NavLink, Link } from "react-router-dom";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

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
          </div>

        </div>
      </div>
    </>
  );
};
export default CreateForm;
