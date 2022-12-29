import React from "react";
import { FiChevronDown } from "react-icons/fi";

const PatientUploadDietChart = () => {
  return (
    <>
      <div className="tab__Card--Container tab__Card--Gap-1">
        <div className="tab__Card--Block">
          <h5 className="tab__Card--Title">
            Prescribed Diet Chart
            <span className="tab__Tag--New">
              Latest
            </span>
          </h5>
          <p className="tab__Card--Info">
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
          <button
            type="button"
            className="tab__Btn tab__Btn--Hover tab__Btn--Focus tab__Btn-Active"
            data-bs-toggle="modal"
            data-bs-target="#modalDietChart"
          >
            View
          </button>
        </div>
        <div className="tab__Card--Block">
          <h5 className="tab__Card--Title">
            Prescribed Diet Chart
            <span className="tab__Tag--Old">
              Old
            </span>
          </h5>
          <p className="tab__Card--Info">
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
          <button
            type="button"
            className="tab__Btn tab__Btn--Hover tab__Btn--Focus tab__Btn-Active"
            data-bs-toggle="modal"
            data-bs-target="#modalOldDietChart"
          >
            View
          </button>
        </div>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="modalDietChart"
        tabIndex="-1"
        aria-labelledby="modalDietChartLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="modalDietChartLabel"
              >
                DietChart
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <div className="form__Grid--Cols-6">
                <div className="form__Cols--Span-6">
                  <label htmlFor="prescribedBy" className="form__Label-Heading">
                    Doctor Name
                  </label>
                  <p className="form__Heading">Rajiv Singla</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="prescribedDate"
                    className="form__Label-Heading"
                  >
                    Prescribed Date
                  </label>
                  <p className="form__Heading">24-11-2022</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="lowerCalories"
                    className="form__Label-Heading"
                  >
                    Low Calories Range
                  </label>
                  <p className="form__Heading">23</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="highCalories" className="form__Label-Heading">
                    High Clories Range
                  </label>
                  <p className="form__Heading">55</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="lowerCarbohydrates"
                    className="form__Label-Heading"
                  >
                    Low Carbohydrates Range
                  </label>
                  <p className="form__Heading">23</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="highCarbohydrates"
                    className="form__Label-Heading"
                  >
                    High Carbohydrates Range
                  </label>
                  <p className="form__Heading">55</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="proties" className="form__Label-Heading">
                    Protiens Range
                  </label>
                  <p className="form__Heading">68</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="fats" className="form__Label-Heading">
                    Fats Range
                  </label>
                  <p className="form__Heading">35</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="foodType" className="form__Label-Heading">
                    Food Type (Veg / Nonveg / Egg)
                  </label>
                  <p className="form__Heading">Veg</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="foodCusine" className="form__Label-Heading">
                    Food Cusine
                  </label>
                  <p className="form__Heading">Home Cooked Food</p>
                </div>
              </div>
              <div className="form__Grid--Rows-none">
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="downloadDietChart"
                    className="form__Label-Heading"
                  >
                    Download Diet Chart
                  </label>
                  <p className="form__Heading">
                    <button
                      type="button"
                      className="px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                    >
                      Download Diet Chart
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="modalOldDietChart"
        tabIndex="-1"
        aria-labelledby="modalOldDietChartabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="modalOldDietChartLabel"
              >
                DietChart (Old Date Wise / Prescribed By)
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <div className="p-2">
                <div className="relative w-full overflow-hidden">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  />
                  <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                    <h1 className="text-lg font-semibold text-gray-600">
                      Rajiv Singla /20-11-2022
                    </h1>
                  </div>
                  {/* Down Arrow Icon */}
                  <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                    <FiChevronDown className="w-6 h-6" />
                  </div>
                  {/* Content */}
                  <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                    <div className="p-4">
                      <div className="form__Grid--Cols-6">
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="prescribedBy"
                            className="form__Label-Heading"
                          >
                            Doctor Name
                          </label>
                          <p className="form__Heading">Rajiv Singla</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="prescribedDate"
                            className="form__Label-Heading"
                          >
                            Prescribed Date
                          </label>
                          <p className="form__Heading">20-11-2022</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="lowerCalories"
                            className="form__Label-Heading"
                          >
                            Low Calories Range
                          </label>
                          <p className="form__Heading">23</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="highCalories"
                            className="form__Label-Heading"
                          >
                            High Clories Range
                          </label>
                          <p className="form__Heading">55</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="lowerCarbohydrates"
                            className="form__Label-Heading"
                          >
                            Low Carbohydrates Range
                          </label>
                          <p className="form__Heading">23</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="highCarbohydrates"
                            className="form__Label-Heading"
                          >
                            High Carbohydrates Range
                          </label>
                          <p className="form__Heading">55</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="proties"
                            className="form__Label-Heading"
                          >
                            Protiens Range
                          </label>
                          <p className="form__Heading">68</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label htmlFor="fats" className="form__Label-Heading">
                            Fats Range
                          </label>
                          <p className="form__Heading">35</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="foodType"
                            className="form__Label-Heading"
                          >
                            Food Type (Veg / Nonveg / Egg)
                          </label>
                          <p className="form__Heading">Veg</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="foodCusine"
                            className="form__Label-Heading"
                          >
                            Food Cusine
                          </label>
                          <p className="form__Heading">Home Cooked Food</p>
                        </div>
                      </div>
                      <div className="form__Grid--Rows-none">
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="downloadDietChart"
                            className="form__Label-Heading"
                          >
                            Download Diet Chart
                          </label>
                          <p className="form__Heading">
                            <button
                              type="button"
                              className="px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                            >
                              Download Diet Chart
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="relative w-full overflow-hidden">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  />
                  <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                    <h1 className="text-lg font-semibold text-gray-600">
                      Suha / 15-10-2022
                    </h1>
                  </div>
                  {/* Down Arrow Icon */}
                  <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                    <FiChevronDown className="w-6 h-6" />
                  </div>
                  {/* Content */}
                  <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
                    <div className="p-4">
                      <div className="form__Grid--Cols-6">
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="prescribedBy"
                            className="form__Label-Heading"
                          >
                            Doctor Name
                          </label>
                          <p className="form__Heading">Suha</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="prescribedDate"
                            className="form__Label-Heading"
                          >
                            Prescribed Date
                          </label>
                          <p className="form__Heading">15-10-2022</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="lowerCalories"
                            className="form__Label-Heading"
                          >
                            Low Calories Range
                          </label>
                          <p className="form__Heading">23</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="highCalories"
                            className="form__Label-Heading"
                          >
                            High Clories Range
                          </label>
                          <p className="form__Heading">55</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="lowerCarbohydrates"
                            className="form__Label-Heading"
                          >
                            Low Carbohydrates Range
                          </label>
                          <p className="form__Heading">23</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="highCarbohydrates"
                            className="form__Label-Heading"
                          >
                            High Carbohydrates Range
                          </label>
                          <p className="form__Heading">55</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="proties"
                            className="form__Label-Heading"
                          >
                            Protiens Range
                          </label>
                          <p className="form__Heading">68</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label htmlFor="fats" className="form__Label-Heading">
                            Fats Range
                          </label>
                          <p className="form__Heading">35</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="foodType"
                            className="form__Label-Heading"
                          >
                            Food Type (Veg / Nonveg / Egg)
                          </label>
                          <p className="form__Heading">Veg</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="foodCusine"
                            className="form__Label-Heading"
                          >
                            Food Cusine
                          </label>
                          <p className="form__Heading">Home Cooked Food</p>
                        </div>
                      </div>
                      <div className="form__Grid--Rows-none">
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="downloadDietChart"
                            className="form__Label-Heading"
                          >
                            Download Diet Chart
                          </label>
                          <p className="form__Heading">
                            <button
                              type="button"
                              className="px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                            >
                              Download Diet Chart
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientUploadDietChart;