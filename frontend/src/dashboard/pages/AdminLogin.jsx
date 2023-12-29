import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="shadow p-3 rounded"
        style={{ width: "500px", maxWidth: "90%" }}
      >
        <h2 className="text-center mb-3">ADMIN LOGIN</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="w-100 mt-3" variant="dark">
            LOGIN
          </Button>
        </Form>
        <div className="mt-3 text-end">
          <Link to="/admin-forget-password">Forget Password ?</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
