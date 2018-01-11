import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Activity from '../activity/Activity';
import Preferences from '../preferences/Preferences';
import Pricing from '../pricing/Pricing';
import Account from '../account/Account';
import Contact from '../contact/Contact';
import Logout from '../logout/Logout';
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
    </Switch>
  </div>
);

export default Content;