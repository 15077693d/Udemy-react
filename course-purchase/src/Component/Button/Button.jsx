import "./Button.scss";
import React from 'react';
const Button = (props) => {
    return (<div className={`btn ${props.class}`} onClick={props.handleClick}>
        <p>{props.left}</p>
        <b>{props.right}</b>
    </div>)
}
export default Button;