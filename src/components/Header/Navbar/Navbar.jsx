import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Logo from "../../../ASSETS/IMG/Logo/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import HorizoantalLine from "../../HorizoantalLine/HorizoantalLine";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router";

export function NavbarLinks() {
   const navigate = useNavigate();
   function changeRoutes(e) {
     e.preventDefault();
     localStorage.clear();
     navigate("/");
   }
  let isLoggedIn = useSelector((store) => {
    return store.isLogin;
  });
 
  return (
    <div className="navbar-container">
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          bg="#fff"
          expand={expand}
          className="mb-3"
          sticky="top"
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={Logo} alt="icon" className="navbar-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/live-classes">LIVE CLASSES </Nav.Link>
                  {/* <Nav.Link href="/">HOME</Nav.Link> */}
                  <Nav.Link href="/my-course">MY COURSE</Nav.Link>
                  <Nav.Link href="/courses">COURSES</Nav.Link>
                  <NavDropdown
                    title="CLASSES"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/classes">
                      LKG to 5th
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/classes">
                      6 to 8th
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/classes">
                      9 to 12th
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/classes">
                      Spoken English
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <NavDropdown
                    title="SUBJECT"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/subject">Math</NavDropdown.Item>
                    <NavDropdown.Item href="/subject">English</NavDropdown.Item>
                    <NavDropdown.Item href="/subject">Science</NavDropdown.Item>
                    <NavDropdown.Item href="/subject">SST</NavDropdown.Item>
                    <NavDropdown.Item href="/subject">EVS</NavDropdown.Item>
                    <NavDropdown.Item href="/subject">
                      Spoken English
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <Nav.Link
                    href={isLoggedIn ? "/logout" : "login"}
                    className="btn btn-sucess"
                  >
                    {isLoggedIn ? "Log Out" : "Log In"}
                  </Nav.Link>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <HorizoantalLine />
    </div>
  );
}
