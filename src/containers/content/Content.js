import React from 'react';
import {Switch} from 'react-router-dom';
import Activity from '../../components/activity/Activity';
import Preferences from '../../components/preferences/Preferences';
import UserPricing from '../../components/pricing/UserPricing';
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
import Faq from "../../components/landing/faq/Faq";
import ContactUs from "../../components/landing/contact/ContactUs";
import PostalCodePricing from "../../components/landing/pricing/PostalCodePricing";
import Receipt from "../../components/receipt/Receipt";

const Content = ({ sidebarEnabled }) => (
  <div className={`Content ${sidebarEnabled ? "sidebar-enabled" : "sidebar-disabled"}`}>
    <Switch>
      <AuthenticatedRoute exact path="/" component={Landing}/>
      <AuthenticatedRoute exact path="/faq" component={Faq}/>
      <AuthenticatedRoute exact path="/contact-us" component={ContactUs}/>
      <AuthenticatedRoute exact path="/login" component={Login}/>
      <AuthenticatedRoute exact path="/signup/:step?" component={SignUp}/>
      <AuthenticatedRoute path="/activity" component={Activity}/>
      <AuthenticatedRoute exact path="/preferences" component={Preferences}/>
      <AuthenticatedRoute exact path="/pricing" component={UserPricing}/>
      <AuthenticatedRoute exact path="/public-pricing" component={PostalCodePricing}/>
      <AuthenticatedRoute exact path="/account" component={Account}/>
      <AuthenticatedRoute exact path="/contact" component={Contact}/>
      <AuthenticatedRoute exact path="/logout" component={Logout}/>
      <AuthenticatedRoute exact path="/order" component={Order}/>
      <AuthenticatedRoute exact path="/set-address" component={SetAddress}/>
      <AuthenticatedRoute exact path="/set-payment-card" component={PaymentCard}/>
    </Switch>
  </div>
);

export default Content;