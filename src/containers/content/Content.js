import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Activity from '../activity/Activity';
import './Content.css';

const Content = () => (
  <div className="Content">
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/activity"/>}/>
      <Route exact path="/activity" component={Activity}/>
    </Switch>
  </div>
);

export default Content;