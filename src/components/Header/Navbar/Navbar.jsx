import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Logo from "../../../ASSETS/IMG/Logo/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./Navbar.css";
import HorizoantalLine from "../../HorizoantalLine/HorizoantalLine";

export const NavbarLinks = () => {
  return (
    <div className="navbar-component">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="logo" className="navbar-logo" title={"logo"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HorizoantalLine />
    </div>
  );
};

// export function BasicExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
