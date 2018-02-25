import React from 'react';
import './InputField.css';

const InputField = (props) => {
    const {
      name,
      placeholder,
      icon,
      type="text",
      value,
      setValue,
      valid = true,
    } = props;

    return (
        <div className="InputField">
          <i className={`fa fa-${icon}`} aria-hidden="true"/>
          <input
            className={valid ? "validation-success" : "validation-error"}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
  );
};

export default InputField;
