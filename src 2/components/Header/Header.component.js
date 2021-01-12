import React from "react";
import logo from "assets/img/CBSLogo.svg";
import "./Header.style.scss";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="header" id="header">
        <Container>
          <Navbar style={{ background: "#000F35" }} expand="xl" fixed="top">
            <Container>
              <Navbar.Brand href="#home">
                <img src={logo} alt="" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="#header">HOME</Nav.Link>
                  <Nav.Link href="#solutions">SOLUTIONS</Nav.Link>
                  <Nav.Link href="#howItWork">MOBILE APPS</Nav.Link>
                  <Nav.Link href="#webAdmin">WEB ADMIN</Nav.Link>
                  <Nav.Link href="#features">FEATURES</Nav.Link>
                  <Nav.Link href="#questions">SUPPORT</Nav.Link>
                  <Nav.Link href="#contactUs">CONTACT</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    </>
  );
};
export default Header;
