import React from 'react';
import './Contact.css';
import CardList from "../card/CardList";

const Contact = () => (
    <div className="Contact">
      <section className="Description">
        <p> Have a question? Feel free to contact us and we'll make sure its resolved!</p>
      </section>
      <div className="ContactInfoList">
        <CardList
          categoryName="Contact Us"
          items={[
            { name: "Email", value: "support@washup.io"},
            { name: "Phone", value: "(647)-494-2419"}
          ]}/>
      </div>
    </div>
);

export default Contact;
