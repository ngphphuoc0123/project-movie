import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import solutionAFD from "assets/img/solutionAFD.svg";
import solutionAFP from "assets/img/solutionAFP.svg";
import solutionWAS from "assets/img/solutionWAS.svg";
import s31 from "assets/img/s3-1@1x.png";
import s32 from "assets/img/s3-2@1x.png";
import "./Solution.style.scss";

const Solutions = () => {
  return (
    <>
      <div className="solutions" id="solutions">
        <Container style={{ height: "100px" }}>
          <div className="solutions-title">
            <h1 className="title">SOLUTIONS</h1>
            <p className="subtitle-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
              beatae? In ipsam aut ea debitis ut impedit magni natus, enim
              explicabo, esse, cumque illum. Totam consequuntur dolor id libero
              deserunt.
            </p>
          </div>
        </Container>
        <div className="solutions-content">
          <Container>
            <Row>
              <Col>
                <div className="solutions-content-img img100">
                  <img className="img100" src={solutionAFD} alt="" />
                </div>
                <div className="solutions-content-item">
                  <h1 className="solutions-content-item-title">
                    APP FOR DRIVER
                  </h1>
                  <p className="solutions-content-item-subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum beatae exercitationem veritatis, dolor explicabo
                    eligendi nisi in harum doloremque
                  </p>
                </div>
              </Col>
              <Col>
                <div className="solutions-content-img img100">
                  <img className="img100" src={solutionAFP} alt="" />
                </div>
                <div className="solutions-content-item">
                  <h1 className="solutions-content-item-title">
                    APP FOR PASSENGER
                  </h1>
                  <p className="solutions-content-item-subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum beatae exercitationem veritatis, dolor explicabo
                    eligendi nisi in harum doloremque
                  </p>
                </div>
              </Col>
              <Col>
                <div className="solutions-content-img img100">
                  <img className="img100" src={solutionWAS} alt="" />
                </div>
                <div className="solutions-content-item">
                  <h1 className="solutions-content-item-title">
                    WEB ADMIN SYSTEM
                  </h1>
                  <p className="solutions-content-item-subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum beatae exercitationem veritatis, dolor explicabo
                    eligendi nisi in harum doloremque
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="solutions-btn">
          <button>ACCESS LIVE DEMO</button>
        </div>
        <div style={{ display: "flex" }}>
          <img
            className="solutions-bg"
            src={s31}
            style={{ left: "calc(50% - 2875px)" }}
            alt=""
          />
          <img
            className="solutions-bg"
            src={s31}
            style={{ left: "calc(50% - 955px)" }}
            alt=""
          />

          <img
            className="solutions-bg"
            src={s32}
            style={{ left: "calc(50% + 965px)" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Solutions;
