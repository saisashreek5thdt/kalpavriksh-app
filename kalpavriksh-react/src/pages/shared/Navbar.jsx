import React, { Fragment } from "react";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import logoImg from "../../assets/images/logo/workflow-mark.svg";
import User1 from "../../assets/images/user/user1.jpg";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: User1,
};
const navigation = [
  { name: "Dashboard", href: "/userrole/:roleid/doctor/", current: true },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

  const Navbar = () => {
    return (
        <Disclosure as="nav" className="navbar__Bg">
          {({ open }) => (
            <>
              <div className="navbar__Container">
                <div className="navbar__Container--FlexBox">
                  <div className="navbar__Container--FlexBox-Items">
                    <div className="navbar__Container--FlexBox-ImgBox">
                      <img
                        className="navbar__Container--FlexBox-Img"
                        src={logoImg}
                        alt="Workflow"
                      />
                    </div>
                    <div className="navbar__Hidden">
                      <div className="navbar__Items">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "navbar__Item--Active"
                                : "navbar__Item--Hover",
                              "navbar__Item"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="navbar__Hidden">
                    <div className="navbar__Profile">
                      <button
                        type="button"
                        className="navbar__Profile--Notify-Btn"
                      >
                        <span className="navbar__Profile--Notify-Btn_Span">View notifications</span>
                        <BellIcon className="navbar__Profile--Notify-Btn_Icon" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="navbar__Profile--MenuBox">
                        <div>
                          <Menu.Button className="navbar__Profile--MenuBox-Container">
                            <span className="navbar__Profile--Notify-Btn_Span">Open user menu</span>
                            <img
                              className="navbar__Profile--MenuBox-Img"
                              src={user.imageUrl}
                              alt=""
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
                          <Menu.Items className="navbar__Profile--MenuBox-ItemBox">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "navbar__Profile--MenuBox-Items_Active" : "",
                                      "navbar__Profile--MenuBox-Items"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="navbar__Profile--MobileMenu-Container">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="navbar__Profile--MobileMenu-Btn">
                      <span className="navbar__Profile--Notify-Btn_Span">Open main menu</span>
                      {open ? (
                        <XIcon className="navbar__Profile--MobileMenu-Icon" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="navbar__Profile--MobileMenu-Icon"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="navbar__Profile--MobileMenu-Panel">
                <div className="navbar__Profile--MobileMenu-Items">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "navbar__Profile--MobileMenu-Item_Active"
                          : "navbar__Profile--MobileMenu-Item_Hover",
                        "navbar__Profile--MobileMenu-Item"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="navbar__Profile--MobileMenu-InfoBox">
                  <div className="navbar__Profile--MobileMenu-InfoBox_FlexBox">
                    <div className="navbar__Container--FlexBox-ImgBox">
                      <img
                        className="navbar__Profile--MobileMenu-InfoBox_Img"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="navbar__Profile--MobileMenu-InfoBox_UserBox">
                      <div className="navbar__Profile--MobileMenu-InfoBox_UserName">
                        {user.name}
                      </div>
                      <div className="navbar__Profile--MobileMenu-InfoBox_UserEmail">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="navbar__Profile--MobileMenu-InfoBox_Btn"
                    >
                      <span className="navbar__Profile--Notify-Btn_Span">View notifications</span>
                      <BellIcon className="navbar__Profile--MobileMenu-InfoBox_Icon" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="navbar__Profile--MobileMenu-InfoItems">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="navbar__Profile--MobileMenu-InfoItem"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    );
  };

  export default Navbar;