import React from 'react';
import './IntroHero.css';

const IntroHero = () => (
  <section className="IntroHero">
    <h1>Laundry and dry cleaning to your doorstep</h1>
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

export default IntroHero;