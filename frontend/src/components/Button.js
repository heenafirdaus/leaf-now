import React from 'react';
import './Button.css';

const Button  = ({type, label, onClick, disabled}) => {
    return (
    <button disabled={disabled} onClick={onClick} className={`btn button button__${type}`}>
        {label}
    </button>);
}
export default Button;