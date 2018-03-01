import React from 'react';
import "./TopBar.css";
import NavHeader from "./NavHeader";
import {Link, withRouter} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import Logo from "../../resources/washup_horizontal_inverted.png"
import NavFooter from "./NavFooter";

class TopBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  isMenuOpen = (state) => {
    this.setState({ isOpen: state.isOpen });
  };

  render() {
    const {history, topBarEnabled, firstName = "", lastName = "", isLoading} = this.props;
    return topBarEnabled ? (
      <div className="TopBar">
        <Menu isOpen={this.state.isOpen} onStateChange={this.isMenuOpen}>
          <NavHeader
            isNameLoading={isLoading}
            logo={Logo}
            fullName={`${firstName} ${lastName}`}
          />
          <div className="Links" style={{
            display:'flex', flexDirection: 'column', margin: '0 auto'
          }}>
            <Link onClick={() => {this.setState({ isOpen: false })}} className="menu-item" to="/activity">Activity</Link>
            <Link onClick={() => {this.setState({ isOpen: false })}} className="menu-item" to="/preferences">Preferences</Link>
            <Link onClick={() => {this.setState({ isOpen: false })}} className="menu-item" to="/account">Account</Link>
            <Link onClick={() => {this.setState({ isOpen: false })}} className="menu-item" to="/pricing">Pricing</Link>
            <Link onClick={() => {this.setState({ isOpen: false })}} className="menu-item" to="/contact">Contact</Link>
            <Link onClick={() => {this.setState({ isOpen: false })}} className="menu-item" to="/logout">Logout</Link>
          </div>
          <NavFooter onClick={() => {
            this.setState({
              isOpen: false
            });
            history.push('/order');
          }}/>
        </Menu>
      </div>
    ) : null;
  }
};

export default withRouter(TopBar);