import React from 'react';
import { FiEdit } from "react-icons/fi";

const Charts = () => {
  return (
    <>
      <div className="my-10">
        <table className="table__Container">
          <thead className="table__Head">
            <tr>
              <th className="table__Head--Text">
                Sl No.
              </th>
              <th className="table__Head--Text">
                Form Name
              </th>
              <th className="table__Head--Text">
                Created By
              </th>
              <th className="table__Head--Text">
                Created Date
              </th>
              <th className="table__Head--Text">
                Access
              </th>
              <th className="table__Head--Text">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table__Body--Row">
              <td className="table__Body--Row_Data">
                1
              </td>
              <td className="table__Body--Row_Data">
                Health Info
              </td>
              <td className="table__Body--Row_Data">
                Dr. D.S.N.Rao
              </td>
              <td className="table__Body--Row_Data">
                11-10-2022
              </td>
              <td className="table__Body--Row_Data">
                <select
                  id="status"
                  name="status"
                  autoComplete="status-name"
                  className="form__Select"
                >
                  <option>Select Status</option>
                  <option>Active</option>
                  <option>De-Active</option>
                </select>
              </td>
              <td className="table__Body--Row_Data">
                <FiEdit className="table__Body--Status_Icons" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-10">
        <table className="table__Container">
          <thead className="table__Head">
            <tr>
              <th className="table__Head--Text">
                Sl No.
              </th>
              <th className="table__Head--Text">
                Diet Chart Name
              </th>
              <th className="table__Head--Text">
                Created By
              </th>
              <th className="table__Head--Text">
                Created Date
              </th>
              <th className="table__Head--Text">
                Access
              </th>
              <th className="table__Head--Text">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table__Body--Row">
              <td className="table__Body--Row_Data">
                1
              </td>
              <td className="table__Body--Row_Data">
                Burn Calories
              </td>
              <td className="table__Body--Row_Data">
                Dr. Suha
              </td>
              <td className="table__Body--Row_Data">
                11-10-2022
              </td>
              <td className="table__Body--Row_Data">
                <select
                  id="status"
                  name="status"
                  autoComplete="status-name"
                  className="form__Select"
                >
                  <option>Select Status</option>
                  <option>Active</option>
                  <option>De-Active</option>
                </select>
              </td>
              <td className="table__Body--Row_Data">
                <FiEdit className="table__Body--Status_Icons" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Charts