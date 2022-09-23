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
