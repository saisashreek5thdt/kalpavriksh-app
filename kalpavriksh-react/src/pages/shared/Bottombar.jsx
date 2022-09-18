import React, { Fragment } from "react";

import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "My Data", href: "/userrole/:roleid/form/patientform/", current: true },
  { name: "Prescriptions", href: "/userrole/:roleid/form/prescriptions/", current: true },
  { name: "Chat", href: "/userrole/:roleid/form/patientform/", current: true }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

  const Bottombar = () => {
    return (
        <Disclosure as="nav" className="static bottom-0 navbar__Bg">
          {({ open }) => (
            <>
              <div className="navbar__Container">
                <div className="navbar__Container--FlexBox">
                  <div className="navbar__Container--FlexBox-Items">
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
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    );
  };

  export default Bottombar;