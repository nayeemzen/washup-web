import React, {Component} from 'react';
import Logo from '../../resources/washup_horizontal.png'
import PersonalDetailsForm from './PersonalDetailsForm';
import LocationDetailsForm from './LocationDetailsForm';
import MultiStepForm from './MultiStepForm';
import './Signup.css'

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <img className="Logo" src={Logo} aria-label="WashUp"/>
        <MultiStepForm>
          <PersonalDetailsForm/>
          <LocationDetailsForm/>
        </MultiStepForm>
      </div>
    );
  }
}

export default SignUp;