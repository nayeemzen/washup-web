import React from 'react';
import './IntroHero.css';
import {withRouter} from "react-router-dom";

const IntroHero = () => (
  <section className="IntroHero">
    <h1>Laundry & Dry Cleaning To Your Door</h1>
    <div className="Order">
      <p>So you can focus on things that really matter</p>
      <div className="OrderForm">
        <input spellCheck="false" id="email_input" placeholder="Email"/>
        <input spellCheck="false" id="postal_code_input" placeholder="Postal Code"/>
        <button>CLEAN MY CLOTHES</button>
      </div>
    </div>
  </section>
);

export default withRouter(IntroHero);