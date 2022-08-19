import react from 'react'

const Input = ({label, input, name, id }) => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input type={input}
                name={name}
                id={id}
                autoComplete={true}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
    )
}

export default Input