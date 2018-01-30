import React from 'react';
import {DRY_CLEAN, WASH_AND_FOLD} from '../order/OrderType';
import DryCleanSvg from '../../resources/dryclean.svg';
import DryCleanSelectedSvg from '../../resources/dryclean_selected.svg';
import WashAndFoldSvg from '../../resources/washandfold.svg';
import WashAndFoldSelectedSvg from '../../resources/washandfold_selected.svg';
import './OrderTypeSelector.css';

const OrderTypeSelector = ({ selectOption, selectedOptions }) => (
  <div className="OrderTypeSelector">
    <OrderTypeOption
      className="DryClean"
      selectOption={() => selectOption(DRY_CLEAN)}
      selected={selectedOptions.indexOf(DRY_CLEAN) !== -1}
      selectedSvg={DryCleanSelectedSvg}
      defaultSvg={DryCleanSvg}
      name="Dry Clean"
    />
    <OrderTypeOption
      className="WashAndFold"
      selectOption={() => selectOption(WASH_AND_FOLD)}
      selected={selectedOptions.indexOf(WASH_AND_FOLD) !== -1}
      selectedSvg={WashAndFoldSelectedSvg}
      defaultSvg={WashAndFoldSvg}
      name="Wash & Fold"
    />
  </div>
);

const OrderTypeOption = ({ selectOption, className, selected, selectedSvg, defaultSvg, name }) => (
  <div onClick={selectOption} className={`${className} ${selected ? "selected" : ""}`}>
    <img src={`${ selected ? selectedSvg : defaultSvg}`} alt={name}/>
    <h1>{name}</h1>
    <i className="fa fa-check-circle" aria-hidden="true"/>
  </div>
);

export default OrderTypeSelector;