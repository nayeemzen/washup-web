import React from 'react';
import './Faq.css';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import DefaultNavigationBar from "../navigation/DefaultNavigationBar";
import ScrollToTop from "../../routes/ScrollToTop";

const Faq = () => (
  <section className="Faq">
    <ScrollToTop/>
    <DefaultNavigationBar/>
    <Header headerText="Frequently Asked Questions" />
    <div className="FaqItems">
      <FaqItem question="What should I expect on my first order?">
        <h3>It's super simple!</h3>
        <ol>
          <li>You place the order on our website.</li>
          <li>You will get a text reminder an hour before your valet will arrive.</li>
          <li>We will give you a complimentary WashUp laundry bag to put your clothes in.</li>
          <li>For wash & fold your valet will measure the weight of the laundry load.</li>
          <li>You will get another text reminder an hour prior to drop off.</li>
        </ol>
      </FaqItem>
      
      <FaqItem question="What is the 50% discount offer?">
        <p>
          For a limited time, you can get 50% discount on your first order either it be
          wash & fold or dry cleaning. First orders with minimum of $15 are eligible for
          50% discount upto a maximum of $20 total in discounts. Just place an order and
          let washup do it's magic!
        </p>
	<p>
	Example 1: Jack places an order for $30. He gets 50% discount that is $15.
	</p>
        <p>
	Example 2: John places an order for $50. He only gets $20 in discount since that's
	the max discount offered.
        </p>
      </FaqItem>

      <FaqItem question="Is WashUp available in my city?">
        <p>
          We're only serving downtown Toronto and downtown Waterloo locations.
          We're working hard on expanding to even more cities super fast!
        </p>
      </FaqItem>
      <FaqItem question="How do I schedule my first WashUp?">
        <p>Its super simple. Signup for an account on our site, login and click START ORDER to schedule.</p>
      </FaqItem>

      <FaqItem question="How does WashUp ensure quality?">
        <p>
          We work with the best cleaning partners in the industry who are
          thoroughly vetted and have a proven track record. We have an additional internal
          quality assurance process to ensure your clothes receive the utmost attention to detail.
        </p>
      </FaqItem>

      <FaqItem question="Is there a minimum order?">
        <p>
          Wash & Fold minimum orders are 10lbs. We do accept orders that weigh less than 15lbs
          but will be billed at the minimum order size of 10lbs.
        </p>

        <p>
          Please note that any itemized
          pieces including comforters/duvets, blankets, bath mats, or kitchen mats included in
          your Wash & Fold order do not count towards the 10 lb minimum order size.
          These items are washed and dried separately to follow their specific care instructions.
        </p>
      </FaqItem>

      <FaqItem question="What if I have a huge amount of clothes?">
        <p>
          That's fine! Just let us know beforehand by shooting an email to support@washup.io
          so we come prepared with more bags.
        </p>
      </FaqItem>

     </div>
    <Footer/>
  </section>
);

const FaqItem = ({question, children}) => (
  <div className="FaqItem">
    <h2>{question}</h2>
    {children}
  </div>
);

export default Faq;
