import React, { Fragment, useEffect } from "react";
import { useHistory, NavLink, Link } from "react-router-dom";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const authenticateduser = JSON.parse(localStorage.getItem('kalpavriksh'))

// const role = typeof (JSON.parse(localStorage.getItem("kalpavriksh"))) === 'object' ? JSON.parse(localStorage.getItem("kalpavriksh")).username : undefined
const role = authenticateduser ? authenticateduser.username : null

// const email = JSON.parse(localStorage.getItem("kalpavriksh")).email;
const email = authenticateduser ? authenticateduser.email : null

const user = {
    name: `${role}`,
    email: `${email}`,
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const userNavigation = [
    { name: `${role}`, href: "#" },
    { name: "Sign out", href: "/", onClick: "logoutHandler()" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    const history = useHistory();
    return (<div className="nav">
        <div className="nav__flex">
            <div className="nav__flexshrink">
                <div className="nav__image">
                    <img
                        className="nav__imagetag"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                    />
                </div>
                <div className="nav__navbar">
                    <div className="nav__container">
                        <Link to='/userrole/' className="nav__link">
                            Dashboard
                        </Link>
                        <Link to='/userrole/createPatient' className="nav__link">
                            Enroll Patient
                        </Link>
                        <Link to='/userrole/createForm' className="nav__link">
                            Create Form
                        </Link>
                        <Link to='/userrole/uploadDietChart' className="nav__link">
                            Upload Diet Chart
                        </Link>
                    </div>
                </div>
            </div>
            <div className="nav__notification">
                <div className="nav__notification--button">
                    <button
                        type="button"
                        className="nav__notification--button--button"
                    >
                        <span className="nav__notification--button--span">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="nav__notification--menu">
                        <div>
                            <Menu.Button className="nav__notification--menu--button">
                                <span className="nav__notification--span">Open user menu</span>
                                <img
                                    className="nav__notification--imgtag"
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
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <NavLink
                                                to={item.href}
                                                className={classNames(
                                                    active ? "bg-gray-100" : "",
                                                    "nav__notification--menuitems"
                                                )}
                                            >
                                                {item.name}
                                                onClick={item.onClick}
                                            </NavLink>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            <div className="nav__notification--mobile">
                {/* Mobile menu button */}
                {/* <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                        />
                    )}
                </Disclosure.Button> */}
            </div>
        </div>
    </div>)
}

export default Navbar