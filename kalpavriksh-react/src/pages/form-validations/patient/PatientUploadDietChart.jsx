import React from "react";
import { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getAllDietChart } from "../../../action/AdminAction";
import { getLatesDietChart, getLatesPrescription } from "../../../action/PatientAction";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";
import { UPLOAD_DIET_CHART_RESET } from "../../../constant.js/DoctorConstant";

const PatientUploadDietChart = () => {
  const latestDietChart=useSelector((state)=>state.latestDietChart)
  const {loading,error,deitChartLatest}=latestDietChart
  const deitChartList=useSelector((state)=>state.deitChartList)
  const {loading:loadingDiet,error:errorDiet,dietchart}=deitChartList
  const dietChartUpload=useSelector(state=>state.dietChartUpload)
  const {success}=dietChartUpload
  const dispatch=useDispatch()
  useEffect(()=>{
   const user='patient'
  dispatch(getLatesDietChart())
  dispatch(getAllDietChart(user))
  if(success){
    dispatch({type:UPLOAD_DIET_CHART_RESET})
  }
  },[dispatch,success])
  // if(dietchart){
  //   console.log(dietchart,'dttt');
  // }
  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1)  : str;
  };
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
                DietCharts
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {loading ? <LoadingBox></LoadingBox>:
            error ? <MessageBox>{error}</MessageBox>:
            deitChartLatest ?  (
              <div className="modal-body relative p-4">
              <div className="form__Grid--Cols-6">
                <div className="form__Cols--Span-6">
                  <label htmlFor="prescribedBy" className="form__Label-Heading">
                    Doctor Name
                  </label>
                  <p className="form__Heading">{deitChartLatest.doctorId ? deitChartLatest.doctorId.name : ''}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="prescribedDate"
                    className="form__Label-Heading"
                  >
                    Prescribed Date
                  </label>
                  <p className="form__Heading">{truncate(deitChartLatest.createdAt,11)}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="lowerCalories"
                    className="form__Label-Heading"
                  >
                    Low Calories Range
                  </label>
                  <p className="form__Heading">{deitChartLatest.calorie_lower}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="highCalories" className="form__Label-Heading">
                    High Clories Range
                  </label>
                  <p className="form__Heading">{deitChartLatest.calorie_upper}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="lowerCarbohydrates"
                    className="form__Label-Heading"
                  >
                    Low Carbohydrates Range
                  </label>
                  <p className="form__Heading">{deitChartLatest.ch_lower}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="highCarbohydrates"
                    className="form__Label-Heading"
                  >
                    High Carbohydrates Range
                  </label>
                  <p className="form__Heading">{deitChartLatest.ch_upper}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="proties" className="form__Label-Heading">
                    Protiens Range
                  </label>
                  <p className="form__Heading">{deitChartLatest.protiens}</p>
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="fats" className="form__Label-Heading">
                    Fats Range
                  </label>
                  <p className="form__Heading">{deitChartLatest.fats}</p>
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
                  <p className="form__Heading">{deitChartLatest.cuisine_type}</p>
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
          ):
          <MessageBox>No latest Diet Chart</MessageBox>
          }
           
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
              {loadingDiet ? <LoadingBox></LoadingBox>:
              errorDiet ? <MessageBox>{error}</MessageBox>:
              dietchart.length > 0 ? dietchart.map((dt)=>(
               <div className="p-2" key={dt._id}>
                <div className="relative w-full overflow-hidden">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  />
                  <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
                    <h1 className="text-lg font-semibold text-gray-600">
                      {dt.doctorId ?dt.doctorId.name : '' } /{truncate(dt.createdAt,11)}
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
                          <p className="form__Heading">{dt.doctorId ?dt.doctorId.name : '' }</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="prescribedDate"
                            className="form__Label-Heading"
                          >
                            Prescribed Date
                          </label>
                          <p className="form__Heading">{truncate(dt.createdAt,11)}</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="lowerCalories"
                            className="form__Label-Heading"
                          >
                           {dt.calorie_lower}
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
                          <p className="form__Heading">{dt.calorie_upper}</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="lowerCarbohydrates"
                            className="form__Label-Heading"
                          >
                            Low Carbohydrates Range
                          </label>
                          <p className="form__Heading">{dt.ch_lower}</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="highCarbohydrates"
                            className="form__Label-Heading"
                          >
                            High Carbohydrates Range
                          </label>
                          <p className="form__Heading">{dt.ch_upper}</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label
                            htmlFor="proties"
                            className="form__Label-Heading"
                          >
                            Protiens Range
                          </label>
                          <p className="form__Heading">{dt.protiens}</p>
                        </div>
                        <div className="form__Cols--Span-6">
                          <label htmlFor="fats" className="form__Label-Heading">
                            Fats Range
                          </label>
                          <p className="form__Heading">{dt.fats}</p>
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
                          <p className="form__Heading">{dt.cuisine_type}</p>
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
              )):
              <MessageBox>No diet chart</MessageBox>
              }
              
          
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