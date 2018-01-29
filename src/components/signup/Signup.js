import React, {Component} from 'react';
import Logo from '../../resources/logo_horizontal_selected.svg'
import PersonalDetailsForm from './PersonalDetailsForm';
import LocationDetailsForm from './LocationDetailsForm';
import MultiStepForm from './MultiStepForm';
import './Signup.css'

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <img src={Logo} alt="WashUp"/>
        <MultiStepForm>
          <PersonalDetailsForm/>
          <LocationDetailsForm/>
        </MultiStepForm>
      </div>
    );
  }
}

export default SignUp;