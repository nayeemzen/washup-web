import React from 'react';
import './TabSelector.css';

const TabSelector = ({options}) => (
  <div className="TabSelector">
      {
        options.map((option, idx) =>
          <li
            key={idx}
            className={option.enabled ? "enabled" : "disabled"}>
            {option.name}
          </li>)
      }
  </div>
);

export default TabSelector;