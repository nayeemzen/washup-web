import React from 'react';
import './Loading.css';

const Loading = ({ isLoading = true, inverted = false }) => (
  <div className={`Loading
    ${inverted ? 'lds-ring-inverted' : 'lds-ring'}
    ${isLoading ? "is-loading" : "is-not-loading"}
  `}>
    <div></div><div></div><div></div><div></div>
  </div>
);

export default Loading;