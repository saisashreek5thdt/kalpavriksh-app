import React from "react";

const Stepper = () => {
  return (
    <>
      <div className="flex flex-row align-middle justify-center">
        <ol className="flex flex-row flex-wrap justify-items-center text-center align-middle my-12 sm:flex sm:hidden">
          <li
            className="relative w-[150px] text-center text-sm font-semibold italic
                after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 
                after:bg-blue-500 after:rounded-full after:z-50
                "
          >
            Step One
          </li>
          <li
            className="relative w-[150px] text-center text-sm font-semibold italic
            before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.5rem)] before:w-full before:h-1 
            before:bg-blue-500
            after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 
            after:bg-blue-500 after:rounded-full after:z-50
                "
          >
            Step Two
          </li>

          <li
            className="relative w-[150px] text-center text-sm font-semibold italic
            before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.5rem)] before:w-full before:h-1 
            before:bg-blue-500
            after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 
            after:bg-blue-500 after:rounded-full after:z-50
                "
          >
            Step Three
          </li>
          <li
            className="relative w-[150px] text-center text-sm font-light italic
            before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.5rem)] before:w-full before:h-1 
            before:bg-gray-300
            after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 
            after:bg-gray-300 after:rounded-full after:z-50
                "
          >
            Final Step
          </li>
        </ol>
      </div>
    </>
  );
};

export default Stepper;
