import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FiBell, FiX, FiMenu } from "react-icons/fi";

import Logo from "../../Assets/img/logo-login.svg";
import User from "../../Assets/user/user.jpg";
import { patientSignout } from "../../action/PatientAction";
import { useDispatch } from "react-redux";

const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl: User,
  };
  
  const navigation = [
    {
      name: "Dashboard",
      href: "/userrole/:roleid/dashboard/patient/",
      current: true,
    },
    {
      name: "MyData",
      href: "/userrole/:roleid/dashboard/patient/mydata/",
      current: true,
    },
    {
      name: "Prescriptions",
      href: "/userrole/:roleid/dashboard/patient/prescriptions/",
      current: true,
    },
    {
      name: "Chat",
      href: "/userrole/:roleid/dashboard/common/chat/",
      current: true,
    },
  ];
  

  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

const PatientNav = () => {
  const dispatch=useDispatch()
  const hello=()=>{
    //  console.log('heysiri');
    dispatch(patientSignout())
  }

  const userNavigation = [
    { name: "Your Profile", href: "/userrole/:roleid/dashboard/patient/profile/" },
    // { name: "Settings", href: "#" },
    { name: "Sign outss", fun:hello  },
  ];
  return (
    <>
      <Disclosure as="nav" className="navbar__BG">
        {({ open }) => (
          <>
            <div className="navbar__Container-Desk">
              <div className="navbar__Flex--Box">
                <div className="navbar__Flex--Items">
                  <div className="navbar__Flex--LogoBox">
                    <img
                      className="navbar__Flex--LogoBox-Logo"
                      src={Logo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="navbar__Hidden-MD">
                    <div className="navbar__Flex--NavItems">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "navbar__Flex--NavItems-Anchor_BG"
                              : "navbar__Flex--NavItems-Anchor_Hover",
                            "navbar__Flex--NavItems-Anchor"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="navbar__Hidden-MD">
                  <div className="navbar__RightBox">
                    <button
                      type="button"
                      className="navbar__RightBox--Btn"
                    >
                      <span className="navbar__RightBox--Btn-Span">View notifications</span>
                      <FiBell className="navbar__RightBox--Btn-Icon" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="navbar__ProfileBox">
                      <div>
                        <Menu.Button className="navbar__ProfileBox--Btn">
                          <span className="navbar__RightBox--Btn-Span">Open user menu</span>
                          <img
                            className="navbar__ProfileBox--Btn-Img"
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
                        <Menu.Items className="navbar__ProfileBox--ItemsBox">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                onClick={item.fun}
                                  href={item.href}
                                  className={classNames(
                                    active ? "navbar__ProfileBox--Item-Active" : "",
                                    "navbar__ProfileBox--Item"
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
                <div className="navbar__Menu-Hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="navbar__Menu-Btn">
                    <span className="navbar__RightBox--Btn-Span">Open main menu</span>
                    {open ? (
                      <FiX className="navbar__Menu-Icon" aria-hidden="true" />
                    ) : (
                      <FiMenu className="navbar__Menu-Icon" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="navbar__Menu-Hide">
              <div className="navbar__Menu-Mobile-Box">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "navbar__Menu-Mobile--Items-BG"
                        : "navbar__Menu-Mobile--Items-Hover",
                      "navbar__Menu-Mobile--Items"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="navbar__Border-Mobile">
                <div className="navbar__FlexBox-Mobile">
                  <div className="navbar__Flex-ImgBox-Mobile">
                    <img
                      className="navbar__Flex-Img-Mobile"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="navbar__User-List-Mobile">
                    <div className="navbar__User-Name-Mobile">
                      {user.name}
                    </div>
                    <div className="navbar__User-Email-Mobile">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="navbar__Btn-Box-Mobile"
                  >
                    <span className="navbar__Btn-Box-Mobile--Span">View notifications</span>
                    <FiBell className="navbar__Btn-Box-Mobile--Icon" aria-hidden="true" />
                  </button>
                </div>
                <div className="navbar__List-Items-Mobile">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="navbar__List-Item-Mobile"
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
    </>
  );
};

export default PatientNav;
