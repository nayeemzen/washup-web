import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../../resources/logo_horizontal.svg';
import './Footer.css';

const Footer = () => (
  <section className="Footer">
    <div className="Branding">
      <object data={Logo}>Wash Up</object>
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
        <Link to="/">FAQ</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Terms</Link>
        <Link to="/">Privacy</Link>
        <Link to="/">Contact</Link>
    </div>

    <div className="Social">
      <h1 className="title">Social</h1>
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
    </div>
  </section>
);

export default Footer;