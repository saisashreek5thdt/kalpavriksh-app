import React, { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {PaperClipIcon } from "@heroicons/react/outline";

import TopNavbar from "../../shared/TopNavbar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PatientForms = () => {
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
              <h3 className="text-2xl text-center">
                Patient Form Daily, Weekly, More
              </h3>
              <div className="dropdown-RightBox">
                <Menu as="div" className="dropdown__Container">
                  <div>
                    <Menu.Button className="dropdown__Menu--Btn">
                     <PaperClipIcon className="dropdown__Menu--Btn-Icon_1" /> Attach Form
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
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default PatientForms;
