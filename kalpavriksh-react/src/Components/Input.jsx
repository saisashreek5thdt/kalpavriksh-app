<<<<<<< HEAD
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
=======
import React, {useReducer, useEffect} from "react";

import { validate } from "../util/validators";

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE' :
            return {
                ...state,
                value:action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true
            }
        }
        default:
            return state;
    }
};

const Input = (props) => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValue || false
    });

    const {id, onInput} = props;
    const {value, isValid} = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    const element = 
        props.element === 'input' ? (
            <input 
                id={props.id}
                type={props.type}
                className="forms__Controller--Grids_Cols-Input"
                placeholder={props.placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
                />
        ) : (
            <textarea
                id={props.id}
                rows={props.rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}                
             />
        );

    return (
        <div className="forms__Controller--Grids_Cols">
            <label htmlFor={props.id} className="forms__Controller--Grids_Cols-Label">{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p className="forms__Controller--Grids_Cols-InputError">{props.errorText}</p>}
        </div>
    );

};

export default Input;
>>>>>>> c2b858116a3c474af3fab495f0863220a17eaee0
