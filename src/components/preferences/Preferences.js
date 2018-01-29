import React from 'react';
import Card from '../card/Card';
import TabSelector from '../../components/common/TabSelector';
import Switch from 'react-switchery';
import './Preferences.css';

const Preferences = () => (
    <div className="Preferences">
      {
        preferencesList.map((preference, idx) => (
          <div className="Preference" key={idx}>
            <Card header={preference.header.toUpperCase()}>
              <div>{renderOptions(preference.options)}</div>
              <h1>{preference.title.toUpperCase()}</h1>
              <p>{preference.subtitle}</p>
            </Card>
          </div>
        ))
      }
    </div>
);

const renderOptions = (options) => (
  (options.length === 1)
    ? <Switch onChange={this.onChange} options={{color: '#27b7d7', size: 'small'}} checked/>
    : <TabSelector options={options}/>
);

const preferencesList = [
  {
    header: "Detergents",
    title: "Scented",
    subtitle: "Scented detergents will be used for your laundry",
    options: [
      {
        enabled: true
      },
    ]
  },
  {
    header: "Rush Delivery",
    title: "24 Hour Delivery (Wash & Fold Only)",
    subtitle: "Your clothes will be delivered within 48-72 hours",
    options: [
      {
        enabled: false
      },
    ]
  },
  {
    header: "Fabric Softener",
    title: "Fabric Softener",
    subtitle: "No fabric softener will be used with your laundry",
    options: [
      {
        enabled: false
      },
    ]
  },
  {
    header: "Text Reminder",
    title: "Laundry Day Reminder",
    subtitle: "We will remind you weekly about doing laundry",
    options: [
      {
        enabled: false
      },
    ]
  }

];

export default Preferences;