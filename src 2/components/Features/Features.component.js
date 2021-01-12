import React from "react";

import driver from "assets/img/driver-img@1x.png";
import passenger from "assets/img/image@1x.png";
import webAdmin from "assets/img/img@1x.png";

import "./Features.style.scss";
import ItemComponent from "./Driver/ItemComponent.component";
import { Col, Container, Row } from "react-bootstrap";

const features = {
  driver: "driver",
  passenger: "passenger",
  webAdmin: "webAdmin",
};

const color = {
  driver: "#FFA825",
  passenger: "#3A89FF",
  webAdmin: "#32C641",
};
export const imgFeatures = (img) => {
  switch (img) {
    case "driver":
      return (
        <div className="image">
          <h1 style={{ color: color.driver }}>Driver</h1>
          <img src={driver} className="img70" alt="" />
        </div>
      );
    case "passenger":
      return (
        <div className="image">
          <h1 style={{ color: color.passenger }}>Passenger</h1>
          <img src={passenger} className="img70" alt="" />
        </div>
      );
    case "webAdmin":
      return (
        <div className="image">
          <h1 style={{ color: color.webAdmin }}>Web Admin</h1>
          <img src={webAdmin} className="img70" alt="" />
        </div>
      );

    default:
      break;
  }
};
const Features = () => {
  return (
    <>
      <div className="features" id="features">
        <Container>
          <div className="features-title">
            <h1 className="title">FEATURES</h1>
            <p className="subtitle-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              excepturi minima accusantium, dolorem a totam eos, culpa fugit
              pariatur quia perferendis! Blanditiis deserunt esse, asperiores
              dolorem ea ducimus dignissimos voluptatem!
            </p>
          </div>
          <div className="features-content">
            <Row>
              <Col md={4}>
                <ItemComponent
                  features={features.driver}
                  color={color.driver}
                />
              </Col>
              <Col md={4}>
                <ItemComponent
                  features={features.passenger}
                  color={color.passenger}
                />
              </Col>
              <Col md={4}>
                <ItemComponent
                  features={features.webAdmin}
                  color={color.webAdmin}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Features;
