import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  const linksText = ["Overons", "Social Media", "Counters", "Contact"];
  const companyText = ["Terms & Conditions", "Privacy", "Contact"];
  const getInTouchText = [
    "Crechterwoord K12 182 DK Alknjkcb",
    "085-132567",
    "info@payme.net",
  ];
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-header">
        <h1 className="gradient__text">
          Do You want to step into the future before other
        </h1>
      </div>
      <div className="gpt__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copywrite">
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
