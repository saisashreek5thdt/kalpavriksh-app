import React from 'react'

const InputSelect = () => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
            >
                Gender
            </label>
            <select
                id="gender"
                name="gender"
                autoComplete="gender"
                // onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>
        </div>
    )
}

export default InputSelect