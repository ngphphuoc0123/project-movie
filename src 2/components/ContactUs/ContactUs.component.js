import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import ContactIMG from "../../assets/img/ContactIMG.svg";
import QuestionsIconSend from "../../assets/img/QuestionsIconSend.svg";

import "./ContactUs.style.scss";
import { Col, Container, Row } from "react-bootstrap";
const ContactUs = () => {
  return (
    <div className="contactUs" id="contactUs">
      <Container>
        <Row>
          <Col item xs={12} sm={7} className="contactUs-left">
            <div className="contactUs-header">
              <div className="contactUs-header-title">
                <img src={QuestionsIconSend} className="img10" alt="" />
                <h1 className="contactUs-header-title-text">CONTACT US</h1>
              </div>
              <p className="contactUs-header-subtitle">
                We would love to hear from you!
              </p>
            </div>

            <div className="contactUs-input">
              <div className="contactUs-input-info">
                <input
                  className="input-name"
                  type="text"
                  placeholder="Your Name *"
                />
                <input
                  className="input-mail"
                  type="text"
                  placeholder="Your Email *"
                />
              </div>
              <input
                className="input-message"
                type="text"
                placeholder="Your Message"
              />
            </div>
            <div className="contactUs-footer">
              <button className="footer-btn">SEND</button>
              <div className="footer-sosial">
                <FacebookIcon style={{ color: "#3967C8" }} />
                <TwitterIcon style={{ color: "#00ACEE" }} />
                <LinkedInIcon style={{ color: "#0E76A8" }} />
              </div>
            </div>
          </Col>
          <Col item xs={12} sm={5} className="contactUs-img">
            <img src={ContactIMG} className="img100" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
