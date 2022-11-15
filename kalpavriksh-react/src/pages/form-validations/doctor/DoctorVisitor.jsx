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

  const dispatch = useDispatch()


  useEffect(()=>{
      dispatch(listPatients())
  },[dispatch])
  if(patients){
    console.log(patients.data)
  }
 
    let navigate = useNavigate();
  return (
    <>
      <div className="flex justify-evenly">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Patient Count
            <span className="text-xs inline-block mx-3 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">
              Active
            </span>
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            45
          </button>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Patient Count
            <span className="text-xs inline-block mx-3 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded-full">
              Unpaid
            </span>
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            34
          </button>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Patient Count
            <span className="text-xs inline-block mx-3 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-500 text-white rounded-full">
              Program
            </span>
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            78
          </button>
        </div>
      </div>

      <div className="my-10">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-lg font-bold text-gray-900 px-2 py-4">
                Sl No.
              </th>
              <th className="text-lg font-bold text-gray-900 px-2 py-4">
                Doctor Name
              </th>
              <th className="text-lg font-bold text-gray-900 px-2 py-4">
                Patient Name
              </th>
              <th className="text-lg font-bold text-gray-900 px-2 py-4">
                Appointment Date
              </th>
              <th className="text-lg font-bold text-gray-900 px-2 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          {loading ? <LoadingBox></LoadingBox>:
                error? <MessageBox>{error}</MessageBox>:
                patients.data && patients.data.map((itm,i)=>(
            
                  <tr key={itm._id} className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 text-center">
                    {i+1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 text-center">
                    {itm.team}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 text-center">
                    {itm.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 text-center">
                    11-10-2022
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 text-center">
                    <div className="flex flex-row justify-center">
                      <div className="inline-block p-6">
                        <FiEye
                          className="h-6 w-6 hover:text-green-500"
                          onClick={() =>
                            navigate(
                              "/userrole/:roleid/dashboard/doctor/meeting/info/",{state:{id:itm._id}}
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
       
       ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DoctorVisitor;
