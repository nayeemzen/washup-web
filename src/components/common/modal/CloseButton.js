import React from 'react';
import {withRouter} from "react-router-dom";
import './CloseButton.css';

const CloseButton = ({ history, onClose }) => (
  <div className="CloseButton" onClick={() => onClick(history, onClose)}>⨉</div>
);

const onClick = (history, onClose) => {
    if (onClose !== undefined) {
      onClose();
    }

    history.push('/');
};

export default withRouter(CloseButton);