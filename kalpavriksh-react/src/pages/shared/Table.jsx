import React, { useState } from "react";

import { viewIcon, editIcon } from "../../Components/Icons";

import Modal from "../../Components/Modal";

const Table = () => { 

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <>
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen flex overflow-hidden">
          <div className="w-full lg:w-5/6 my-6">
            <div className="shadow-md rounded">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-4 text-left">Sl No.</th>
                    <th className="py-3 px-6 text-left">
                      Doctor / Dietician Name
                    </th>
                    <th className="py-3 px-6 text-center">
                      Medicines / Dietchart
                    </th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-3 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">1.</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>Dr. Rajiv Singla</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <button
                            type="button"
                            className="forms__Controller--Btn-Container_Btn-Gray"
                            onClick={() => handleShow()}
                          >
                            Medicines
                          </button>                          
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                        New
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <>{viewIcon()}</>
                        <>{editIcon()}</>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                    <td className="py-3 px-3 text-left">
                      <div className="flex items-center">
                        <span className="font-medium">2. </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>Dr. DSN Rao</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <button
                            type="button"
                            className="forms__Controller--Btn-Container_Btn-Gray"
                          >
                            Medicines
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                        Old
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <>{viewIcon()}</>
                        <>{editIcon()}</>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-3 text-left">
                      <div className="flex items-center">
                        <span className="font-medium">3. </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>Dr. Suha C</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <button
                            type="button"
                            className="forms__Controller--Btn-Container_Btn-Gray"
                          >
                            Medicines
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                        Scheduled
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <>{viewIcon()}</>
                        <>{editIcon()}</>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} />
    </>
  );
};

export default Table;
