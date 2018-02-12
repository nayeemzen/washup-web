import React from 'react';
import Logo from '../../../resources/logo_horizontal_selected.svg';
import './NavigationBar.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="NavigationBar">
        <div className="Logo">
          <object data={Logo}>Wash Up</object>
        </div>
        <div className="Links">
          {this.props.children}
        </div>
        <i className="fa fa-bars" aria-hidden="true"/>
      </div>
    );
  }
}

export default NavigationBar;