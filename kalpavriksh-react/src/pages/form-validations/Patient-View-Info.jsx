import React from "react";
import Navbar from "../shared/Navbar";
import DoctorTabs from "../shared/DoctorTabs";

import { PaperClipIcon } from "@heroicons/react/20/solid";

const PatientViewInfo = () => {
  return (
    <>
      {/* Dashboard Container Starts Here */}
      <div className="dashboard__Container">
        <Navbar />
        <DoctorTabs />
        {/*
              <header className="header__Box">
              <div className="header__Box--Heading">
                <h1 className="header__Box--Heading-Primary">Dashboard</h1>
              </div>
            </header>
            */}
        <main>
          <div className="dashboard__Content">
            {/* Replace with your content */}
            <div className="dashboard__Content--Box">
              <div className="patient__ViewBox--Container">
                <div className="patient__ViewBox--Heading">
                  <h3 className="patient__ViewBox--Heading_Primary">
                    Patient Appointment Information
                  </h3>
                  <p className="patient__ViewBox--Heading_Paragraph">
                    Personal details and application.
                  </p>
                </div>
                <div className="patient__ViewBox--BorderBox">
                  <dl>
                    <div className="patient__ViewBox--BorderBox_Alternate-1 patient__ViewBox--BorderBox_LeftTextBox">
                      <dt className="patient__ViewBox--BorderBox_LeftText">
                        Appointment for
                      </dt>
                      <dd className="patient__ViewBox--BorderBox_RightText">
                        Cardiac Problem
                      </dd>
                    </div>
                    <div className="patient__ViewBox--BorderBox_Alternate-2 patient__ViewBox--BorderBox_LeftTextBox">
                      <dt className="patient__ViewBox--BorderBox_LeftText">
                        Appointment with
                      </dt>
                      <dd className="patient__ViewBox--BorderBox_RightText">
                        Dr. Rajiv Singhla
                      </dd>
                    </div>
                    <div className="patient__ViewBox--BorderBox_Alternate-1 patient__ViewBox--BorderBox_LeftTextBox">
                      <dt className="patient__ViewBox--BorderBox_LeftText">
                        Appointment Date
                      </dt>
                      <dd className="patient__ViewBox--BorderBox_RightText">
                        10-09-2022
                      </dd>
                    </div>
                    <div className="patient__ViewBox--BorderBox_Alternate-2 patient__ViewBox--BorderBox_LeftTextBox">
                      <dt className="patient__ViewBox--BorderBox_LeftText">
                        Patient Full name
                      </dt>
                      <dd className="patient__ViewBox--BorderBox_RightText">
                        Margot Foster
                      </dd>
                    </div>
                    <div className="patient__ViewBox--BorderBox_Alternate-1 patient__ViewBox--BorderBox_LeftTextBox">
                      <dt className="patient__ViewBox--BorderBox_LeftText">
                        Patient Age
                      </dt>
                      <dd className="patient__ViewBox--BorderBox_RightText">
                        55 Years
                      </dd>
                    </div>
                    <div className="patient__ViewBox--BorderBox_Alternate-2 patient__ViewBox--BorderBox_LeftTextBox">
                      <dt className="patient__ViewBox--BorderBox_LeftText">
                        Patient Phone Number
                      </dt>
                      <dd className="patient__ViewBox--BorderBox_RightText">
                        (+91) 996 - 644 - 1948
                      </dd>
                    </div>
                    <div className="patient__ViewBox--BorderBox_Alternate-1 patient__ViewBox--BorderBox_LeftTextBox">
                      <dt className="patient__ViewBox--BorderBox_LeftText">
                        Bill Amount
                      </dt>
                      <dd className="patient__ViewBox--BorderBox_RightText">
                        950/-
                      </dd>
                    </div>
                    <div className="patient__ViewBox--BorderBox_Alternate-2 patient__ViewBox--BorderBox_LeftTextBox">
                      <dt className="patient__ViewBox--BorderBox_LeftText">
                        Payment Status
                      </dt>
                      <dd className="patient__ViewBox--BorderBox_RightText">
                        Paid / Un-Paid
                      </dd>
                    </div>
                    <div className="patient__ViewBox--BorderBox_Alternate-1 patient__ViewBox--BorderBox_LeftTextBox">
                      <dt className="patient__ViewBox--BorderBox_LeftText">
                        Patient Health Info
                      </dt>
                      <dd className="patient__ViewBox--BorderBox_RightText">
                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                        anim incididunt cillum culpa consequat. Excepteur qui
                        ipsum aliquip consequat sint. Sit id mollit nulla mollit
                        nostrud in ea officia proident. Irure nostrud pariatur
                        mollit ad adipisicing reprehenderit deserunt qui eu.
                      </dd>
                    </div>
                    <div className="patient__ViewBox--Attachments_BG">
                      <dt className="patient__ViewBox--BorderBox_LeftText">
                        Attachments
                      </dt>
                      <dd className="patient__ViewBox--Attachments_ListBox">
                        <ul
                          role="list"
                          className="patient__ViewBox--Attachments_ListItems"
                        >
                          <li className="patient__ViewBox--Attachments_ListItemBox">
                            <div className="patient__ViewBox--Attachments_ListItem">
                              <PaperClipIcon
                                className="patient__ViewBox--Attachments_ListItem-Button"
                                aria-hidden="true"
                              />
                              <span className="patient__ViewBox--Attachments_ListItem-ButtonTxt">
                                Appointment 
                              </span>
                            </div>
                            <div className="patient__ViewBox--Attachments_ListItem-Text">
                              <a
                                href="/"
                                className="patient__ViewBox--Attachments_ListItem-Anchor"
                              >
                                Download
                              </a>
                            </div>
                          </li>
                          <li className="patient__ViewBox--Attachments_ListItemBox">
                            <div className="patient__ViewBox--Attachments_ListItem">
                              <PaperClipIcon
                                className="patient__ViewBox--Attachments_ListItem-Button"
                                aria-hidden="true"
                              />
                              <span className="patient__ViewBox--Attachments_ListItem-ButtonTxt">
                                Medical Form Data
                              </span>
                            </div>
                            <div className="patient__ViewBox--Attachments_ListItem-Text">
                              <a
                                href="/"
                                className="patient__ViewBox--Attachments_ListItem-Anchor"
                              >
                                View
                              </a>
                            </div>
                          </li>
                          <li className="patient__ViewBox--Attachments_ListItemBox">
                            <div className="patient__ViewBox--Attachments_ListItem">
                              <PaperClipIcon
                                className="patient__ViewBox--Attachments_ListItem-Button"
                                aria-hidden="true"
                              />
                              <span className="patient__ViewBox--Attachments_ListItem-ButtonTxt">
                                Add Prescription 
                              </span>
                            </div>
                            <div className="patient__ViewBox--Attachments_ListItem-Text">
                              <a
                                href="/"
                                className="patient__ViewBox--Attachments_ListItem-Anchor"
                              >
                                Click Here
                              </a>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
      {/* Dashboard Container Ends Here */}
    </>
  );
};

export default PatientViewInfo;
