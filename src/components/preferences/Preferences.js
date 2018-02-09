import React from 'react';
import {connect} from 'react-redux';
import Card from '../card/Card';
import TabSelector from '../../components/common/TabSelector';
import Switch from 'react-ios-switch';
import preferencesList from './PreferencesList';
import './Preferences.css';
import isEmpty from 'lodash/isEmpty';
import {getPreferences, setPreferences} from "../../actions/PreferencesActions";

class Preferences extends React.Component {
  componentDidMount() {
    if (isEmpty(this.props.preferences)) {
      this.props.getPreferences();
    }
  }
  renderOptions = (preferenceId) => {
    let isEnabled = (this.props.preferences && this.props.preferences[preferenceId]) || false;
    return (
      <Switch
        checked = {isEnabled}
        onChange = {(checked) => this.onSwitchChange(preferenceId, checked)}
        readOnly={false}
        onColor = '#27b7d7'
      />
    );
  };

  onSwitchChange = (preferenceId, checked) => {
    this.props.setPreferences(Object.assign({}, this.props.preferences, {[preferenceId]: checked}));
  };

  render() {
    return (
      <div className="Preferences">
        {
          preferencesList.map((preference, idx) => (
            <div className="Preference" key={idx}>
              <Card header={preference.header.toUpperCase()}>
                <div>{this.renderOptions(preference.id)}</div>
                <h1>{preference.title.toUpperCase()}</h1>
                <p>{preference.subtitle}</p>
              </Card>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    preferences: state.preferences
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPreferences: () => dispatch(getPreferences()),
    setPreferences: preferences => dispatch(setPreferences(preferences))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);