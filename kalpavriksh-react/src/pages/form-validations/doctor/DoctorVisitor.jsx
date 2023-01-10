import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { listPatients } from "../../../action/PatientAction";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";

const DoctorVisitor = () => {
  const patientList = useSelector((state) => state.patientList);
  const { loading, error, patients } = patientList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listPatients());
  }, [dispatch]);
  // if(patients){
  //   console.log(patients);
  // }

  let navigate = useNavigate();
  return (
    <>
      <div className="flex justify-evenly">
        {/* <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Patient Count
            <span className="text-xs inline-block mx-3 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">
              Active
            </span>
          </h5>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            45
          </button>
        </div> */}
        {/* <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Patient Count
            <span className="text-xs inline-block mx-3 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded-full">
              Unpaid
            </span>
          </h5>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            34
          </button>
        </div> */}
        {/* <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Patient Count
            <span className="text-xs inline-block mx-3 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-500 text-white rounded-full">
              Program
            </span>
          </h5>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            78
          </button>
        </div> */}
      </div>

      <div className="my-10">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-20 p-3 text-lg font-semibold tracking-wide text-left">
                Sl No.
              </th>
              {/* <th className="p-3 text-lg font-semibold tracking-wide text-left">
                Doctor Name
              </th> */}
              <th className="p-3 text-lg font-semibold tracking-wide text-left">
                Patient Name
              </th>
              <th className="p-3 text-lg font-semibold tracking-wide text-left">
                Date
              </th>
              <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox>{error}</MessageBox>
            ) : (
              patients &&
              patients.map((itm, i) => (
                <tr key={itm._id} className="bg-white">
                  <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    {i + 1}
                  </td>
                  {/* <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    {itm.team}
                  </td> */}
                  <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    {itm.name}
                  </td>
                  <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    11-10-2022
                  </td>
                  <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                    <div className="flex flex-row justify-center">
                      <div className="inline-block p-6">
                        <FiEye
                          className="h-6 w-6 hover:text-green-500"
                          onClick={() =>
                            navigate(
                              "/userrole/:roleid/dashboard/doctor/meeting/info/",
                              { state: { id: itm._id } }
                            )
                          }
                        />
                      </div>
                      <div className="inline-block p-6">
                        <FiEdit className="h-6 w-6 hover:text-blue-500" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DoctorVisitor;
