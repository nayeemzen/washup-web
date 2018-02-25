import React from 'react';
import isEmail from 'validator/lib/isEmail';
import isPostalCode from 'validator/lib/isPostalCode';
import './IntroHero.css';
import {withRouter} from "react-router-dom";

class IntroHero extends React.Component {
    constructor() {
      super();
      this.state = {
        email: "",
        postalCode: "",
        errors: new Set()
      };
    }

    render() {
      return (
        <section className="IntroHero">
          <h1>Laundry & Dry Cleaning To Your Door</h1>
          <div className="Order">
            <p>So you can focus on things that really matter</p>
            <div className="OrderForm">
              <input
                id="email_input"
                className={this.state.errors.has('email') ? "inputError" : ""}
                spellCheck="false"
                placeholder="Email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <input
                id="postal_code_input"
                className={this.state.errors.has('postalCode') ? "inputError" : ""}
                spellCheck="false"
                placeholder="Postal Code"
                onChange={(e) => this.setState({ postalCode: e.target.value })}
              />
              <button onClick={() => this.signUp(this.state.email, this.state.postalCode)}>
                CLEAN MY CLOTHES
              </button>
            </div>
          </div>
        </section>
      );
    }

    signUp = (email, postalCode) => {
      email = this.normalize(email);
      postalCode = this.normalize(postalCode);
      const {errors} = this.state;
      const {history} = this.props;

      if (isEmail(email)) {
        errors.delete('email');
      } else {
        errors.add('email');
      }

      if (isPostalCode(postalCode, 'CA')) {
        errors.delete('postalCode');
      } else {
        errors.add('postalCode');
      }

      if (errors.size > 0) {
        this.setState({
          errors: errors
        });
      } else {
        history.push({
          pathname: '/signup/1',
          search: `?email=${email.replace(/\s/g, "")}&postalCode=${postalCode.toUpperCase()}`
        });
      }
    };

    normalize = str => str && str.length > 0 ? str.replace(/\s/g, "") : "";
}

export default withRouter(IntroHero);