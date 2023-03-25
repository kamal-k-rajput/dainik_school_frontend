import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Logo from "../../../ASSETS/IMG/Logo/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import HorizoantalLine from "../../HorizoantalLine/HorizoantalLine";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";

export function NavbarLinks() {
  return (
    <div className="navbar-container">
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
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
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Live Classes</Nav.Link>
                  <NavDropdown
                    title="CLASSES"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      LKG to 5th
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      6 to 8th
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      9 to 12th
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <NavDropdown
                    title="SUBJECT"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Math</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">English</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Science</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">SST</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">EVS</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Spoken English
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <Nav.Link href="#action2" className="btn btn-sucess">
                    Log In
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

{
  /* <div className="navbar-container">
        <div className="logo-container">
          <a href="/">
            <img src={Logo} alt="" className="nav-logo" />
          </a>
        </div>
      </div>
      <HorizoantalLine /> */
}
// <div className="right-box">
//   <div className="links-container">
//     <div className="login-btn-container login-small">
//       <button className="btn btn-sucess">Log In</button>
//     </div>
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" sticky="top">
//           <Nav className="me-auto">
//             <NavDropdown title="CLASSES" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">LKG to 5th</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">6 to 8th</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">9 to 12th</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="SUBJECTS" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Maths</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Science</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">English</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">SST</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">EVS</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">
//                 Spoken English
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="live-classes">LIVE CLASSES</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   </div>
//   <div className="login-btn-container login-large">
//     <button className="btn btn-sucess">Log In</button>
//   </div>
// </div>;
