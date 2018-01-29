import React from 'react';
import './InputField.css';

const InputField = ({ name, placeholder, icon, type="text", value, setValue }) => {
  console.log('valz', value);
  return (
        <div className="InputField">
          <i className={`fa fa-${icon}`} aria-hidden="true"/>
          <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}/>
        </div>
  );
};

export default InputField;
