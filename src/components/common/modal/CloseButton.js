import React from 'react';
import {withRouter} from "react-router-dom";
import './CloseButton.css';

const CloseButton = ({ history }) => (
  <div className="CloseButton" onClick={() => history.goBack()}>⨉</div>
);

export default withRouter(CloseButton);