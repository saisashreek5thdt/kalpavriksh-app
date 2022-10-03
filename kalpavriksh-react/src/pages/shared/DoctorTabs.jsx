import React, { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

const DoctorTabs = () => {
  return (
    <Popover className="tabmenu__Bg">
      <div className="tabmenu__Container">
        <div className="tabmenu__Flexbox">
          <div className="tabmenu__Flexbox--Heading">
            <a className="header__Box--Heading-Primary" href="/">
              <span className="sr-only">Your Company</span>
              Dashboard
            </a>
          </div>

          <div className="tabmenu__MenuHide">
            <Popover.Button className="tabmenu__MenuHide--Button">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="tabmenu__MenuHide--ButtonIcon" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="tabmenu__NavContainer"
          >
            <a
              href="/userrole/:pid/enroll/"
              className="tabmenu__NavMenu"
            >
              Enroll Patient
            </a>
            <a
              href="/userrole/:pid/form/createform/"
              className="tabmenu__NavMenu"
            >
              Create Form
            </a>

            <a
              href="/userrole/:pid/form/dietform/"
              className="tabmenu__NavMenu"
            >
              Upload Dietchart
            </a>
            <a
              href="/userrole/:pid/form/appointment/"
              className="tabmenu__NavMenu"
            >
              Appointments
            </a>

            <a
              href="/userrole/:pid/form/mypatients/"
              className="tabmenu__NavMenu"
            >
              My Patients
            </a>
            <a
              href="/"
              className="tabmenu__NavMenu"
            >
              Chat
            </a>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="tabmenu__NavMobilePanel"
        >
          <div className="tabmenu__NavMobileContainer">
            <div className="tabmenu__NavMobileContainer--Spacing">
              <div className="tabmenu__NavMobileContainer--FlexItems">
                <div className="header__Box--Heading-Primary">
                  Dashboard
                </div>
                <div className="-mr-2">
                  <Popover.Button className="tabmenu__NavMobileContainer--FlexButton">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="tabmenu__NavMobileContainer--FlexButtonIcon" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="tabmenu__GridSpace">
              <div className="tabmenu__GridCols">
                <a
                  href="/userrole/:pid/enroll/"
                  className="tabmenu__GridCols--GridText"
                >
                  Enroll Patient
                </a>
                <a
                  href="/userrole/:pid/form/createform/"
                  className="tabmenu__GridCols--GridText"
                >
                  Create Form
                </a>

                <a
                  href="/userrole/:pid/form/dietform/"
                  className="tabmenu__GridCols--GridText"
                >
                  Upload Dietchart
                </a>
                <a
                  href="/userrole/:pid/form/appointment/"
                  className="tabmenu__GridCols--GridText"
                >
                  Appointments
                </a>

                <a
                  href="/userrole/:pid/form/mypatients/"
                  className="tabmenu__GridCols--GridText"
                >
                  My Patients
                </a>
                <a
                  href="/"
                  className="tabmenu__GridCols--GridText"
                >
                  Chat
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default DoctorTabs;
