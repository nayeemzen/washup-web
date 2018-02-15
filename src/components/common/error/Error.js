import React from 'react';
import ErrorImage from '../../../resources/error.png';
import './Error.css';

const Error = ({ message }) => (
  <div className="Error">
    <img src={ErrorImage} alt="error"/>
    <h1>{message}</h1>
  </div>
);

export default Error;