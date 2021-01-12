import React from "react";
import { Container } from "react-bootstrap";

import MAC from "assets/img/macbook-pro@1x.png";
import content from "assets/img/content-img@1x.png";
import nextArrow from "assets/img/next@1x.png";
import prevArrow from "assets/img/prev@1x.png";
import s31 from "assets/img/s3-1@1x.png";
import s32 from "assets/img/s3-2@1x.png";

import "./WebAdmin.style.scss";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      alt=""
      src={nextArrow}
      className={className}
      style={{ ...style, display: "block", height: "60px", width: "60px" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      alt=""
      src={prevArrow}
      className={className}
      style={{ ...style, display: "block", height: "60px", width: "60px" }}
      onClick={onClick}
    />
  );
}
const WebAdmin = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="webAdmin" id="webAdmin">
        <Container>
          <div className="webAdmin-title">
            <h1 className="title">WEB ADMIN</h1>
            <p className="subtitle-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate consectetur, quibusdam necessitatibus error temporibus
              impedit iure et ea molestiae culpa esse, modi assumenda odio?
              Officiis neque quaerat cupiditate reiciendis ratione?
            </p>
          </div>
          <div className="webAdmin-slider">
            <img src={MAC} className="img100 webAdmin-slider-mac " alt="" />
            <Slider {...settings}>
              <img src={content} className="img100" alt="" />
              <img src={content} className="img100" alt="" />
              <img src={content} className="img100" alt="" />
            </Slider>
          </div>
        </Container>
        <div style={{ display: "flex" }}>
          <img
            className="solutions-bgwebAdmin"
            src={s31}
            style={{ left: "calc(50% - 2875px)" }}
            alt=""
          />
          <img
            className="solutions-bgwebAdmin"
            src={s32}
            style={{ left: "calc(50% - 955px)" }}
            alt=""
          />

          <img
            className="solutions-bgwebAdmin"
            src={s32}
            style={{ left: "calc(50% + 965px)" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default WebAdmin;
