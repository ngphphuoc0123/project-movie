import React from "react";
import ContactUs from "components/ContactUs/ContactUs.component";
import Features from "components/Features/Features.component";
import Footer from "components/Footer/Footer.component";
import HowItWork from "components/HowItWork/HowItWork.component";
import Introduce from "components/Introduce/Introduce.component";
import Questions from "components/Questions/Questions.component";
import Solutions from "components/Solutions/Solutions.component";
import WebAdmin from "components/WebAdmin/WebAdmin.component";
import Header from "components/Header/Header.component";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
const Home = () => {
  return (
    <>
      <Header />
      <Introduce theme={theme} />
      <Solutions />
      <HowItWork />
      <WebAdmin />
      <Features />
      <Questions />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
