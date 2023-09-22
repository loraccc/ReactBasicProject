import React from "react";
import carset from "../assets/carset.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${carset})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact us!</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name" className="fullname">
            Full Name
          </label>
          <input name="name" placeholder="Enter full Name"></input>
          <label htmlFor="Email" className="Email">
            Email
          </label>
          <input name="email " placeholder="Enter your email.."></input>
          <label htmlFor="message" className="message">
            Message
          </label>
          <textarea
            placeholder="Enter message"
            id=""
            cols="30"
            rows="6"
            required
          ></textarea>
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
