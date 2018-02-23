import React from 'react';
import './ContactUs.css';
import NavigationBar from "../navigation/NavigationBar";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import CardList from "../../card/CardList";

const Contact = () => (
  <section className="ContactUs">
    <NavigationBar>
      <a href="/pricing">Pricing</a>
      <a href="/faq">FAQ</a>
      <a href="/login">Login</a>
      <a href="/signup">Sign Up</a>
    </NavigationBar>
    <Header headerText="Contact" />
    <div className="ContactUsContent">
      <p>Have a question? Feel free to contact us and we'll make sure its resolved!</p>
      <div className="ContactInfoList">
        <CardList
          categoryName=""
          items={[
            { name: "Email", value: "support@washup.io"}
          ]}/>
      </div>
    </div>
    <Footer/>
  </section>
);

export default Contact;