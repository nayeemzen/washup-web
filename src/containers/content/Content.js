import React from 'react';
import {Switch} from 'react-router-dom';
import Activity from '../../components/activity/Activity';
import Preferences from '../../components/preferences/Preferences';
import Pricing from '../../components/pricing/Pricing';
import Account from '../../components/account/Account';
import Contact from '../../components/contact/Contact';
import Logout from '../../components/logout/Logout';
import Order from '../../components/order/Order';
import AuthenticatedRoute from "../../components/routes/AuthenticatedRoute";
import Login from "../../components/login/Login";
import './Content.css';
import Landing from "../../components/landing/Landing";
import SignUp from "../../components/signup/Signup";
import PaymentCard from "../../components/payment/PaymentCard";
import SetAddress from "../../components/address/SetAddress";

const Content = ({ sidebarEnabled }) => (
  <div className="Content" style={contentStyle(sidebarEnabled)}>
    <Switch>
      <AuthenticatedRoute exact path="/" component={Landing}/>
      <AuthenticatedRoute exact path="/login" component={Login}/>
      <AuthenticatedRoute exact path="/signup/:step?" component={SignUp}/>
      <AuthenticatedRoute exact path="/activity" component={Activity}/>
      <AuthenticatedRoute exact path="/preferences" component={Preferences}/>
      <AuthenticatedRoute exact path="/pricing" component={Pricing}/>
      <AuthenticatedRoute exact path="/account" component={Account}/>
      <AuthenticatedRoute exact path="/contact" component={Contact}/>
      <AuthenticatedRoute exact path="/logout" component={Logout}/>
      <AuthenticatedRoute exact path="/order" component={Order}/>
      <AuthenticatedRoute exact path="/set-address" component={SetAddress}/>
      <AuthenticatedRoute exact path="/payment-card" component={PaymentCard}/>
    </Switch>
  </div>
);

const contentStyle = (sidebarEnabled) => {
 return {
   marginLeft: sidebarEnabled ? "340px" : "0"
 }
};

export default Content;