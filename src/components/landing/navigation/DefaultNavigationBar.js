import React from 'react';
import NavigationBar from "./NavigationBar";
import {Link} from "react-router-dom";

const DefaultNavigationBar = () => (
  <NavigationBar>
    <Link to="/public-pricing">Pricing</Link>
    <Link to="/faq">FAQ</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
  </NavigationBar>
);

export default DefaultNavigationBar;