import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDoctorProfile } from "../../../action/DoctorAction";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";
import Navbar from "../../../user/shared/Navbar";

const DocProfile = () => {
  const navigate = useNavigate();
  const doctorProfileList=useSelector(state=>state.doctorProfileList)
  const {loading,error,profile}=doctorProfileList
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getDoctorProfile())
  },[dispatch])
  const backFunc = () => {
    navigate("/userrole/:roleid/dashboard/doctor/");
  };
  // if(profile){
  //   console.log(profile);
  // }
  return (
    <>
      <div className="dashboard__Container">
        <Navbar />
        <main>
          <div className="dashboard__Main-Content">
            {/* Replace with your content */}
            <div className="dashboard__Main-Inner-Content">
              <button
                type="button"
                className="text-center py-6 text-xl font-medium leading-6 text-gray-900"
                onClick={backFunc}
              >
                {" "}
                Back
              </button>
              <div className="px-4 py-6 sm:px-0">
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Doctor Personal Account Information
                    </h3>
                  </div>
                  {loading ? <LoadingBox></LoadingBox>:
                  error ? <MessageBox>{error}</MessageBox>:(
                    <div className="border-t border-gray-200">
                    <dl>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          Doctor Accout Status
                        </dt>
                        <dd className="mt-1 text-sm text-green-900 font-semibold sm:col-span-2 sm:mt-0">
                         {profile.doctor.status}
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          Doctor Name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          {profile.doctor.name}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          Doctor Role
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        {profile.doctor.role}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          Doctor Expertise
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          M.B.B.S / Cardiology
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          Doctor Email
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          {profile.doctor.email}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          Doctor Phone Number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          {profile.doctor.phone}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          Doctor Age
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          55 Years
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          About Doctor
                        </dt>
                        <dd className="h-auto mt-1 text-sm text-justify overflow-hidden text-gray-900 sm:col-span-2 sm:mt-0">
                          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                          anim incididunt <br /> cillum culpa consequat.
                          Excepteur qui ipsum aliquip consequat sint. Sit id
                          mollit nulla mollit <br /> nostrud in ea officia
                          proident. Irure nostrud pariatur mollit ad adipisicing{" "}
                          <br />
                          reprehenderit deserunt qui eu.
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          Count of Patients (Overall)
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          68
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          Count of Patients (Primary)
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          38
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          Count of Patients (Secondary)
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          30
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          Health Plan
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          Plan A
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          No of Forms Created
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          25
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-bold text-gray-500">
                          No of Diet Plans Uploaded
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          19
                        </dd>
                      </div>
                    </dl>
                  </div>
                  )}
                
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

export default DocProfile;
