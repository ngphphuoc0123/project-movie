import React, { Component } from "react";
import imgBHD from "../../../img/bhdci.jpg";
import imgCGV from "../../../img/cgvci.jpg";
import imgCNS from "../../../img/cinestarci.jpg";
import imgLOTTE from "../../../img/lotteci.jpg";
import imgGALAXY from "../../../img/galaxyci.jpg";
import imgMEGA from "../../../img/megaci.jpg";

class Services extends Component{
  renderLogo = (maHeThongRap) => {
    switch (maHeThongRap) {
      case "BHDStar":
        return <img src={imgBHD} style={{ width: "50px" }} alt="" />;
        break;
      case "CGV":
        return <img src={imgCGV} style={{ width: "50px" }} alt="" />;
        break;
      case "Galaxy":
        return <img src={imgGALAXY} style={{ width: "50px" }} alt="" />;
        break;
      case "LotteCinima":
        return <img src={imgLOTTE} style={{ width: "50px" }} alt="" />;
        break;
      case "CineStar":
        return <img src={imgCNS} style={{ width: "50px" }} alt="" />;
        break;
      case "MegaGS":
        return <img src={imgMEGA} style={{ width: "50px" }} alt="" />;
        break;

      default:
        break;
    }
  };

}

export default Services;
