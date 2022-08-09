import React from "react";

const PopupButton = () => {
  return (
    <div className="absolute right-10 bottom-10">
      <div>
        <div className="dropup relative">
          <button
            className="
            dropdown-toggle
            bg-blue-600
            px-3
            py-1.5
            text-white
            font-medium
            text-2xl
            leading-tight
            uppercase
            rounded-full
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg active:text-white
            transition
            duration-150
            ease-in-out
            flex
            items-center
            whitespace-nowrap
          "
            type="button"
            id="dropdownMenuButton1u"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            +
          </button>
          <ul
            className="
            dropdown-menu
            min-w-max
            absolute
            hidden
            bg-white
            text-base
            z-50
            float-left
            py-2
            list-none
            text-left
            rounded-lg
            shadow-lg
            mt-1
            hidden
            m-0
            bg-clip-padding
            border-none
          "
            aria-labelledby="dropdownMenuButton1u"
          >
            <li>
              <a
                className="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-700
                hover:bg-gray-100
              "
                href="#"
              >
                Action
              </a>
            </li>
            <li>
              <a
                className="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-700
                hover:bg-gray-100
              "
                href="#"
              >
                Another action
              </a>
            </li>
            <li>
              <a
                className="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-700
                hover:bg-gray-100
              "
                href="#"
              >
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopupButton;
