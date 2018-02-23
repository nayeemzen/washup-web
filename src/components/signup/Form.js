import React from 'react';
import './Form.css';

const Form = ({ header, subHeader, children }) => (
  [
    <div key={1} className="FormHeader">
      <h1>{header}</h1>
      <p>{subHeader}</p>
    </div>,
    <div key={2} className="Form">
      {children}
    </div>
  ]
);

export default Form;