import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Logo from "../../../ASSETS/IMG/Logo/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import HorizoantalLine from "../../HorizoantalLine/HorizoantalLine";

export const NavbarLinks = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <a href="/">
            <img src={Logo} alt="" className="nav-logo" />
          </a>
        </div>

        <div className="right-box">
          <div className="links-container">
            <div className="login-btn-container login-small">
              <button className="btn btn-sucess">Log In</button>
            </div>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <NavDropdown title="CLASSES" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        LKG to 5th
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        6 to 8th
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        9 to 12th
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="SUBJECTS" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Maths
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Science
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        English
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        SST
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        EVS
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Spoken English
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="live-classes">LIVE CLASSES</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className="login-btn-container login-large">
            <button className="btn btn-sucess">Log In</button>
          </div>
        </div>
      </div>
      <HorizoantalLine />
    </>
  );
};
