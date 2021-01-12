import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import BG1 from "assets/img/BG1.png";
import appstoreDownload from "assets/img/appstoreDownload.svg";
import googleDownload from "assets/img/googleDownload.svg";
import division2 from "assets/img/division-2@1x.png";
import division3 from "assets/img/division-3@1x.png";

import "./Introduce.style.scss";

const Introduce = (props) => {
  return (
    <>
      <div className="introduce">
        <Container>
          <Row>
            <Col className="introduce-left" md={6}>
              <h1 className="introduce-left-title">
                Car booking solution
                <br />
                <span
                  className="introduce-left-title"
                  style={{ color: "white" }}
                >
                  for your business
                </span>
              </h1>
              <p className="introduce-left-subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus, maxime. Delectus qui illum odio rerum quos
                corrupti voluptates mollitia perferendis aperiam, magnam amet
                illo debitis molestias et explicabo perspiciatis voluptatem.
              </p>
              <div className="download">
                <img
                  src={appstoreDownload}
                  alt=""
                  style={{ paddingRight: "1rem" }}
                />
                <img src={googleDownload} alt="" />
              </div>
            </Col>
            <Col className="introduce-right" md={6}>
              <img src={BG1} className="img100" alt="" />
            </Col>
          </Row>
        </Container>

        <div style={{ display: "flex" }}>
          <img
            className="introduce-bg"
            src={division3}
            style={{ left: "calc(50% - 2567px)" }}
            alt=""
          />
          <img
            className="introduce-bg"
            src={division2}
            style={{ left: "calc(50% - 780px)" }}
            alt=""
          />

          <img
            className="introduce-bg"
            src={division3}
            style={{ left: "calc(50% + 983px)" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Introduce;
