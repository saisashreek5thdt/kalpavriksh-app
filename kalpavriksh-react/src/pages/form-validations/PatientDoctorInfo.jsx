import React from "react";
import { viewIcon, editIcon } from "../../Components/Icons";

import { VALIDATOR_REQUIRE } from "../../util/validators";
import { useForm } from "../../hooks/form-hooks";

import Select from "../../Components/Select";

const PatientDoctorInfo = () => {

  const [formState, inputHandler] = useForm(
    {
      patient_program: {
        value: "",
        isValid: false
      },
    },
    false
  );

  const programOptions = [
    { value: "Please Select a Program" },
    { value: "Program 1" },
    { value: "Program 2" },
    { value: "Program 3" },
    { value: "Program 4" },
  ];

  return (
    <>
      <div className="card__Box--Start">
        <div className="card__Block">
          <h5 className="card__Heading">Display Summary</h5>
          <p className="card__Info">
            Active Patients <span className="card__Info--Span">45</span>
          </p>
          <p className="card__Info">
            Unpaid Patients <span className="card__Info--Span">120</span>
          </p>
        </div>
        <div className="mx-5 card__Block">
          <h5 className="card__Heading">Programwise Count</h5>
          <Select 
            element="select"
            id="patient_program"
            label="Select Program"
            options={programOptions}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please Select Program"
            onInput={inputHandler}
          />
          <p className="my-5 card__Info">
            Program Name <span className="card__Info--Span">45</span>
          </p>
        </div>
      </div>
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
      <MedicineModal />
    </>
  );
};

export default PatientDoctorInfo;

const MedicineModal = () => {
  return (
    <>
      <div
        className="modal__Container"
        id="medicineModal"
        tabindex="-1"
        aria-labelledby="medicineModalTitle"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal__Dialog">
          <div className="modal__Content">
            <div className="modal__Header">
              <h5
                className="modal__Header--Title"
                id="medicineModalScrollableLabel"
              >
                Medicines & Diet Charts
              </h5>
              <button
                type="button"
                className="modal__Header--Btn-Close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal__Body">
              <p>This is a Modal Body.</p>
            </div>
            <div className="modal__Footer">
              <button
                type="button"
                className="modal__Footer--Btn"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
