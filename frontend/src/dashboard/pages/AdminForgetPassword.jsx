import React from "react";
import { Button, Form } from "react-bootstrap";

const AdminForgetPassword = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="shadow p-3 rounded"
        style={{ width: "500px", maxWidth: "90%" }}
      >
        <h2 className="text-center mb-3 text-uppercase">Forget Password</h2>
        <p className="text-secondary text-center">
          Note : A link sent to your email to reset your password.
        </p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Button className="w-100 mt-3" variant="dark">
            SEND EMAIL
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AdminForgetPassword;
