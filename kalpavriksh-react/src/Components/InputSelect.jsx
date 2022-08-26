import React from 'react'

const InputSelect = () => {
    return (
        <div className="select">
            <label htmlFor="gender" className="select__label">Gender</label>
            <select id="gender" name="gender" autoComplete="gender" className="select__option">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>
        </div>
    )
}

export default InputSelect