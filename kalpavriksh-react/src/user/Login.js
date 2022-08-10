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
    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))
    //   return setEmailerr(true);
    // if (
    //   !values.password ||
    //   values.password === "" ||
    //   values.password === undefined
    // )
    //   return setPasserr(true);
    const user = DATA.find((data) => data.email === values.email);
    if (!user) return setEmailerr(true);
    if (user.password !== values.password) return setPasserr(true);
    localStorage.setItem("kalpavriksh", JSON.stringify(user));
    history.push("/userrole");
  };

  return (
    <div className="bg-gray-100 h-screen">
      <div className="grid w-full">
        {" "}
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="max-w-md w-full space-y-8">
            {" "}
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <p className="mt-6 text-center text-4xl font-nunito font-extrabold text-gray-900">
                Welcome To Kalpavriksh
              </p>
              <p className="font-medium text-center text-indigo-600 hover:text-indigo-500">
                Sign in to your account
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          className="w-full max-w-md bg-white rounded-lg shadow-md p-12 pb-5"
          onSubmit={loginHandler}
          method="POST"
        >
          <div className="flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-indigo-600 text-xs font-bold mb-2"
                htmlfor="Password"
              >
                Email address
              </label>
              <input
                // className="appearance-none block w-full bg-white text-gray-900 font-nunito text-indigo-600 font-medium border border-gray-200 drop-shadow-sm rounded-lg py-2 px-3 leading-tight focus:outline-none"
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 rounded focus:outline-none focus:z-10 sm:text-sm ${
                  emailerr
                    ? "border-red-300 text-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                }`}
                type="email"
                required
                value={values.email}
                onChange={(e) => {
                  setEmailerr(false);
                  setPasserr(false);
                  setValues({ ...values, email: e.target.value });
                }}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide font-nunito text-indigo-600 text-gray-700 text-xs font-bold mb-2"
                htmlfor="Password"
              >
                Password
              </label>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 rounded focus:outline-none focus:z-10 sm:text-sm border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                type="password"
                required
                minLength={8}
                maxLength={25}
                value={values.password}
                onChange={(e) => {
                  setEmailerr(false);
                  setPasserr(false);
                  setValues({ ...values, password: e.target.value });
                }}
              />
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <label for="remember" className="flex items-center w-1/2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-1 bg-white shadow"
                />
                <span className="text-sm text-gray-700 pt-1">Remember Me</span>
              </label>
              {/* <div className="w-1/2 text-right">
                <a href="#" className="text-blue-500 text-sm tracking-tight">
                  Forgot your password?
                </a>
              </div> */}
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
            <div className="mx-auto -mb-6 pb-1">
              <span className="text-center text-sm text-gray-500">
                Or Continue With
              </span>
            </div>
            <div className="flex items-center w-full mt-6">
              <div className="w-full md:w-full px-2 pt-4 mx-2">
                <button className="appearance-none flex items-center justify-center block w-full text-gray-300 shadow-lg border border-gray-300 rounded-lg py-2 px-3 leading-tight hover:bg-gray-100 hover:text-gray-700 focus:outline-none">
                  {/* <button className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white shadow-lg border border-gray-300 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> */}
                  {/* <svg
                    className="h-6 w-6 fill-current text-gray-700"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"/>
                  </svg> */}
                  <svg
                    className="h-6 w-6 fill-current text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                  >
                    {" "}
                    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" />
                  </svg>
                </button>
                {emailerr ? (
                  <p className="font-medium text-center text-red-500 font-nunito pt-4">
                    You're not authorized to signin here.
                  </p>
                ) : (
                  <p></p>
                )}
                {passerr ? (
                  <p className="font-medium text-center text-red-500 font-nunito pt-4">
                    Invalid Password.
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
