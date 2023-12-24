import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import User from "../icons/User";

const RegisterModal = ({ show, setShow }) => {
  return (
    <Modal
      show={show}
      onHide={() => {
        setShow(false);
      }}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="fs-3 d-flex align-items-center gap-2 text-uppercase">
          <User /> User Registration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="container p-0">
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Phone Number" />
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" placeholder="Address" rows={1} />
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="Pincode" />
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
            </div>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex">
        <Button
          variant="outline-danger"
          onClick={() => {
            setShow(false);
          }}
        >
          Cancel
        </Button>
        <Button variant="dark">Register</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterModal;
