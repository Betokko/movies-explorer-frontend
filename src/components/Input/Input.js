import React from "react";

import './Input.scss'

const Input = ({ type, name, placeholder }) => {
  return (
    <div className="text-field">
      <label className="text-field__label" htmlFor={name}>{placeholder}</label>
      <input className="text-field__input" type={type} id={name}/>
    </div>
  );
};

export default Input;
