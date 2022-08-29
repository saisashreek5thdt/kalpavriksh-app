import React from "react";

import { useHistory } from "react-router-dom";

import { LockClosedIcon } from "@heroicons/react/solid";

const LoginForm = () => {
  const history = useHistory();

  const loginHandler = (event) => {
    event.preventDefault();
    history.push("/userrole");
  };

  return (
    <>
      <form
        className="login__Form--Container"
        action="#"
        method="POST"
        onSubmit={loginHandler}
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="login__Form--Inputbox">
          <div>
            <label htmlFor="email-address" className="login__Form--Inputbox-Label">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="login__Form--Inputbox-InputEmail"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="login__Form--Inputbox-Label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="login__Form--Inputbox-InputPWD"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="login__FlexContainer">
          <div className="login__FlexItems">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="login__FlexItems--InputCheck"
            />
            <label
              htmlFor="remember-me"
              className="login__FlexItems--LabelText"
            >
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group login__Btn--Group"
          >
            <span className="login__Btn--Span">
              <LockClosedIcon
                className="login__Btn--Span-Icon"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>
        </div>
        <div className="login__Divider--Box">
          <span className="login__Divider--Text">
            Or Continue With
          </span>
        </div>
        <div className="login__Social--Container">
          <div className="login__Social--Container-Btn">
            <button className="login__Social--BtnBox">
              <svg
                className="login__Social--BtnBox-Icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" />
              </svg>
            </button>
          </div>
        </div>
      </form>      
    </>
  );
};

export default LoginForm;
