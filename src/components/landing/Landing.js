import React from 'react';
import NavigationBar from './navigation/NavigationBar'
import IntroHero from "./intro/IntroHero";
import HowItWorksHero from "./howitworks/HowItWorksHero";
import PricingHero from "./pricing/PricingHero";
import './Landing.css';

const Landing = () => (
  <div className="Home">
    <NavigationBar>
      <a href="/pricing">Pricing</a>
      <a href="/faq">FAQ</a>
      <a href="/login">Login</a>
      <a href="/signup">Sign Up</a>
    </NavigationBar>
    <IntroHero/>
    <HowItWorksHero/>
  </div>
);

export default Landing;