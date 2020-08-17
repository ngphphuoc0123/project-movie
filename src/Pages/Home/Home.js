import React, { Component, Fragment } from "react";
import ListMovie from "../Home/ListMovie/ListMovie";
import Header from "./Header";
import Carousel from "./Carousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";


class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Carousel />
        <ListMovie/>
        <Footer/>
      </Fragment>  
    );
  }
  
}

export default Home;
