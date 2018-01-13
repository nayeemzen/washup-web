import React from 'react';
import './Account.css';
import Billing from "./Billing";
import Profile from "./Profile";
import Password from "./Password";

const Account = () => (
  <div className="Account">
    <Billing lastFourDigits={8991}/>
    <Profile firstName="John" lastName="Doe" email="johndoe@gmail.com" cellphone="(519) 022 8991"/>
    <Password/>
  </div>
);

export default Account;