import React, { Component, Fragment } from "react";

import Slider from "react-slick";
import bg1 from "../../img/bg1.png";
import bg2 from "../../img/bg2.jpg";
import bg3 from "../../img/bg3.jpg";
import bg4 from "../../img/bg4.jpg";
import bg5 from "../../img/bg5.jpg";
import ComboBox from "./ComboBox/ComboBox";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2900,
    };
    return (
      <Fragment>
        <div className="single-item">
        <Slider {...settings}>
          <div>
            <img width="100%" src={bg1} />
          </div>
          <div>
            <img width="100%" src={bg2} />
          </div>
          <div>
            <img width="100%" src={bg3} />
          </div>
          <div>
            <img width="100%" src={bg4} />
          </div>
          <div>
            <img width="100%" src={bg5} />
          </div>
        </Slider>
        <ComboBox />
      </div>
      </Fragment>
    );
  }
}
