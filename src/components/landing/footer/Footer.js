import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../../resources/washup_horizontal_inverted.png';
import './Footer.css';

const Footer = () => (
  <section className="Footer">
    <div className="Branding">
      <img src={Logo} alt="WashUp"/>
      <p className="trademark">
        © 2018 WashUp<br/>
        Made with ♥ in Canada.
      </p>
      <p className="about">
        WashUp brings laundry and dry cleaning to
        your door. It is an on-demand convenience
        service with high quality standards.
      </p>
    </div>

    <div className="Company">
        <h1 className="title">Company</h1>
        <Link to="/">Home</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/public-pricing">Pricing</Link>
        <Link to="/contact-us">Contact</Link>
    </div>

    <div className="Social">
      <h1 className="title">Social</h1>
      <a href="https://www.facebook.com/washupio">Facebook</a>
      <a href="https://twitter.com/washupapp">Twitter</a>
      <a href="https://www.instagram.com/washupio/">Instagram</a>
    </div>
  </section>
);

export default Footer;