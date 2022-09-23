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
              {/* Dropdown Box Start */}
              <div className="dropdown-RightBox">
                {/* Dropdown Container Menu Start */}
                <Menu as="div" className="dropdown__Container">
                  <div>
                    {/* Dropdown Menu Button Start */}
                    <Menu.Button className="dropdown__Menu--Btn">
                      <PaperClipIcon className="dropdown__Menu--Btn-Icon_1" />
                      Attach Form
                      <ChevronDownIcon
                        className="dropdown__Menu--Btn-Icon_2"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                    {/* Dropdown Menu Button End */}
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
                    {/* Menu Items Start */}
                    <Menu.Items className="dropdown__Menu--Items-Box">
                      <div className="py-1">
                        {/* Menu Item Start */}
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
                        {/* Menu Item End */}
                        {/* Menu Item Start */}
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
                        {/* Menu Item End */}
                        {/* Menu Item Start */}
                      </div>
                      <div className="py-1">
                        {/* Menu Item Start */}
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
                        {/* Menu Item End */}
                        {/* Menu Item Start */}
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
                        {/* Menu Item End */}
                      </div>
                      <div className="py-1">
                        {/* Menu Item Start */}
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
                        {/* Menu Item End */}
                        {/* Menu Item Start */}
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
                        {/* Menu Item End */}
                      </div>
                    </Menu.Items>
                    {/* Menu Items End */}
                  </Transition>
                </Menu>
                {/* Dropdown Container Menu End */}
              </div>
              {/* Dropdown Box End */}
              <div className="text-center text-xl">
                {/* <h3>Form Section</h3> */}
              </div>
              {/* Patient Form Box Start */}
              <div className="forms__GridBox">
                {/* Patient Form Columns Start */}
                <div className="forms__GridBox--GridCols">
                  {/* Patient Form Column Gaps Start */}
                  <div className="forms__GridBox--GridGaps">
                    {/* Patient Form Controller Start */}
                    <form action="#" method="POST" onSubmit={patientFormHandler}>
                      <div className="forms__Controller">
                        {/* Patient Form Controller Box Start */}
                        <div className="forms__Controller--Box">
                          {/* Patient Form Controller Grid Start */}
                          <div className="forms__Controller--Grids">
                            {/* Input for Question Start */}
                            <InputPatient
                              element="input"
                              id="patient_QuestionAnswer1"
                              type="text"
                              label="Question Title 1"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Enter valid Answer"
                              onInput={inputHandler}
                            />
                            {/* Input for Question End */}
                          </div>
                          {/* Patient Form Controller Grid End */}
                          {/* Patient Form Controller Grid Start */}
                          <div className="forms__Controller--Grids">
                            {/* Input for Question Start */}
                            <InputPatient
                              element="input"
                              id="patient_QuestionAnswer2"
                              type="text"
                              label="Question Title2"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Enter valid Answer"
                              onInput={inputHandler}
                            />
                            {/* Input for Question End */}
                          </div>
                          {/* Patient Form Controller Grid End */}
                          {/* Patient Form Controller Grid Start */}
                          <div className="forms__Controller--Grids">
                            {/* Input Checkbox for Option Start */}
                            <Checkbox
                              element="input"
                              id="patient_CheckboxOption1"
                              type="checkbox"
                              label="Option 1"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select valid Answer"
                              onInput={inputHandler}
                            />
                            {/* Input Checkbox for Option End */}
                            {/* Input Checkbox for Option Start */}
                            <Checkbox
                              element="input"
                              id="patient_CheckboxOption2"
                              type="checkbox"
                              label="Option 2"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select valid Answer"
                              onInput={inputHandler}
                            />
                            {/* Input Checkbox for Option End */}
                          </div>
                          {/* Patient Form Controller Grid End */}
                          {/* Patient Form Controller Grid Start */}
                          <div className="forms__Controller--Grids">
                            {/* Input Checkbox for Option Start */}
                            <Checkbox
                              element="input"
                              id="patient_RadioOption1"
                              type="radio"
                              label="Option 1"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select valid Answer"
                              onInput={inputHandler}
                            />
                            {/* Input Checkbox for Option End */}
                            {/* Input Checkbox for Option Start */}
                            <Checkbox
                              element="input"
                              id="patient_RadioOption2"
                              type="radio"
                              label="Option 2"
                              validators={[VALIDATOR_REQUIRE()]}
                              errorText="Please Select valid Answer"
                              onInput={inputHandler}
                            />
                            {/* Input Checkbox for Option End */}
                          </div>
                          {/* Patient Form Controller Grid End */}
                        </div>
                        {/* Patient Form Controller Box End */}
                      </div>
                      {/* Patient Form Controller Button Container Start */}
                      <div className="forms__Controller--Btn-Container">
                        <div className="text-right">
                          {/* Patient Form Controller Button Green Start */}
                          <button
                            type="submit"
                            className="forms__Controller--Btn-Container_Btn-Green"
                          >
                            Submit
                          </button>
                          {/* Patient Form Controller Button Green End */}
                        </div>
                      </div>
                      {/* Patient Form Controller Button Container End */}
                    </form>
                    {/* Patient Form Controller End */}
                  </div>
                  {/* Patient Form Column Gaps End */}
                </div>
                {/* Patient Form Columns End */}
              </div>
              {/* Patient Form Box End */}
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
