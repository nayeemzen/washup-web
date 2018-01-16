import React, { Component } from 'react';
import './TabSelector.css';

class TabSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    }
  }

  render() {
    return <div className="TabSelector">
      {
        this.state.options.map((option, idx) =>
          <li
            key={idx}
            onClick={() => this.selectOption(idx)}
            className={option.enabled ? "enabled" : "disabled"}>
            {option.name}
          </li>)
      }
    </div>
  }

  selectOption = (selectedIdx) => {
    this.setState({
      options: this.state.options.map((option, idx) => {
        if (selectedIdx === idx) {
          return {
            name: option.name,
            enabled: true
          }
        } else {
          return {
            name: option.name,
            enabled: false
          }
        }
      })
    })
  }
}

export default TabSelector;