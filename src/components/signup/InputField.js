import React from 'react';
import './InputField.css';

const InputField = ({ name, placeholder, icon, type="text", setValue }) => (
      <div className="InputField">
        <i className={`fa fa-${icon}`} aria-hidden="true"/>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}/>
      </div>
);

export default InputField;
