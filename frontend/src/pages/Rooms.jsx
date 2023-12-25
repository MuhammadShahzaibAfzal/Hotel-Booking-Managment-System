import React from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import filterIcon from "../assets/filter-right.svg";
import HorizantalRoomCard from "../components/common/HorizantalRoomCard";

const Rooms = () => {
  return (
    <div className="container-fluid p-0 mt-0">
      <div className="row">
        {/* SIDEBAR */}
        <aside className="col-lg-3">
          <Navbar expand="lg" className="bg-light">
            <Container className="d-flex flex-row flex-lg-column align-items-start">
              <Navbar.Brand>Filters</Navbar.Brand>
              <Navbar.Toggle
                aria-controls="filterDropdown"
                className="shadow-none bg-white"
              >
                <img src={filterIcon} alt="" width="30px" />
              </Navbar.Toggle>
              <Navbar.Collapse
                id="filterDropdown"
                className="w-100 shadow-none flex-column"
              >
                <div className="bg-white p-3 w-100 my-3">
                  <h6 className="mb-3">Check Availabilty</h6>
                  <Form>
                    <Form.Group>
                      <Form.Label>Check in</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Check out</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Form>
                </div>
                <div className="bg-white p-3 w-100 my-3">
                  <h6 className="mb-3">Facilities</h6>
                  <Form>
                    <Form.Check
                      type="checkbox"
                      id="custom-switch"
                      label="Wifi"
                    />
                    <Form.Check
                      type="checkbox"
                      id="custom-switch"
                      label="Wifi"
                    />
                    <Form.Check
                      type="checkbox"
                      id="custom-switch"
                      label="Window"
                    />
                    <Form.Check
                      type="checkbox"
                      id="custom-switch"
                      label="Television"
                    />
                    <Form.Check
                      type="checkbox"
                      id="custom-switch"
                      label="Washroom"
                    />
                  </Form>
                </div>
                <div className="bg-white p-3 w-100 my-3">
                  <h6 className="mb-3">Features</h6>
                  <Form>
                    <Form.Check
                      type="checkbox"
                      id="custom-switch"
                      label="Wifi"
                    />
                    <Form.Check
                      type="checkbox"
                      id="custom-switch"
                      label="Wifi"
                    />
                    <Form.Check
                      type="checkbox"
                      id="custom-switch"
                      label="Window"
                    />
                    <Form.Check
                      type="checkbox"
                      id="custom-switch"
                      label="Television"
                    />
                    <Form.Check
                      type="checkbox"
                      id="custom-switch"
                      label="Washroom"
                    />
                  </Form>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </aside>
        {/* MAIN ROOMS SECTION */}
        <div className="col-lg-8 mx-auto mt-3">
          <HorizantalRoomCard />
          <HorizantalRoomCard />
          <HorizantalRoomCard />
          <HorizantalRoomCard />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
