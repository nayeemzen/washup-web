import React from 'react';
import Switch from 'react-switchery';
import './OptionCard.css';

const OptionCard = ({ title, subtitle }) => (
  <div className="OptionCard">
    <Switch
      className="switch-class"
      onChange={this.onChange}
      options={
        {
          color: '#1AB5FF',
          size: 'small'
        }
      }
      checked
    />
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
);

export default OptionCard;