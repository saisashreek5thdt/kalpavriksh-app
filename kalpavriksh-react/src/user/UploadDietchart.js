import React, { Fragment, useEffect, useState } from "react";
import { useHistory, NavLink, Link } from "react-router-dom";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";

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
        </div>
      </div>
    </>
  );
};

export default UploadDietchart;