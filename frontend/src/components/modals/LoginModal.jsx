import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import User from "../icons/User";
import ForgetPasswordModal from "./ForgetPasswordModal";

const LoginModal = ({ show, setShow }) => {
  const [showForgetPasswordModal, setShowForgetPasswordModal] = useState(false);
  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-3 d-flex align-items-center gap-2 text-uppercase">
            <User /> User Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between align-items-center">
          <Button variant="dark">Login</Button>
          <span
            className="text-info "
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShow(false);
              setShowForgetPasswordModal(true);
            }}
          >
            Forget password ?
          </span>
        </Modal.Footer>
      </Modal>
      <ForgetPasswordModal
        show={showForgetPasswordModal}
        setShow={setShowForgetPasswordModal}
      />
    </>
  );
};

export default LoginModal;
