import React from "react";

import logoImg from "../assets/images/logo/workflow-mark.svg";

import LoginForm from "../pages/form-validations/Login-Form";

const Login = () => {
  

  return (
    <React.Fragment>
      {
      /* Login Page */
      }
      {/* Login Container Starts Here */}
      <div className="login__Container">
        <div className="login__Container-Height">
          <div className="login__Container-Flexbox">
            <div className="login__Container-Imgbox">
              <div>
                {/* Login Page Image */}
                <img
                  className="login__Container-Img"
                  src={logoImg}
                  alt="Workflow"
                />
                <h2 className="login__Heading--Primary">
                  Welcome to Kalpavriksh
                </h2>
                <h2 className="login__Heading--Secondary">
                  Sign in to your account
                </h2>
              </div>
              {/* Login Form Page Starts Here*/}
              <LoginForm />
              {/* Login Form Page Ends Here*/}
            </div>
          </div>
        </div>
      </div>
      {/* Login Container Ends Here */}
    </React.Fragment>
  );
};

export default Login;
