import React from "react";
import SummaryTab from "../UI/SummaryTab";
import AccesTab from "../UI/AccesTab";

const AdminTabs = () => {
  return (
    <>
      <ul
        className="
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
"
        id="tabs-tabJustify"
        role="tablist"
      >
        <li className="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-homeJustify"
            className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
            id="tabs-home-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-homeJustify"
            role="tab"
            aria-controls="tabs-homeJustify"
            aria-selected="true"
          >
            Summary
          </a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-profileJustify"
            className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-profile-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profileJustify"
            role="tab"
            aria-controls="tabs-profileJustify"
            aria-selected="false"
          >
            Access Controls
          </a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-messagesJustify"
            className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-messages-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messagesJustify"
            role="tab"
            aria-controls="tabs-messagesJustify"
            aria-selected="false"
          >
            Forms / Diet Charts
          </a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-dataJustify"
            className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-data-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-dataJustify"
            role="tab"
            aria-controls="tabs-dataJustify"
            aria-selected="false"
          >
            Data
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContentJustify">
        <div
          className="tab-pane fade show active"
          id="tabs-homeJustify"
          role="tabpanel"
          aria-labelledby="tabs-home-tabJustify"
        >
          <SummaryTab />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-profileJustify"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabJustify"
        >
          <AccesTab />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-messagesJustify"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabJustify"
        >
          Tab 3 content justify
        </div>
        <div
          className="tab-pane fade"
          id="tabs-dataJustify"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabJustify"
        >
          Tab 4 content justify
        </div>
      </div>
    </>
  );
};

export default AdminTabs;
