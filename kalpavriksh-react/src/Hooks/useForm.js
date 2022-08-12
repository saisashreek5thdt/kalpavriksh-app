import React, { useState } from "react";

import { omit } from "lodash";

const useForm = () => {
  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    //A function to validate each input values
    switch (name) {
      case "phonenumber":
        if (value.length < 10) {
          // We will set error state
          setErrors({
            ...errors,
            phonenumber: "Phone Number should be 10 Digit",
          });
        } else {
          // Set the error state empty or remove error for phonenumber input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "phonenumber");
          setErrors(newObj);
        }
        break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter Valid Email Address",
          });
        } else {
          // Set the error state empty or remove error for email input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      case "fullname":
        if (value.length <= 1) {
          setErrors({
            ...errors,
            fullname: "Enter Your Full Name",
          });
        } else {
          // Set the error state empty or remove error for fullname input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "fullname");
          setErrors(newObj);
        }
        break;
    }
  };

  //A method to handle form inputs
  const handleChange = (event) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    //Let's set these values in state
    setValues({
      ...values,
      [name]: val,
    });
  };

  return {
    values,
    errors,
    handleChange,
  };
};

export default useForm;
