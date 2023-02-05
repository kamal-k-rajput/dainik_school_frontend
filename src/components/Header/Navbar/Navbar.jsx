import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Logo from "../../../ASSETS/IMG/Logo/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

export const NavbarLinks = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="logo" className="navbar-logo" title={"logo"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="courses">Courses</Nav.Link>
              <Nav.Link href="academics">Academics</Nav.Link>
              <Nav.Link href="Contacts">Contacts</Nav.Link>
              <Nav.Link href="Login">Login</Nav.Link>
              <Nav.Link href="Register">Register</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
              <Nav.Link href="News-and-blogs">News And Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
