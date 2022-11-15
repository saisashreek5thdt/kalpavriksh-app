import React from "react";
import { useNavigate } from "react-router-dom";

export const Form1 = () => {
  let navigate = useNavigate();
  const nextStep = () => {
    navigate("/userrole/:roleid/dashboard/patient/mydata/");
  };
  return (
    <>
      <div className="accordion" id="accordionFlushOne">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="flush-headingOne">
            <button
              type="button"
              className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-semibold bg-white border-0 rounded-none transition focus:outline-none"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="true"
              aria-controls="flush-collapseOne"
            >
              {" "}
              Form Title - 1{" "}
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushOne"
          >
            <div className="accordion-body py-4 px-5">
              <div className="dashboard__Grid-Box">
                <div className="dashboard__Grid-Cols">
                  <form action="#" method="POST">
                    <div className="form__Box-Shadow">
                      <div className="form__Box-Space">
                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h2 className="text-xl text-center font-bold pt-5">
                              Form Title
                            </h2>
                            <h5 className="text-lg font-medium pt-5">
                              Question Title 1
                            </h5>
                          </div>
                        </div>
                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 1
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 2
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 3
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 4
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h5 className="text-lg font-medium pt-5">
                              Question Title 2
                            </h5>
                          </div>
                        </div>

                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 1
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 2
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 3
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 4
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h5 className="text-lg font-medium pt-5">
                              Question Title 3
                            </h5>
                          </div>
                        </div>

                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="food-type"
                              className="form__Label-Heading"
                            >
                              Question Choice - Paragraph
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form__Btn-Bg">
                        <button
                          onClick={nextStep}
                          type="submit"
                          className="form__Btn-Submit"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Form2 = () => {
  let navigate = useNavigate();
  const nextStep = () => {
    navigate("/userrole/:roleid/dashboard/patient/mydata/");
  };

  return (
    <>
      <div className="accordion" id="accordionFlushTwo">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="flush-headingTwo">
            <button
              type="button"
              className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-semibold bg-white border-0 rounded-none transition focus:outline-none"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="true"
              aria-controls="flush-collapseTwo"
            >
              {" "}
              Form Title - 2{" "}
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse border-0 collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushTwo"
          >
            <div className="accordion-body py-4 px-5">
              <div className="dashboard__Grid-Box">
                <div className="dashboard__Grid-Cols">
                  <form action="#" method="POST">
                    <div className="form__Box-Shadow">
                      <div className="form__Box-Space">
                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h2 className="text-xl text-center font-bold pt-5">
                              Form Title
                            </h2>
                            <h5 className="text-lg font-medium pt-5">
                              Question Title 1
                            </h5>
                          </div>
                        </div>
                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 1
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 2
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 3
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 4
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h5 className="text-lg font-medium pt-5">
                              Question Title 2
                            </h5>
                          </div>
                        </div>

                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 1
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 2
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 3
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 4
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h5 className="text-lg font-medium pt-5">
                              Question Title 3
                            </h5>
                          </div>
                        </div>

                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="food-type"
                              className="form__Label-Heading"
                            >
                              Question Choice - Paragraph
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form__Btn-Bg">
                        <button
                          onClick={nextStep}
                          type="submit"
                          className="form__Btn-Submit"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Form3 = () => {
    let navigate = useNavigate();
    const nextStep = () => {
      navigate("/userrole/:roleid/dashboard/patient/mydata/");
    };
  
    return (
      <>
        <div className="accordion" id="accordionFlushTwo">
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingTwo">
              <button
                type="button"
                className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-semibold bg-white border-0 rounded-none transition focus:outline-none"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="true"
                aria-controls="flush-collapseTwo"
              >
                {" "}
                Form Title - 3{" "}
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse border-0 collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushTwo"
            >
              <div className="accordion-body py-4 px-5">
                <div className="dashboard__Grid-Box">
                  <div className="dashboard__Grid-Cols">
                    <form action="#" method="POST">
                      <div className="form__Box-Shadow">
                        <div className="form__Box-Space">
                          <div className="form__Grid--Rows-none">
                            <div className="form__Cols--Span-6">
                              <h2 className="text-xl text-center font-bold pt-5">
                                Form Title
                              </h2>
                              <h5 className="text-lg font-medium pt-5">
                                Question Title 1
                              </h5>
                            </div>
                          </div>
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <div className="flex justify-start items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    id="choice-1"
                                    name="choice-1"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="choice-1"
                                    className="font-medium text-gray-700"
                                  >
                                    Question Choice 1
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form__Cols--Span-6">
                              <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    id="choice-2"
                                    name="choice-2"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="choice-2"
                                    className="font-medium text-gray-700"
                                  >
                                    Question Choice 2
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form__Cols--Span-6">
                              <div className="flex justify-start items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    id="choice-1"
                                    name="choice-1"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="choice-1"
                                    className="font-medium text-gray-700"
                                  >
                                    Question Choice 3
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form__Cols--Span-6">
                              <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    id="choice-2"
                                    name="choice-2"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="choice-2"
                                    className="font-medium text-gray-700"
                                  >
                                    Question Choice 4
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
  
                          <div className="form__Grid--Rows-none">
                            <div className="form__Cols--Span-6">
                              <h5 className="text-lg font-medium pt-5">
                                Question Title 2
                              </h5>
                            </div>
                          </div>
  
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <div className="flex justify-start items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    id="choice-1"
                                    name="choice-1"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="choice-1"
                                    className="font-medium text-gray-700"
                                  >
                                    Question Choice 1
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form__Cols--Span-6">
                              <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    id="choice-2"
                                    name="choice-2"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="choice-2"
                                    className="font-medium text-gray-700"
                                  >
                                    Question Choice 2
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form__Cols--Span-6">
                              <div className="flex justify-start items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    id="choice-1"
                                    name="choice-1"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="choice-1"
                                    className="font-medium text-gray-700"
                                  >
                                    Question Choice 3
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form__Cols--Span-6">
                              <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    id="choice-2"
                                    name="choice-2"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="choice-2"
                                    className="font-medium text-gray-700"
                                  >
                                    Question Choice 4
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
  
                          <div className="form__Grid--Rows-none">
                            <div className="form__Cols--Span-6">
                              <h5 className="text-lg font-medium pt-5">
                                Question Title 3
                              </h5>
                            </div>
                          </div>
  
                          <div className="form__Grid--Rows-none">
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="food-type"
                                className="form__Label-Heading"
                              >
                                Question Choice - Paragraph
                              </label>
                              <div className="mt-1">
                                <textarea
                                  id="about"
                                  name="about"
                                  rows={3}
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  placeholder="you@example.com"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
  
                        <div className="form__Btn-Bg">
                          <button
                            onClick={nextStep}
                            type="submit"
                            className="form__Btn-Submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };