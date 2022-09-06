import React from "react";

const Button = props => {

    if (props.href) {
        return <a href={props.href}>{props.children}</a>;
      }
    
      if (props.to) {
        return (
          <Link to={props.to} exact={props.exact}>
            {props.children}
          </Link>
        );
      }
    
      return (
        <button
          className={`group ${props.inverse || 'login__Btn--Group'} ${props.inverse && 'login__Btn--Disabled'}`}
          type={props.type}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.children}
        </button>
      );

};

export default Button;