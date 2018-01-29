import React from 'react';
import './Form.css';

const Form = ({ header, subHeader, children }) => (
  [
    <div className="Header">
      <h1>{header}</h1>
      <p>{subHeader}</p>
    </div>,
    <div className="Form">
      {children}
    </div>
  ]
);

export default Form;