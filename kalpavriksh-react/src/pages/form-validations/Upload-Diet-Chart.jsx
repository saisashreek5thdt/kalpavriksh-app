import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../shared/Navbar";

const UploadDietChart = () => {

    const history = useHistory();

  const uploadDietCharthHandler = (e) => {
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
                      Upload Diet Chart
                    </h2>
                    <div className="grid max-w-full w-full mx-auto my-10 lg:mx-40 md:mx-32 sm:mx-10">
                      <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                          <form
                            action="#"
                            method="POST"
                            onSubmit={uploadDietCharthHandler}
                          >
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                              <div className="mx-auto px-4 py-5 bg-gray-100 space-y-6 sm:p-6">
                                <div className="grid grid-cols-6 justify-center gap-6">
                                  <div className="col-span-3 sm:col-span-3">
                                    <label
                                      htmlFor="patient-caloriesRangeLow"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Calories Range (Lower Value)
                                    </label>
                                    <input
                                      type="text"
                                      name="patient-caloriesRangeLow"
                                      id="patient-caloriesRangeLow"
                                      autoComplete="patient-caloriesRangeLow"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>
    
                                  <div className="col-span-3 sm:col-span-3">
                                  <label
                                      htmlFor="patient-caloriesRangeHigh"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Calories Range (Upper Value)
                                    </label>
                                    <input
                                      type="text"
                                      name="patient-caloriesRangeHigh"
                                      id="patient-caloriesRangeHigh"
                                      autoComplete="patient-caloriesRangeHigh"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>

                                  <div className="col-span-3 sm:col-span-3">
                                    <label
                                      htmlFor="patient-carbohydratesRangeLow"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Carbohydrates Range (Lower Value)
                                    </label>
                                    <input
                                      type="text"
                                      name="patient-carbohydratesRangeLow"
                                      id="patient-carbohydratesRangeLow"
                                      autoComplete="patient-carbohydratesRangeLow"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>
    
                                  <div className="col-span-3 sm:col-span-3">
                                  <label
                                      htmlFor="patient-carbohydratesRangeHigh"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Carbohydrates Range (Upper Value)
                                    </label>
                                    <input
                                      type="text"
                                      name="patient-carbohydratesRangeHigh"
                                      id="patient-carbohydratesRangeHigh"
                                      autoComplete="patient-carbohydratesRangeHigh"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>

                                  <div className="col-span-3 sm:col-span-3">
                                    <label
                                      htmlFor="patient-protiens"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Protiens
                                    </label>
                                    <input
                                      type="text"
                                      name="patient-protiens"
                                      id="patient-protiens"
                                      autoComplete="patient-protiens"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>

                                  <div className="col-span-3 sm:col-span-3">
                                    <label
                                      htmlFor="patient-fats"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Fats
                                    </label>
                                    <input
                                      type="text"
                                      name="patient-fats"
                                      id="patient-fats"
                                      autoComplete="patient-fats"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>
    
                                  <div className="col-span-3 sm:col-span-3">
                                    <label
                                      htmlFor="patient-vegetationType"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Vegetation Type
                                    </label>
                                    <select
                                      id="patient-vegetationType"
                                      name="patient-questionTvegetationTypeype"
                                      autoComplete="patient-vegetationType"
                                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option>Please Select Vegetation Type</option>
                                      <option>Vegetarian</option>
                                      <option>Non - Veg</option>
                                      <option>Egg</option>
                                    </select>
                                  </div>
    
                                  <div className="col-span-3 sm:col-span-3">
                                    <label
                                      htmlFor="patient-cuisine"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Cuisine
                                    </label>
                                    <input
                                      type="text"
                                      name="patient-cuisine"
                                      id="patient-cuisine"
                                      autoComplete="patient-cuisine"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>

                                  <div className="col-span-3 sm:col-span-3">
                                    <button
                                      type="file"
                                      name="patient-uploadFile"
                                      id="patient-uploadFile"
                                      autoComplete="patient-uploadFile"
                                      className="w-50 ml-5 bg-white py-2 px-1 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >Upload File</button>
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

export default UploadDietChart;