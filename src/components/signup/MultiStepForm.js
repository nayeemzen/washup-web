import React from 'react';
import StepBar from "./StepBar";
import {withRouter} from 'react-router-dom';
import './MultiStepForm.css';

const MultiStepForm = ({children, match, history }) => {
    const activeStep = parseInt(match.params.step, 10);
    const url = match.url.endsWith("/") ? match.url : match.url + '/';

    if (!activeStep) {
      history.push(`${url}1`);
    }

    return (
      <div className="MultiStepForm">
        <StepBar
          numSteps={children.length}
          activeStep={activeStep}
        />
        { children[(activeStep - 1)] }
      </div>
    );
};

export default withRouter(MultiStepForm);