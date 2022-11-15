import React from "react";
import LoginForm from "../../pages/form-validations/LoginForm";

import Logo from "../../Assets/img/logo-login.svg";

const Login = () => {
  return (
    <>
      <section className="login__Container">
        <div className="login__Container--Box">
          <div>
            <img
              className="login__Container--Img"
              src={Logo}
              alt="Your Company"
            />
            <h2 className="login__Heading--Primary">
              Sign in to your account
            </h2>
          </div>
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default Login;
