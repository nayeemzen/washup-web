import React from 'react'
import  { withRouter } from 'react-router-dom';
import './Activity.css'

const Activity = withRouter(({ history }) => (
  <div className="Activity">
    <p> Our cleaning experts are waiting for your first order, lets get started! </p>
    <button onClick={() => { history.push('/order') }}>START ORDER</button>
  </div>
));

export default Activity;