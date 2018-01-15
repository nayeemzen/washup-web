import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Activity from '../../components/activity/Activity';
import Preferences from '../../components/preferences/Preferences';
import Pricing from '../../components/pricing/Pricing';
import Account from '../../components/account/Account';
import Contact from '../../components/contact/Contact';
import Logout from '../../components/logout/Logout';
import Order from '../../components/order/Order';
import './Content.css';

const Content = () => (
  <div className="Content">
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/activity"/>}/>
      <Route exact path="/activity" component={Activity}/>
      <Route exact path="/preferences" component={Preferences}/>
      <Route exact path="/pricing" component={Pricing}/>
      <Route exact path="/account" component={Account}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/logout" component={Logout}/>
      <Route exact path="/order" component={Order}/>
    </Switch>
  </div>
);

export default Content;