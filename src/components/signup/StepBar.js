import React from 'react';
import './StepBar.css';

const StepBar = ({ numSteps, activeStep }) => (
  <div className="StepBar">
    {
      [...new Array(numSteps).keys()].map((step, idx) => (
        <div key={idx} className={`Step ${ step + 1 === activeStep ? "enabled" : "disabled" }`}>
          <p>{step + 1}</p>
        </div>
      ))
    }
  </div>
);

export default StepBar;