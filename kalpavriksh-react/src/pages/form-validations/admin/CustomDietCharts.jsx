import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  activateDtChart,
  deactivateDtChart,
  getAllDietChart,
} from "../../../action/AdminAction";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";
import {
  ACTIVATE_DTCHART_RESET,
  DEACTIVATE_DTCHART_RESET,
} from "../../../constant.js/AdminConstant";

const CustomDietCharts = () => {
  
  const dispatch = useDispatch();
  const getFomrsList = useSelector((state) => state.patientFormList);
  const { loading, error, forms } = getFomrsList;

  const deitChartList = useSelector((state) => state.deitChartList);
  const { loading: loadingDiet, error: errorDiet, dietchart } = deitChartList;

  const activateDtChartVariables = useSelector(
    (state) => state.activateDtChart
  );
  const {
    loading: loadingChartAc,
    error: errorChartAc,
    success: successChartAc,
  } = activateDtChartVariables;
  const deactivateDtChartVariables = useSelector(
    (state) => state.deactivateDtChart
  );
  const {
    loading: loadingChartDe,
    error: errorChartDe,
    success: successChartDe,
  } = deactivateDtChartVariables;

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) : str;
  };

  useEffect(() => {
    dispatch(getAllDietChart());
    if (successChartAc) {
      dispatch({ type: ACTIVATE_DTCHART_RESET });
      Swal.fire({
        icon: "success",
        text: "activated successfully",
      });
    }
    if (successChartDe) {
      dispatch({ type: DEACTIVATE_DTCHART_RESET });
      Swal.fire({
        icon: "success",
        text: "deactivated successfully",
      });
    }
  }, [successChartDe, successChartAc]);

  const acttivateDietCharts = (state, id) => {
    if (state === "Active") {
      Swal.fire({
        title: "Do you want to deactivet diet Chart?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          dispatch(deactivateDtChart(id));
          // Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } else if (state === "De-Active") {
      Swal.fire({
        title: "Do you want to activate diet chart?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          dispatch(activateDtChart(id));
          // Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  return (
    <>
      <div className="my-10">
        <table className="table__Container">
          <thead className="table__Head">
            <tr>
              <th className="table__Head--Text">Sl No.</th>
              {/* <th className="table__Head--Text">
                Diet Chart Name
              </th> */}
              <th className="table__Head--Text">Created By</th>
              <th className="table__Head--Text">Created Date</th>
              <th className="table__Head--Text">Access</th>
              <th className="table__Head--Text">Actions</th>
            </tr>
          </thead>
          {loadingDiet ? (
            <LoadingBox></LoadingBox>
          ) : errorDiet ? (
            <MessageBox>{error}</MessageBox>
          ) : (
            dietchart &&
            dietchart.map((dt, index) => (
              <tbody key={dt._id}>
                <tr className="table__Body--Row">
                  <td className="table__Body--Row_Data">{index + 1}</td>
                  {/* <td className="table__Body--Row_Data">
                Burn Calories
              </td> */}
                  <td className="table__Body--Row_Data">
                    {dt.doctorId ? dt.doctorId.name : ""}
                  </td>
                  <td className="table__Body--Row_Data">
                    {truncate(dt.createdAt, 11)}
                  </td>
                  <td className="table__Body--Row_Data">
                    <select
                      id="status"
                      name="status"
                      autoComplete="status-name"
                      className="form__Select"
                      onChange={() => acttivateDietCharts(dt.status, dt._id)}
                    >
                      <option>{dt.status}</option>
                      {dt.status === "Active" ? (
                        <option>De-Active</option>
                      ) : dt.status === "De-Active" ? (
                        <option>Active</option>
                      ) : (
                        ""
                      )}
                    </select>
                  </td>
                  <td className="table__Body--Row_Data">
                    <FiEdit
                      className="table__Body--Status_Icons"
                      data-bs-toggle="modal"
                      data-bs-target="#modalCharts"
                    />
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </table>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="modalCharts"
        tabIndex="-1"
        aria-labelledby="modalChartsLabel"
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
    </>
  );
};

export default CustomDietCharts;
