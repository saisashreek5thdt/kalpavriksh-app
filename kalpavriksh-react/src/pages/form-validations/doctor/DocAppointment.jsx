import React from "react";
import DocAppointmentTable from "./DocAppointmentTable";

const DocAppointment = () => {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border border-gray-400 lg:border-0 lg:border-gray-400 bg-gray-50 rounded lg:rounded-none lg:rounded p-4 flex flex-col justify-between leading-normal drop-shadow-lg">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Number of Appointments
            </div>
            <div className="px-6 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {" "}
                # 12{" "}
              </span>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <input
                  type="date"
                  name="appointment"
                  id="appointment"
                  autoComplete="given-name"
                  className="form__Input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DocAppointmentTable />
    </>
  );
};

export default DocAppointment;
