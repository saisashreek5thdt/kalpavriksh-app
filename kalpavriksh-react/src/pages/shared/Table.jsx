import React, { useState } from "react";

import { viewIcon, editIcon } from "../../Components/Icons";

import Modal from "../../Components/Modal";

const Table = () => { 

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

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
                    <th className="table__Row--Top-Head">
                      Doctor / Dietician Name
                    </th>
                    <th className="table__Row--Top-Head">
                      Medicines / Dietchart
                    </th>
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
                        <span className="table__Font--Bold1">Dr. Rajiv Singla</span>
                      </div>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Buttons">
                        <div className="table__Text--Center">
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
                    <td className="table__Row--Content-Info">
                      <span className="table__Tags--Green table__Row--Content-Taginfo">
                        New
                      </span>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Items">
                        <>{viewIcon()}</>
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
                        <span className="table__Font--Bold1">Dr. DSN Rao</span>
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
                      <span className="table__Tags--Red table__Row--Content-Taginfo">
                        Old
                      </span>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Items">
                        <>{viewIcon()}</>
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
                        <span className="table__Font--Bold1">Dr. Suha C</span>
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
                      <span className="table__Tags--Yellow table__Row--Content-Taginfo">
                        Scheduled
                      </span>
                    </td>
                    <td className="table__Row--Content-Info">
                      <div className="table__Flex--Items">
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
