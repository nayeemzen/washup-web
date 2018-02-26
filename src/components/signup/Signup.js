import React from 'react';
import Logo from '../../resources/washup_horizontal.png'
import PersonalDetailsForm from './PersonalDetailsForm';
import LocationDetailsForm from './LocationDetailsForm';
import MultiStepForm from './MultiStepForm';
import './Signup.css'
import {withRouter} from "react-router-dom";

const SignUp = ({ history }) => (
  <div className="SignUp">
    <img
      className="Logo"
      aria-label="WashUp"
      src={Logo}
      alt="WashUp Logo"
      onClick={() => { history.push() }}
    />
    <MultiStepForm>
      <PersonalDetailsForm/>
      <LocationDetailsForm/>
    </MultiStepForm>
  </div>
);

export default withRouter(SignUp);