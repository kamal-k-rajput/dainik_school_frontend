import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Logo from "../../../ASSETS/IMG/Logo/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import HorizoantalLine from "../../HorizoantalLine/HorizoantalLine";
import "./Navbar.css";

export const NavbarLinks = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="logo" className="navbar-logo" title={"logo"} />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown title="COURSES" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">MATHS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">ENGLISH</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="live-classes">LIVE CLASSES</Nav.Link>
              <Nav.Link href="Login">
                <Button variant="success">Log In</Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HorizoantalLine className="hr-first-line" />
    </div>
  );
};
