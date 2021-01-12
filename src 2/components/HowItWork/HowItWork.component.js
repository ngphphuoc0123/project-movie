import React, { useState } from "react";
import { Container } from "react-bootstrap";

import iPhone from "assets/img/iPhone.svg";
import BGHowitworks from "assets/img/BGHowitworks.png";
import division2 from "assets/img/division-2@1x.png";
import division3 from "assets/img/division-3@1x.png";

import "./HowItWork.style.scss";
import Slider from "react-slick";

const HowItWork = () => {
  const [active, setActive] = useState(0);

  const activeFunction = (numb) => {
    setActive(numb);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="howItWork" id="howItWork">
        <Container>
          <div className="howItWork-title">
            <h1 className="title">HOW DOES CBS WORK</h1>
            <p className="subtitle-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, architecto voluptate corrupti vitae, odio molestias
              dicta quae totam sunt minima culpa! Cupiditate tenetur fugiat
              voluptate doloribus dolores, dicta ab veniam.
            </p>
          </div>
          <div className="howItWork-switch">
            <button
              className={
                active === 1
                  ? "howItWork-switch-driverApp active"
                  : "howItWork-switch-driverApp"
              }
              onClick={() => {
                activeFunction(1);
              }}
            >
              DRIVER APP
            </button>
            <button
              className={
                active === 2
                  ? "howItWork-switch-passengerApp active"
                  : "howItWork-switch-passengerApp"
              }
              onClick={() => {
                activeFunction(2);
              }}
            >
              PASSENGER APP
            </button>
          </div>
          <div className="howItWork-iPhone">
            <Slider {...settings}>
              <img src={iPhone} className="img100" alt="" />
              <img src={iPhone} className="img100" alt="" />
              <img src={iPhone} className="img100" alt="" />
            </Slider>
          </div>
        </Container>
        <img src={BGHowitworks} alt="" className="howItWork-bg" />
        <div style={{ display: "flex" }}>
          <img
            className="introduce-bghowItWork"
            src={division2}
            style={{ left: "calc(50% - 2089px)" }}
            alt=""
          />
          <img
            className="introduce-bghowItWork"
            src={division3}
            style={{ left: "calc(50% - 289px)" }}
            alt=""
          />

          <img
            className="introduce-bghowItWork"
            src={division2}
            style={{ left: "calc(50% + 1511px)" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HowItWork;
