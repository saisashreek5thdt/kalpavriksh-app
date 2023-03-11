import React from "react";

const PatientAllEnrolments = () => {
    return (
        <>
            <div className="my-10">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th className="w-10 p-3 text-lg font-semibold tracking-wide text-left">
                                Sl No.
                            </th>
                            <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                                Health Plan Name
                            </th>
                            <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                                Health Plan Duration
                            </th>
                            <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                                Enrolled Date
                            </th>
                            <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                                Payments
                            </th>
                            <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                                Add Payments
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr className="bg-white border-b cursor-pointer">
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                1.
                            </td>
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                Plan Name
                            </td>
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                24-02-2023 / 24-05-2023
                            </td>
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                24-02-2023
                            </td>
                            <td className="p-3 text-base text-emerald-700 font-bold whitespace-nowrap">
                                Paid
                            </td>
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                <button
                                    type="button"
                                    className="card__Btn card__Bg--Teal card__Btn--Bg-Teal"
                                    disabled
                                >
                                    Pay now
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b cursor-pointer">
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                2.
                            </td>
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                Plan Name
                            </td>
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                24-02-2023 / 24-05-2023
                            </td>
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                24-02-2023
                            </td>
                            <td className="p-3 text-base text-rose-700 font-bold whitespace-nowrap">
                                Un-Paid
                            </td>
                            <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                                <button
                                    type="button"
                                    className="card__Btn card__Bg--Teal card__Btn--Bg-Teal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalPatientProfile"
                                >
                                    Pay now
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="py-4">
                <div
                    className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="modalPatientProfile"
                    backdrop="static"
                    closable="false"
                    aria-labelledby="modalPatientProfileLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5
                                    className="text-xl font-medium leading-normal text-gray-800"
                                    id="modalPatientProfileLabel"
                                >
                                    Patient Health Plan Payment
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body relative p-4">
                                <div className="p-4">
                                    <div className="form__Grid--Cols-6">
                                        <div className="form__Cols--Span-6">
                                            <label
                                                htmlFor="planName"
                                                className="form__Label-Heading"
                                            >
                                                Health Plan Name
                                            </label>
                                            <p className="form__Heading">
                                                Plan Name
                                            </p>
                                        </div>
                                        <div className="form__Cols--Span-6">
                                            <label
                                                htmlFor="planName"
                                                className="form__Label-Heading"
                                            >
                                                Health Plan Duration
                                            </label>
                                            <p className="form__Heading">
                                                2 Months
                                            </p>
                                        </div>
                                        <div className="form__Cols--Span-6">
                                            <label
                                                htmlFor="planName"
                                                className="form__Label-Heading"
                                            >
                                                Health Plan Duration (Start
                                                Date)
                                            </label>
                                            <p className="form__Heading">
                                                24-02-2023
                                            </p>
                                        </div>
                                        <div className="form__Cols--Span-6">
                                            <label
                                                htmlFor="planName"
                                                className="form__Label-Heading"
                                            >
                                                Health Plan Duration (End Date)
                                            </label>
                                            <p className="form__Heading">
                                                24-04-2023
                                            </p>
                                        </div>
                                        <div className="form__Cols--Span-6">
                                            <label
                                                htmlFor="planName"
                                                className="form__Label-Heading"
                                            >
                                                Past Amount Paid
                                            </label>
                                            <p className="form__Heading">
                                                2500
                                            </p>
                                        </div>
                                        <div className="form__Cols--Span-6">
                                            <label
                                                htmlFor="planName"
                                                className="form__Label-Heading"
                                            >
                                                Current Plan Amount
                                            </label>
                                            <input
                                                id="medicineDurationDays"
                                                name="medicineDurationDays"
                                                type="number"
                                                autoComplete="medicineDurationDays"
                                                required
                                                className="form__Input"
                                                placeholder="Enter Medicine Duration Days"
                                            />
                                        </div>
                                        <div className="form__Cols--Span-6">
                                            <label
                                                htmlFor="planName"
                                                className="form__Label-Heading"
                                            >
                                                Payment Type
                                            </label>
                                            <select
                                                id="payment-mode"
                                                name="payment-mode"
                                                autoComplete="payment-mode-name"
                                                className="form__Select"
                                            >
                                                <option>
                                                    Select Payment Mode
                                                </option>
                                                <option>Cash</option>
                                                <option>Card</option>
                                                <option>UPI</option>
                                                <option>Netbanking</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="py-6 form__Grid--Rows-none">
                                        <div className="form__Cols--Span-6">
                                            <button
                                                type="button"
                                                className="card__Btn card__Bg--Teal card__Btn--Bg-Teal"
                                            >
                                                Pay Amount Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button
                                    type="button"
                                    className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PatientAllEnrolments;
