import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../shared/Navbar";

const CreateForm = () => {
  const history = useHistory();

  const createFormHandler = (e) => {
    e.preventDefault();
    history.push("/userrole/");
  };

  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl tracking-tight font-bold text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8b g-gray-300">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="flex flex-col align-middle">
                <h2 className="text-2xl text-center font-semibold text-grey-500">
                  Create Form Record
                </h2>
                <div className="grid max-w-full w-full mx-auto my-10 lg:mx-40 md:mx-32 sm:mx-10">
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <form
                        action="#"
                        method="POST"
                        onSubmit={createFormHandler}
                      >
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                          <div className="mx-auto px-4 py-5 bg-gray-100 space-y-6 sm:p-6">
                            <div className="grid grid-cols-6 justify-center gap-6">
                              <div className="col-span-6 sm:col-span-6">
                                <label
                                  htmlFor="patient-formQuestionTitle"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Form Question Title
                                </label>
                                <input
                                  type="text"
                                  name="patient-formQuestionTitle"
                                  id="patient-formQuestionTitle"
                                  autoComplete="patient-formQuestionTitle"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-6">
                                <button
                                  type="button"
                                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-300 shadow-md hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                                >
                                  Add Question
                                </button>
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-questionType"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Question Type
                                </label>
                                <select
                                  id="patient-questionType"
                                  name="patient-questionType"
                                  autoComplete="patient-questionType"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option>Please Select Question Type</option>
                                  <option>Input - Text Area</option>
                                  <option>MCQ - Checkbox</option>
                                  <option>MCQ - Radio</option>
                                </select>
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-questionTitle"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Question Title
                                </label>
                                <input
                                  type="text"
                                  name="patient-questionTitle"
                                  id="patient-questionTitle"
                                  autoComplete="patient-questionTitle"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-questionChoice"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Question Choice 1
                                </label>
                                <input
                                  type="text"
                                  name="patient-questionChoice"
                                  id="patient-questionChoice"
                                  autoComplete="patient-questionChoice"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-questionChoice"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Question Choice 2
                                </label>
                                <input
                                  type="text"
                                  name="patient-questionChoice"
                                  id="patient-questionChoice"
                                  autoComplete="patient-questionChoice"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-questionChoice"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Question Choice 3
                                </label>
                                <input
                                  type="text"
                                  name="patient-questionChoice"
                                  id="patient-questionChoice"
                                  autoComplete="patient-questionChoice"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="patient-questionChoice"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Question Choice 4
                                </label>
                                <input
                                  type="text"
                                  name="patient-questionChoice"
                                  id="patient-questionChoice"
                                  autoComplete="patient-questionChoice"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="rounded-b-md shadow-md px-4 py-3 bg-gray-300 sm:px-6">
                          <div className="text-right">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
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

export default CreateForm;
