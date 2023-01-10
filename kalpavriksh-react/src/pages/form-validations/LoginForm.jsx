import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import InputLog from "../../Components/InputLog";
import Select from "../../Components/Select";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/validators";
import { useForm } from "../../hooks/form-hooks";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { patientLogin, patientOtp } from "../../action/PatientAction";
import { useEffect } from "react";
import { SENDOTP_RESET } from "../../constant.js/PatientConstant";
import LoadingBox from "../../Components/LoadingBox";
import MessageBox from "../../Components/MessageBox";
import { adminLogin } from "../../action/AdminAction";

const LoginForm = () => {
  const patientOtps = useSelector((state) => state.patientOtp);
  const { loading, error, success } = patientOtps;
  const patientSignin = useSelector((state) => state.patientSignin);
  const { loading:loadingPatient, error:errorPatient, patientInfo } = patientSignin;
  const doctorSignin = useSelector((state) => state.doctorSignin);
  const { loading:loadingDoctor , error:errorDoctor , doctorInfo } = doctorSignin;
  const adminSignin = useSelector((state) => state.adminSignin);
  const { loading:loadingAdmin, error:errorAdmin , adminDocInfo } = adminSignin;

  const dispatch = useDispatch();

  // console.log(doctorInfo,'addd');

  const otpHandler = (e) => {
    e.preventDefault();
    // console.log("hey");
    dispatch(
      patientOtp(
        formState.inputs.emailAddress.value,
        formState.inputs.role.value
      )
    );
  };

  useEffect(() => {
    document.getElementById("element").style.display = "none";
    document.getElementById("elements").style.display = "none";

  }, []);
  useEffect(() => {
    if (success) {
      document.getElementById("element").style.display = "block";
      document.getElementById("elements").style.display = "block";
      dispatch({ type: SENDOTP_RESET });
    }
  }, [success]);
  const roleOptions = [
    { value: "Please Select a Role" },
    { value: "admin" },
    { value: "doctor" },
    { value: "patient" },
  ];

  const navigate = useNavigate();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const [user] = useAuthState(auth);
  // console.log(user, "user");

  const [isLogged, setIsLogged] = useState(false);

  const [formState, inputHandler, setFormData] = useForm(
    {
      emailAddress: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      role: {
        value: "",
        isValid: false,
      },
      element: {
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
        formState.inputs.emailAddress.isValid &&
          formState.inputs.password.isValid
      );
      navigate("/userrole/:roleid/dashboard/doctor/");
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
      navigate("/userrole/:roleid/dashboard/doctor/");
    }
    setIsLogged((prevLogg) => !prevLogg);
  };

  const signOut = () => {
    signOut(auth);
  };

  const submitOtp = (e) => {
    e.preventDefault();
    dispatch(
      patientLogin(
        formState.inputs.emailAddress.value,
        formState.inputs.role.value,
        formState.inputs.element.value
      )
    );
  
  };

  useEffect(()=>{
    // if(formState.inputs.role.value === 'admin' && adminDocInfo){
    //   navigate('/userrole/:roleid/dashboard/admin/')
    // }
    if(formState.inputs.role.value === 'admin' && adminDocInfo){
      navigate('/userrole/:roleid/dashboard/admin/')

    }
    // console.log(adminDocInfo,'inooo');
  },[formState,adminDocInfo])

  useEffect(()=>{
    // console.log(formState.inputs.role,'patinetinfo');

    if(formState.inputs.role.value === 'doctor' && doctorInfo){
      // console.log(doctorInfo,'yess');
      navigate('/userrole/:roleid/dashboard/doctor/')
    }else if(formState.inputs.role.value === 'patient' && patientInfo){
      navigate('/userrole/:roleid/dashboard/patient/mydata/')
    }
  },[patientInfo,doctorInfo,formState])



  const testPatientLoginHandler = () => {
    navigate("/userrole/:roleid/dashboard/patient/mydata/");
  };

  // useEffect(()=>{
  //     if(formState.inputs.role.value === 'patient'){
  //       navigate('/userrole/:roleid/dashboard/patient/mydata/')
  //     }else if(formState.inputs.role.value === 'doctor'){
  //       navigate('/userrole/:roleid/dashboard/doctor/')
  //     }else if(formState.inputs.role.value === 'Admin'){
  //       navigate('/userrole/:roleid/dashboard/admin/')
  //     }
  // },[formState])

  const loginAdmin=(e)=>{
    e.preventDefault()
    const user='admin'
    dispatch(adminLogin(formState.inputs.emailAddress.value,formState.inputs.password.value,user))
    // console.log('heyyyy');

  }

  return (
    <>
      <form
        className="login__Form-Box"
        onSubmit={loginAdmin}
        // method="POST"
        // onClick={loggedHandler}
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="login__Form-Input">
          <div>
            <Select
              element="select"
              id="role"
              label="Select Role"
              options={roleOptions}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please Select Role"
              onInput={inputHandler}
            />
          </div>
          <div>
            <InputLog
              element="input"
              id="emailAddress"
              type="email"
              label="Email Address"
              placeholder="Enter Email Address"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please Enter Valid Email Address"
              onInput={inputHandler}
            />
            {/*
            <label htmlFor="email-address" className="login__Form-Input--Label">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="login__Form-Input--Email"
              placeholder="Email address"
            />
            */}
          </div>
          {formState.inputs.role.value === "doctor" ? (
            <div>
              <button
                // type="submit"
                onClick={otpHandler}
                className="group login__Button--Container-Btn"
              >
                <span className="login__Button--Container-BtnSpan"></span>
                Generate OTP
              </button>
            </div>
          ) : formState.inputs.role.value === "patient" ? (
            <div>
              <button
                onClick={otpHandler}
                // type="submit"
                className="group login__Button--Container-Btn"
              >
                <span className="login__Button--Container-BtnSpan"></span>
                Generate OTP
              </button>
            </div>
          ) : (
            ""
          )}

          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox>{error}</MessageBox>}
         <div className="patient-otp">
            <InputLog
            
              element="input"
              id="element"
              // type="password"
              label="otp"
              placeholder="Enter OTP"
              validators={[VALIDATOR_MINLENGTH(8)]}
              errorText="Please Enter Valid Password"
              onInput={inputHandler}
            />
          </div>

          <div id="elements">
            <button
              onClick={submitOtp}
              className="group login__Button--Container-Btn"
            >
              <span className="login__Button--Container-BtnSpan"></span>
              Sign in
            </button>
          </div>

          {/* {success ? ( */}
          {formState.inputs.role.value === "admin" ? (
              <div>
              <InputLog
                element="input"
                id="password"
                type="password"
                label="Password"
                placeholder="Enter Password"
                validators={[VALIDATOR_MINLENGTH(8)]}
                errorText="Please Enter Valid Password"
                onInput={inputHandler}
              />
              </div>
          ):
          
          ''}
     
          {/* ):''} */}
        </div>

        <div className="login__Checkbox-Container">
          <div className="login__Checkbox-Container--Box">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="login__Checkbox-Container--InputBox"
            />
            <label
              htmlFor="remember-me"
              className="login__Checkbox-Container--Label"
            >
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button type="submit" className="group login__Button--Container-Btn">
            <span className="login__Button--Container-BtnSpan"></span>
            Sign ins
          </button>
        </div>
        <div className="login__Divider--Box">
          <p className="login__Divider--Text">Or</p>
        </div>
      </form>

      {/* <div>
        <button
          type="submit"
          className="group login__Button--Container-Btn"
          onClick={testPatientLoginHandler}
        >
          <span className="login__Button--Container-BtnSpan"></span>
          Patient LogIn
        </button>
      </div> */}

      {user ? (
        <div>
          {user !== null && (
            <button onClick={() => auth.signOut()}>Signout</button>
          )}
        </div>
      ) : (
        <div>
          <button
            type="submit"
            className="group login__Social--Btn"
            onClick={googleSignIn}
          >
            <span className="login__Social--Span">
              <FaGoogle
                className="login__Social--Span-Icon"
                aria-hidden="true"
              />
            </span>
            Sign in with Google
          </button>
        </div>
      )}
    </>
  );
};

export default LoginForm;
