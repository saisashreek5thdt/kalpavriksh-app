import React from 'react'

const Input = ({ label, input, name, id }) => {
    return (
        <div className="input">
            <label htmlFor="phone-number" className='input__label'>{label}</label>
            <input type={input} name={name} id={id} autoComplete={true} className="input__input" />
        </div>
    )
}

export default Input