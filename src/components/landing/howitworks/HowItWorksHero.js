import React from 'react';
import './HowItWorksHero.css';
import Calendar from '../../../resources/calendar.png';
import Sack from '../../../resources/sack.png';
import Delivery from '../../../resources/delivery.png';

const HowItWorksHero = () => (
  <section id="HowItWorks" className="HowItWorks">
    <h1>How It Works</h1>
    <div className="HowItWorksItems">
      <div className="HowItWorksItem">
        <img src={Calendar} alt="calendar"/>
        <h3>Schedule</h3>
        <p>
          WashUp is available 7 days a week between 8pm and 10pm.
          Schedule anytime at washup.io.
        </p>
      </div>
      <div className="HowItWorksItem">
        <img src={Sack} alt="laundry bag"/>
        <h3>Pickup</h3>
        <p>
          Your friendly WashUp Valet will arrive between 8PM and 10PM,
          and can answer any questions you have.
        </p>
      </div>
      <div className="HowItWorksItem">
        <img src={Delivery} alt="delivery"/>
        <h3>Delivery</h3>
        <p>
          WashUp  delivers on a consistent and predictable schedule,
          always between 8pm and 10pm.
        </p>
      </div>
    </div>
  </section>
);

export default HowItWorksHero;