import React from 'react';
import IntroHero from "./intro/IntroHero";
import HowItWorksHero from "./howitworks/HowItWorksHero";
import ImageWithText from './imagewithtext/ImageWithText';
import MomWithKidImage from '../../resources/mom_with_kids.jpg';
import SuitsOnRackImage from '../../resources/suits_on_rack.jpg';
import ShirtButtoning from '../../resources/shirt_buttoning.jpg';
import './Landing.css';
import Footer from "./footer/Footer";
import DefaultNavigationBar from "./navigation/DefaultNavigationBar";

const Landing = () => (
  <div className="Home">
    <DefaultNavigationBar/>
    <IntroHero/>
    <HowItWorksHero/>
    <ImageWithText
      image={MomWithKidImage}
      title="Focus on things that really matter"
      text={
        "Let WashUp take care of your laundry needs " +
        "so your time is better spent on the important things in your life."
      }
    />
    <ImageWithText
      image={SuitsOnRackImage}
      backgroundColor='alternate'
      imageDirection='left'
      title="Let the pros handle the laundry"
      text={
        "WashUp cleaning experts take care of your dry cleaning " +
        "and laundry with the utmost care and attention."
      }
    />
    <ImageWithText
      image={ShirtButtoning}
      title="Unmatched convenience"
      text={
        "We pickup and deliver your clothes to your door " +
        "packed and folded. We even offer next day delivery services."
      }
    />
    <Footer/>
  </div>
);

export default Landing;