import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Context } from "../../WrapperProvider";

import appstoreDownload from "assets/img/appstoreDownload.svg";
import googleDownload from "assets/img/googleDownload.svg";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.style.scss";
import { Container } from "react-bootstrap";

const Footer = () => {
  const context = useContext(Context);
  return (
    <>
      <div className="footer">
        <Container>
          <div className="download">
            <div className="download-left">
              <h1>
                <FormattedMessage
                  id="app.downloadTheApp"
                  defaultMessage="Edit the files and save to reload"
                />
              </h1>
              <div className="app">
                <img
                  src={appstoreDownload}
                  alt=""
                  style={{ paddingRight: "1rem" }}
                />
                <img src={googleDownload} alt="" />
              </div>
            </div>
            <div className="download-right">
              <p>Language</p>
              <select
                className="select-input"
                value={context.locale}
                onChange={context.selectLanguage}
              >
                <option value="en">English</option>
                <option value="vi">Vietnam</option>
              </select>
            </div>
          </div>
          <div className="copy-right">
            <div className="text">© 2020 CBS. All Rights Reserved.</div>
            <div className="footer-sosial">
              <FacebookIcon style={{ color: "#3967C8" }} />
              <TwitterIcon style={{ color: "#00ACEE" }} />
              <LinkedInIcon style={{ color: "#0E76A8" }} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
