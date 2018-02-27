import React from 'react';
import './ContactUs.css';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import CardList from "../../card/CardList";
import DefaultNavigationBar from "../navigation/DefaultNavigationBar";
import ScrollToTop from "../../routes/ScrollToTop";

const Contact = () => (
  <section className="ContactUs">
    <ScrollToTop/>
    <DefaultNavigationBar/>
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