import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import authStore from "../stores/authStore";
function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ name: "", password: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // to do : stop page from refreshing
    event.preventDefault();
    // call a function to sign up
    authStore.signUp(user);
    setIsOpen(false);
  };

  return (
    <>
      <Button className="delete" onClick={() => setIsOpen(true)}>
        Sign Up
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <p>username</p>{" "}
            <input
              value={user.username}
              name="username"
              type="text"
              placeholder="tel tell me! who are you"
              onChange={handleChange}
            />
            <p>password</p>
            <input
              value={user.password}
              name="password"
              type="password"
              placeholder="dont trust any password"
              onChange={handleChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignUpModal;
