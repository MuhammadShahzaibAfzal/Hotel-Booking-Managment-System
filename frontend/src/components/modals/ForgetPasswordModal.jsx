import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ForgetPasswordModal = ({ show, setShow }) => {
  return (
    <Modal
      show={show}
      onHide={() => {
        setShow(false);
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="fs-3 d-flex align-items-center gap-2 text-uppercase">
          Forget Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-secondary">
          Note : A link sent to your email to reset your password.
        </p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex ">
        <Button
          variant="outline-danger"
          onClick={() => {
            setShow(false);
          }}
        >
          Cancel
        </Button>
        <Button variant="dark">Send Email</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ForgetPasswordModal;
