import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as SignUpActions from '../../actions/SignUpActions';
import Form from "./Form";
import InputField from "./InputField";

class LocationDetailsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      streetAddress: null,
      unit: null,
      postalCode: null,
    };
  }

  render() {
    return (
      <Form
        header="Set your pickup location"
        subHeader="Where should we pick up and deliver your laundry?"
      >
        <InputField
          name="streetAddress"
          placeholder="Street Address"
          icon="map-marker"
          value={this.props.data.streetAddress}
          setValue={(streetAddress) => this.setState({ streetAddress: streetAddress })}
        />
        <InputField
          name="unit"
          placeholder="Apt, Suite, etc (optional)"
          icon="map-marker"
          value={this.props.data.unit}
          setValue={(unit) => this.setState({ unit: unit })}
        />
        <InputField
          name="postalCode"
          placeholder="Postal code"
          icon="map-marker"
          value={this.props.data.postalCode}
          setValue={(postalCode) => this.setState({ postalCode: postalCode })}
        />
        <button onClick={this.completeStep}>Next</button>
      </Form>
    );
  }

  completeStep = () => {
    this.props.completeStep(this.state);
  };
}

const mapStateToProps = (state) => {
  return {
    data: Object.values(state.signup).reduce((prev, next) => Object.assign(prev, next), {})
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeStep: (data) => dispatch(SignUpActions.completeStep(2, data))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationDetailsForm));