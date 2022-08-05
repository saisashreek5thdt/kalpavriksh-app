import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { LockClosedIcon } from "@heroicons/react/solid";

import DATA from "../DATA.json";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [emailerr, setEmailerr] = useState(false);
  const [passerr, setPasserr] = useState(false);
  const history = useHistory();
  const loginHandler = (event) => {
    event.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))
      return setEmailerr(true);
    if (
      !values.password ||
      values.password === "" ||
      values.password === undefined
    )
      return setPasserr(true);
    const user = DATA.find((data) => data.email === values.email);
    if (!user) return setEmailerr(true);
    if (user.password !== values.password) return setPasserr(true);
    localStorage.setItem("kalpavriksh", JSON.stringify(user));
    history.push("/userrole");
  };

  return (
    <React.Fragment>
      <div className="grid w-full">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <p className="mt-6 text-center text-3xl font-nunito font-semibold text-gray-900">
                Welcome To Kalpavriksh
              </p>
              <p className="mt-6 text-center text-2xl font-nunito font-semibold text-gray-900">
                Sign in to your account
              </p>
            </div>
          </div>
        </div>
        <div className="grid justify-items-center">
          <form
            className="mt-8 space-y-6"
            onSubmit={loginHandler}
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only font-nunito">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`appearance-none rounded-none relative block w-96 px-3 py-2 border placeholder-gray-500 rounded-t-md focus:outline-none focus:z-10 sm:text-sm ${
                    emailerr
                      ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                  }`}
                  placeholder="Email address"
                  value={values.email}
                  onChange={(e) => {
                    setEmailerr(false);
                    setValues({ ...values, email: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only font-nunito">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="appearance-none font-nunito rounded-none relative block w-96 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={values.password}
                  onChange={(e) => {
                    setPasserr(false);
                    setValues({ ...values, password: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 font-nunito text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 font-nunito"
                >
                  Remember me
                </label>
              </div>

              {/* <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 font-nunito hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="group font-nunito relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
            {emailerr ? (
              <p className="font-medium text-center text-red-600 font-nunito">
                You're not authorized to signin here.
              </p>
            ) : (
              <p></p>
            )}
            {passerr ? (
              <p className="font-medium text-center text-red-600 font-nunito">
                Invalid Password.
              </p>
            ) : (
              <p></p>
            )}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
