import React from "react";

const PatientAccountStatus = () => {
    return (
        <>
            <div className="card__Block">
                <h5 className="card__Heading">
                    Patient Status
                    <span className="card__Heading--Span card__Bg--Teal">
                        Account
                    </span>
                </h5>
                <form>
                    <div className="form__Grid--Rows-none">
                        <div className="form__Cols--Span-6">
                            <label
                                htmlFor="currentStatus"
                                className="form__Label-Heading"
                            >
                                Current Patient Status
                            </label>
                            <p id="currentStatus" className="form__Heading">
                                Active
                            </p>
                        </div>
                        <div className="form__Cols--Span-6">
                            <select
                                id="form"
                                name="form"
                                autoComplete="form-name"
                                className="form__Select"
                            >
                                <option value="" data-default>
                                    Select Patient Status
                                </option>
                                <option>Please Select Patient Status</option>
                                <option>Active</option>
                                <option>De-Active</option>
                            </select>
                        </div>
                        <div className="form__Cols--Span-6">
                            <textarea
                                className="form__Textarea"
                                rows="3"
                                placeholder="Please Add Why account is deactivated."
                            ></textarea>
                        </div>
                        <div className="form__Cols--Span-6">
                            <button
                                type="button"
                                className="card__Btn card__Bg--Teal card__Btn--Bg-Teal"
                            >
                                Update Status
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="my-10">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th className="w-10 p-3 text-lg font-semibold tracking-wide text-left">
                                Sl No.
                            </th>
                            <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                                Doctor Name
                            </th>
                            <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                                Date
                            </th>
                            <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                                Reason
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr className="bg-white border-b cursor-pointer">
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                1.
                            </td>
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                Dr. Rajiv Singhla
                            </td>
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                24-02-2023
                            </td>
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                Patient hasn't paid his past bills.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PatientAccountStatus;
