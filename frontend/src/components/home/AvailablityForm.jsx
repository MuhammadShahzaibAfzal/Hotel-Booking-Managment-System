import React from "react";
import { Button, Form } from "react-bootstrap";

const AvailablityForm = () => {
  return (
    <div className="container availabilityForm">
      <div className="row">
        <div className="col p-4 shadow bg-white shadow rounded">
          <h5 className="mb-3 hFont">Check booking Availablity</h5>
          <Form className="row d-flex align-items-end">
            <div className="col-lg-3 mb-3 mb-lg-0">
              <Form.Group>
                <Form.Label>Check in</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </div>
            <div className="col-lg-3 mb-3 mb-lg-0">
              <Form.Group>
                <Form.Label>Check out</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </div>
            <div className="col-lg-3 mb-3 mb-lg-0">
              <Form.Group>
                <Form.Label>Childrens</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-lg-2 mb-3 mb-lg-0">
              <Form.Group>
                <Form.Label>Adults</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-lg-1">
              <Button variant="dark">Search</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AvailablityForm;
