import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container-contact100" style={{ marginTop: "-56px" }}>
          <div className="wrap-contact100" style={{ marginTop: "60px" }}>
            <form className="contact100-form validate-form">
              <span className="contact100-form-title">Send Me A Message</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Please enter your name"
              >
                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                />
                <span className="focus-input100" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Please enter your email: e@a.x"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="E-mail"
                />
                <span className="focus-input100" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Please enter your phone"
              >
                <input
                  className="input100"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                />
                <span className="focus-input100" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Please enter your message"
              >
                <textarea
                  className="input100"
                  name="message"
                  placeholder="Your Message"
                  defaultValue={""}
                />
                <span className="focus-input100" />
              </div>
              <div className="container-contact100-form-btn">
                <button className="contact100-form-btn">
                  <span>
                    <i
                      className="fa fa-paper-plane-o m-r-6"
                      aria-hidden="true"
                    />
                    Send
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
