import React from "react";
import AdminNav from "../../../user/shared/AdminNav";

const EmployeSummary = () => {
  return (
    <>
      <div className="min-h-full">
        <AdminNav />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard - SUPER ADMIN
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div>
              <div className="form__Grid--Cols-6">
                <div className="form__Cols--Span-2">
                  <label htmlFor="status" className="form__Label-Heading">
                    Select Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    autoComplete="status-name"
                    className="form__Select"
                  >
                    <option>Select Status</option>
                    <option>All</option>
                    <option>Active</option>
                    <option>De-Active</option>
                  </select>
                </div>
              </div>
              <div className="my-10">
                <div className="flex justify-start">
                  <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg text-gray-700 font-semibold">
                      Employee Name:
                      <span className="mx-3 px-3 py-2 text-gray-700 font-normal">
                        Dr. Suha
                      </span>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full text-gray-700 font-semibold">
                      Primary Patients:
                      <span className="mx-3 px-3 py-2 text-gray-700 font-normal">
                        150
                      </span>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full text-gray-700 font-semibold">
                      Secondary Patients:
                      <span className="mx-0 px-3 py-2 text-gray-700 font-normal">
                        48
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="my-10">
              <div className="form__Grid--Cols-6">
                <div className="form__Cols--Span-2">
                  <label htmlFor="employee" className="form__Label-Heading">
                    Select Employee
                  </label>
                  <select
                    id="employee"
                    name="employee"
                    autoComplete="employee-name"
                    className="form__Select"
                  >
                    <option>Select Employee</option>
                    <option>Employee 1</option>
                    <option>Employee 2</option>
                    <option>Employee 3</option>
                    <option>Employee 4</option>
                  </select>
                </div>
                <div className="form__Cols--Span-2">
                  <label htmlFor="program" className="form__Label-Heading">
                    Select Program
                  </label>
                  <select
                    id="program"
                    name="program"
                    autoComplete="program-name"
                    className="form__Select"
                  >
                    <option>Select Program</option>
                    <option>Program 1</option>
                    <option>Program 2</option>
                    <option>Program 3</option>
                    <option>Program 4</option>
                  </select>
                </div>
              </div>
              <div className="my-10">
                <div className="flex justify-start">
                  <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg text-gray-700 font-semibold">
                      Program Name:
                      <span className="mx-3 px-3 py-2 text-gray-700 font-normal">
                        Program 1
                      </span>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full text-gray-700 font-semibold">
                      Active Patients:
                      <span className="mx-3 px-3 py-2 text-gray-700 font-normal">
                        150
                      </span>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full text-gray-700 font-semibold">
                      New Patients:
                      <span className="mx-6 px-3 py-2 text-gray-700 font-normal">
                        48
                      </span>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg text-gray-700 font-semibold">
                      <p className="text-center font-semibold">------------------</p>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg text-gray-700 font-semibold">
                      Program Name:
                      <span className="mx-3 px-3 py-2 text-gray-700 font-normal">
                        Program 2
                      </span>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full text-gray-700 font-semibold">
                      Active Patients:
                      <span className="mx-3 px-3 py-2 text-gray-700 font-normal">
                        78
                      </span>
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full text-gray-700 font-semibold">
                      New Patients:
                      <span className="mx-6 px-3 py-2 text-gray-700 font-normal">
                        14
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default EmployeSummary;
