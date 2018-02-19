import React from 'react';
import ErrorImage from '../../../resources/error.png';
import './Error.css';

const DEFAULT_ERROR_MSG = 'Something went wrong.';

const Error = ({ visible=true, message, imgSize="medium", horizontal = false}) => (
  <div className= {
    `Error
    ${visible ? "visible" : "not-visible"}
    ${horizontal ? "horizontal" : "vertical"}`
  }>
    <img src={ErrorImage} alt="error" style={{ width: width(imgSize)}}/>
    <h1>{message || DEFAULT_ERROR_MSG}</h1>
  </div>
);

const width = (imgSize) => {
  switch(imgSize)  {
    case "small":
      return "50px";
    case "medium":
      return "70px";
    case "large":
      return "100px";
    default:
      return "70px";
  }
};

export default Error;