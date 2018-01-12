import React from 'react';
import OptionCard from '../../components/card/OptionCard';
import './Preferences.css';

const Preferences = () => (
    <div className="Preferences">
      {
        preferencesList.map(preference => (
          <div className="Preference">
            <p>{preference.header}</p>
            <OptionCard title={preference.title} subtitle={preference.subtitle}/>
          </div>
        ))
      }
    </div>
);

const preferencesList = [
  {
    header: "Detergents",
    title: "Scented",
    subtitle: "Scented detergents will be used for your laundry."
  },
  {
    header: "Rush Delivery",
    title: "24 Hour Delivery (Wash & Fold Only)",
    subtitle: "Your clothes will be delivered within 48-72 hours."
  },
  {
    header: "Fabric Softener",
    title: "Fabric Softener",
    subtitle: "No fabric softener will be used with your laundry."
  },
  {
    header: "Text Reminder",
    title: "Laundry Day Reminder",
    subtitle: "We will remind you weekly about doing laundry."
  },
  {
    header: "Starch",
    title: "Laundry Day Reminder",
    subtitle: "We will remind you weekly about doing laundry."
  }

];

export default Preferences;