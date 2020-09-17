import React, { useState } from "react";
import ContactForm from "./ContactForm";
import address from "../../assets/img/address.svg";
import email from "../../assets/img/mail.svg";
import phone from "../../assets/img/phone.svg";

import "./ContactUs.css";
import PageHeader from "../PageHeader";
import { withRouter } from "react-router-dom";
import { uploadPicture } from "../../api/API";
const ContactUs = (props) => {
  return (
    <PageHeader title="contact Us">
      <div className="headText">
        <h1>Contact Us</h1>
      </div>
      <div className="contact_main">
        <div className="contact_icons">
          <li>
            <img src={address} className="logo1" alt="address" />
            <div className="img_text">
              <h4>ADDRESS</h4>
              <p>120 Spencer Street, Melbourne, VIC 3000</p>
            </div>
          </li>
          <li>
            <img src={phone} className="logo1" alt="phone" />
            <div className="img_text">
              <h4>PHONE</h4>
              <p>+123456666 (Office)</p>
              <p>+444444444 (Support)</p>
            </div>
          </li>
          <li>
            <img src={email} className="logo1" alt="email" />
            <div className="img_text">
              <h4>EMAIL</h4>
              <p>info@hacercode.com</p>
            </div>
          </li>
        </div>
        <div className="contact_form">
          <ContactForm />
        </div>
      </div>
    </PageHeader>
  );
};

export default withRouter(ContactUs);
