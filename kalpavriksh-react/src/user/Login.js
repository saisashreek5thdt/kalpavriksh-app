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
    history.push("/userrole/");
  };

  return (
    <div className="login">
      <div className="login__Container">
        {" "}
        <div className="login__Body">
          {" "}
          <div className="login__Content">
            {" "}
            <div>
              <img
                className="login__Image"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <p className="login__Heading--Primary">
                Welcome To Kalpavriksh
              </p>
              <p className="login__Heading--Secondary">
                Sign in to your account
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <form
          className="form__Container"
          onSubmit={loginHandler}
          method="POST"
        >
          <div className="form__flex">
            <div className="form__Content">
              <label
                className="form__label"
                htmlFor="Password"
              >
                Email address
              </label>
              <input
                // className="appearance-none block w-full bg-white text-gray-900 font-nunito text-indigo-600 font-medium border border-gray-200 drop-shadow-sm rounded-lg py-2 px-3 leading-tight focus:outline-none"
                className={`form__input ${
                  emailerr
                    ? "form_error"
                    : "form_success"
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
                className="form__label"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                className="form__password"
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
            <div className="remember">
              <label htmlFor="remember" className="remember__label">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="remember__input"
                />
                <span className="remember__span">Remember Me</span>
              </label>
              {/* <div className="w-1/2 text-right">
                <a href="#" className="text-blue-500 text-sm tracking-tight">
                  Forgot your password?
                </a>
              </div> */}
            </div>
            <div className="submit">
              <button
                type="submit"
                className="submit__button"
              >
                <span className="submit__span">
                  <LockClosedIcon
                    className="submit__icon"
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
            <div className="sociallogin">
              <div className="sociallogin__container">
                <button className="sociallogin__button">
                  {/* <button className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white shadow-lg border border-gray-300 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> */}
                  {/* <svg
                    className="h-6 w-6 fill-current text-gray-700"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"/>
                  </svg> */}
                  <svg
                    className="sociallogin__svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                  >
                    {" "}
                    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" />
                  </svg>
                </button>
                {emailerr ? (
                  <p className="email_err">
                    You're not authorized to signin here.
                  </p>
                ) : (
                  <p></p>
                )}
                {passerr ? (
                  <p className="password_err">
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