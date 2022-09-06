import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";

import { LockClosedIcon } from "@heroicons/react/solid";

import InputLog from "../../Components/Input-Log";

import ButtonLog from "../../Components/Button-Log";

import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../util/validators";

import { useForm } from "../../Hooks/form-hooks";

import { AuthContext } from "../../context/auth-context";

import DATA from "../../DATA.json";

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const [isLogged, setIsLogged] = useState(false);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const loggedHandler = () => {
    if (!isLogged) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLogged((prevLogg) => !prevLogg);
  };

  const history = useHistory();

  const loginHandler = (event) => {
    event.preventDefault();

    if (
      formState.inputs.email.value === "" ||
      formState.inputs.password.value === ""
    ) {
      return null;
    } else {
      console.log(formState.inputs);
      auth.login();
      history.push("/userrole/:roleid/patient/");
    }
    
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
          <InputLog
            element="input"
            id="email-address"
            type="email"
            label="Email Address"
            placeholder="Enter Email Address"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please Enter Valid Email Address"
            onInput={inputHandler}
          />

          <InputLog
            element="input"
            id="password"
            type="password"
            label="Password"
            placeholder="Enter Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please Enter Valid Password"
            onInput={inputHandler}
          />
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

          <ButtonLog type="submit" disabled={!formState.isValid}>
          <span className="login__Btn--Span">
              <LockClosedIcon
                className="login__Btn--Span-Icon"
                aria-hidden="true"
              />
            </span>
            {!isLogged ? "Sign in" : ""}
          </ButtonLog>

        </div>
        <div className="login__Divider--Box">
          <span className="login__Divider--Text">Or Continue With</span>
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
