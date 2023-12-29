import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Topbar = () => {
  return (
    <Navbar expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold hFont">
          Shebi Hotel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Profile</Nav.Link>
            <Nav.Link href="#action2">Change Password</Nav.Link>
          </Nav>

          <Button variant="dark">Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
