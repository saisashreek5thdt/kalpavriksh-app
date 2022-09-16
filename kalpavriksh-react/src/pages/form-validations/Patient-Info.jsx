import React from "react";
import { useHistory } from "react-router-dom";

import { viewIcon, editIcon } from "../../Components/Icons";
import Input from "../../Components/Input";
import { VALIDATOR_REQUIRE } from "../../util/validators";

import { useForm } from "../../hooks/form-hooks";

const PatientInfo = () => {
  const history = useHistory();

  const [formState, inputHandler] = useForm(
    {
      appointment_date: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const viewIconHandler = (e) => {
    e.preventDefault();
    history.push(`/userrole/:pid/form/appointment/patientinfo_view`);
  };

  return (
    <>
      <main className="appointment__MainContainer">
        <div className="appointment__MainContainer--TextAlign">
          <p className="appointment__Text">
            <span className="appointment__Text--Inline">Appointments for Today</span>
            <span className="appointment__Text--Inline appointment__Text--Number"> 25</span>
          </p>
        </div>
        <div className="appointment__Filter--Date">
          <Input
            element="input"
            type="date"
            id="appointment_date"
            label=""
            validator={[VALIDATOR_REQUIRE()]}
            errorText="Select Date"
            onInput={inputHandler}
          />
        </div>
      </main>
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
                        <div onClick={viewIconHandler}>{viewIcon()}</div>
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
                        <div onClick={viewIconHandler}>{viewIcon()}</div>
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
                        <div onClick={viewIconHandler}>{viewIcon()}</div>
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

export default PatientInfo;
