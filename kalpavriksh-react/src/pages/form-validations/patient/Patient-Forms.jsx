import React, { Fragment } from "react";

import { useHistory } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { PaperClipIcon } from "@heroicons/react/outline";

import TopNavbar from "../../shared/TopNavbar";

import { VALIDATOR_REQUIRE } from "../../../util/validators";

import InputPatient from "../../../Components/Input-Patient";

import Checkbox from "../../../Components/Checkbox";

import { useForm } from "../../../hooks/form-hooks";
import Bottombar from "../../shared/Bottombar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PatientForms = () => {
  const [formState, inputHandler] = useForm(
    {
      patient_QuestionAnswer1: {
        value: "",
        isValid: false,
      },
      patient_QuestionAnswer2: {
        value: "",
        isValid: false,
      },
      patient_CheckboxOption1: {
        name: "",
        isValid: false,
      }, 
      patient_CheckboxOption2: {
        name: "",
        isValid: false,
      }, 
      patient_RadioOption1: {
        name: "",
        isValid: false,
      },
      patient_RadioOption2: {
        name: "",
        isValid: false,
      }
    },
    false
  );

  const history = useHistory();

  const patientFormHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    history.push("/userrole/:roleid/patient/");
  };

  return (
    <>
      <div className="dashboard__Container">
        <TopNavbar />
        <header className="header__Box">
          <div className="header__Box--Heading">
            <h1 className="header__Box--Heading-Primary">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="dashboard__Content">
            {/* Replace with your content */}
            <div className="dashboard__Content--Box">
              {/* <div className="dashboard__Content--Border" /> */}
              {/* <h3 className="text-2xl text-center">
                Patient Form Daily, Weekly, More
              </h3> */}
              <div className="dropdown-RightBox">
                <Menu as="div" className="dropdown__Container">
                  <div>
                    <Menu.Button className="dropdown__Menu--Btn">
                      <PaperClipIcon className="dropdown__Menu--Btn-Icon_1" />
                      Attach Form
                      <ChevronDownIcon
                        className="dropdown__Menu--Btn-Icon_2"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="dropdown__Menu--Items-Box">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/userrole/:roleid/form/patientform/"
                              className={classNames(
                                active
                                  ? "dropdown__Menu--Item_Active"
                                  : "dropdown__Menu--Item_Text",
                                "dropdown__Menu--Item"
                              )}
                            >
                              Daily
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/userrole/:roleid/form/patientform/"
                              className={classNames(
                                active
                                  ? "dropdown__Menu--Item_Active"
                                  : "dropdown__Menu--Item_Text",
                                "dropdown__Menu--Item"
                              )}
                            >
                              Weekly
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/userrole/:roleid/form/patientform/"
                              className={classNames(
                                active
                                  ? "dropdown__Menu--Item_Active"
                                  : "dropdown__Menu--Item_Text",
                                "dropdown__Menu--Item"
                              )}
                            >
                              Bi-Weekly
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/userrole/:roleid/form/patientform/"
                              className={classNames(
                                active
                                  ? "dropdown__Menu--Item_Active"
                                  : "dropdown__Menu--Item_Text",
                                "dropdown__Menu--Item"
                              )}
                            >
                              Monthly
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/userrole/:roleid/form/patientform/"
                              className={classNames(
                                active
                                  ? "dropdown__Menu--Item_Active"
                                  : "dropdown__Menu--Item_Text",
                                "dropdown__Menu--Item"
                              )}
                            >
                              Quarterly
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/userrole/:roleid/form/patientform/"
                              className={classNames(
                                active
                                  ? "dropdown__Menu--Item_Active"
                                  : "dropdown__Menu--Item_Text",
                                "dropdown__Menu--Item"
                              )}
                            >
                              One Time
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="text-center text-xl">
                {/* <h3>Form Section</h3> */}
              </div>
              <div className="forms__GridBox">
                <div className="forms__GridBox--GridCols">
                  <div className="forms__GridBox--GridGaps">
                    <form action="#" method="POST" onSubmit={patientFormHandler}>
                      <div className="forms__Controller">
                        <div className="forms__Controller--Box">
                          <div className="forms__Controller--Grids">
                            <div className="forms__Controller--Grids_Cols-6">
                              <p className="text-center text-xl"> GRAPH SECTION</p>
                            </div>
                          </div>
                          <div className="forms__Controller--Grids">
                            <InputPatient
                              element="input"
                              id="patient_QuestionAnswer1"
                              type="text"
                              label="Question Title 1"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Enter valid Answer"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="forms__Controller--Grids">
                            <InputPatient
                              element="input"
                              id="patient_QuestionAnswer2"
                              type="text"
                              label="Question Title2"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Enter valid Answer"
                              onInput={inputHandler}
                            />
                          </div>
                          <div className="forms__Controller--Grids">
                            <Checkbox
                              element="input"
                              id="patient_CheckboxOption1"
                              type="checkbox"
                              label="Option 1"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select valid Answer"
                              onInput={inputHandler}
                            />

                            <Checkbox
                              element="input"
                              id="patient_CheckboxOption2"
                              type="checkbox"
                              label="Option 2"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select valid Answer"
                              onInput={inputHandler}
                            />

                          </div>
                          <div className="forms__Controller--Grids">
                            <Checkbox
                              element="input"
                              id="patient_RadioOption1"
                              type="radio"
                              label="Option 1"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select valid Answer"
                              onInput={inputHandler}
                            />

                            <Checkbox
                              element="input"
                              id="patient_RadioOption2"
                              type="radio"
                              label="Option 2"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select valid Answer"
                              onInput={inputHandler}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="forms__Controller--Btn-Container">
                        <div className="text-right">
                          <button
                            type="submit"
                            className="forms__Controller--Btn-Container_Btn-Green"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
        <Bottombar />
      </div>
    </>
  );
};

export default PatientForms;
