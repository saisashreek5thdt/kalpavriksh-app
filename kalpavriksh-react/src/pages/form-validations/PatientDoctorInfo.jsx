import React from "react";
import { viewIcon, editIcon } from "../../Components/Icons";

const PatientDoctorInfo = () => {
  return (
    <>
      <div className="table__Flow">
        <div className="table__Screen">
          <div className="table__Width">
            <div className="table__Shadow">
              <table className="table__Length">
                <thead>
                  <tr className="table__Row--Top">
                    <th className="table__Row--Top-Head">Sl No.</th>
                    <th className="table__Row--Top-Head">Patient Name</th>
                    <th className="table__Row--Top-Head">Medical Info</th>
                    <th className="table__Row--Top-Head">Meeting Info</th>
                    <th className="table__Row--Top-Head">Status</th>
                    <th className="table__Row--Top-Head">Actions</th>
                  </tr>
                </thead>
                <tbody className="table__Row--Content">
                  <tr className="table__Row--Alternate-1">
                    <td className="table__Row--Index">
                      <div className="table__Flex--Items">
                        <span className="table__Font--Bold1">1.</span>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Items">
                        <span className="table__Font--Bold1">
                          Krithy Shetty
                        </span>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Buttons">
                        <div className="table__Text--Center">
                          <button
                            type="button"
                            className="forms__Controller--Btn-Container_Btn-Gray"
                          >
                            Medicines
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Items">
                        <span className="table__Font--Bold1">10-09-2022</span>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <span className="table__Tags--Green table__Row--Content-Taginfo">
                        New
                      </span>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Items">
                        <div>{viewIcon()}</div>
                        <>{editIcon()}</>
                      </div>
                    </td>
                  </tr>
                  <tr className="table__Row--Alternate-2">
                    <td className="table__Row--Index">
                      <div className="table__Flex--Items">
                        <span className="table__Font--Bold1">2. </span>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Items">
                        <span className="table__Font--Bold1">Valli Sharma</span>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Buttons">
                        <div className="table__Text--Center">
                          <button
                            type="button"
                            className="forms__Controller--Btn-Container_Btn-Gray"
                          >
                            Medicines
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Items">
                        <span className="table__Font--Bold1">20-09-2022</span>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <span className="table__Tags--Red table__Row--Content-Taginfo">
                        Old
                      </span>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Items">
                        <div>{viewIcon()}</div>
                        <>{editIcon()}</>
                      </div>
                    </td>
                  </tr>
                  <tr className="table__Row--Alternate-1">
                    <td className="table__Row--Index">
                      <div className="table__Flex--Items">
                        <span className="table__Font--Bold1">3. </span>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Items">
                        <span className="table__Font--Bold1">
                          Snikitha Reddy
                        </span>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Buttons">
                        <div className="table__Text--Center">
                          <button
                            type="button"
                            className="forms__Controller--Btn-Container_Btn-Gray"
                          >
                            Medicines
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Items">
                        <span className="table__Font--Bold1">18-10-2022</span>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <span className="table__Tags--Yellow table__Row--Content-Taginfo">
                        Scheduled
                      </span>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Items">
                        <div>{viewIcon()}</div>
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
    </>
  );
};

export default PatientDoctorInfo;