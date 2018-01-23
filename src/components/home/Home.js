import React from 'react';
import Logo from '../../resources/logo_horizontal_selected.svg';
import './Home.css';
import Pricing from "../pricing/Pricing";

const Home = () => (
  <div className="Home">
    <div className="NavBar">
        <div className="Logo">
          <img src={Logo} alt="Wash Up"/>
        </div>
        <div className="Links">
          <a href="#HowItWorks">How it works</a>
          <a href="#">Pricing</a>
          <a href="/login">Login</a>
        </div>
        <i class="fa fa-bars" aria-hidden="true"/>
    </div>

    <section className="Hero">
      <h1>Laundry?</h1>
      <h2>ain't nobody got time for that!</h2>

      <div className="Order">
        <p>
          We'll pickup and deliver your laundry to your doorstep
          so you can focus on things that really matter.
        </p>

        <div className="OrderForm">
          <input placeholder="Email"/>
          <input placeholder="Postal Code"/>
          <button>CLEAN MY CLOTHES!</button>
        </div>
      </div>
    </section>

    <section id="HowItWorks" className="HowItWorks">
      <h1>How It Works</h1>
      <div className="HowItWorksItems">
        <div className="HowItWorksItem">
          <i className="fa fa-calendar" aria-hidden="true"/>
          <h3>Schedule</h3>
          <p>
            WashUp is available 7 days a week between 8pm and 10pm.
            Schedule anytime at washup.io.
          </p>
        </div>
        <div className="HowItWorksItem">
          <i className="fa fa-shopping-bag" aria-hidden="true"/>
          <h3>Pickup</h3>
          <p>
            Your friendly WashUp Valet will arrive between 8PM and 10PM,
            and can answer any questions you have.
          </p>
        </div>
        <div className="HowItWorksItem">
          <i className="fa fa-truck" aria-hidden="true"/>
          <h3>Delivery</h3>
          <p>
            WashUp  delivers on a consistent and predictable schedule,
            always between 8pm and 10pm.
          </p>
        </div>
      </div>
    </section>


    <section className="Price">
      <h1>Pricing</h1>
      <Pricing/>
    </section>
  </div>
);

export default Home;