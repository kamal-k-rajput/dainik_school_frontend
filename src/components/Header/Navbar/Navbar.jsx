import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Logo from "../../../ASSETS/IMG/Logo/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

export const NavbarLinks = () => {
  return (
    <div className="navbar-component">
      <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="logo" className="navbar-logo" title={"logo"} />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown title="CLASSES" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  LKG TO 5th
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">6 to 8th</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  9 to 12th
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="SUBJECTS" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">MATHS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">SCIENCE</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">ENGLISH</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">SST</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">EVS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">HINDI</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  SPOKEN ENGLISH
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="live-classes">LIVE CLASSES</Nav.Link>
              <Nav.Link href="https://nrichlearning.com/auth/login">
                <Button variant="success">Log In</Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
