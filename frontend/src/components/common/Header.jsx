import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  return (
    <>
      <Navbar expand="lg" className="shadow-sm bg-white" sticky="top">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand className="hFont fs-3 fw-bold">
              Shebi Hotel
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" className="shadow-none" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <LinkContainer to="/">
                <Nav.Link className="me-3 ms-lg-4">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/rooms">
                <Nav.Link className="me-3 ">Rooms</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/facilities">
                <Nav.Link className="me-3 ">Facilities</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about-us">
                <Nav.Link className="me-3 ">About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact-us">
                <Nav.Link className="me-3">Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
            <div className="d-flex">
              <Button
                variant="outline-dark"
                onClick={() => {
                  setShowLoginModal(true);
                }}
              >
                Login
              </Button>
              <Button
                variant="dark ms-3"
                onClick={() => {
                  setShowRegisterModal(true);
                }}
              >
                Register
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal show={showLoginModal} setShow={setShowLoginModal} />

      <RegisterModal show={showRegisterModal} setShow={setShowRegisterModal} />
    </>
  );
};

export default Header;
