import React, {useReducer, useEffect} from "react";

import { validate } from "../utils/validators";
import Datepicker from "react-tailwindcss-datepicker";
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
        onInput(id,
            !props.children? value:props.value, 
             isValid);
    }, [id, value, isValid, onInput,props.value]);

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val:event.target.value,
            validators: props.validators
        });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    let element;
    switch (props.element) {
        case 'input':
            element = (
                <input 
                    id={props.id}
                    type={props.type}
                    className="form__Input"
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                    required
                />
            );
            break;
        case 'textarea':
            element = (
                <textarea
                    id={props.id}
                    rows={props.rows || 3}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                    className="form__Textarea"                
                />
            );
            break;
        case 'datepicker':
            element = (
                <Datepicker
                    id={props.id}
                    selected={inputState.value}
                    onChange={(date) =>
                        dispatch({
                            type: 'CHANGE',
                            val: date,
                            validators: props.validators
                        })
                    }
                    onBlur={touchHandler}
                    className="form__Input"
                    value={value}
                    dateFormat={props.dateFormat || 'dd/MM/yyyy'}
                    showYearDropdown
                    scrollableMonthYearDropdown
                    required
                />
            );
            break;
        default:
            element = (
                <input 
                    id={props.id}
                    type={props.type}
                    className="form__Input"
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                    required
                />
            );
    }

    return (
        <div>
            <label htmlFor={props.id} className="form__Label-Heading">{props.label}</label>
            {props.element !== 'datepicker' && !inputState.isValid && inputState.isTouched && <p className="form__Input--Error">{props.errorText}</p>}
            {props.element === 'datepicker' && !inputState.isValid && inputState.isTouched && <p className="form__Input--Error">{props.errorText}</p>}
            {element}
        </div>
    );
};


export default Input;