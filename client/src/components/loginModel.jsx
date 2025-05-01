import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup, Alert } from 'react-bootstrap';
import axios from 'axios'; // Axios for API call

const LoginModel = ({ show, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log('Login successful:', res.data);
      setErrorMessage('');
      onClose(); // Close modal on successful login
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                {passwordVisible ? 'Hide' : 'Show'}
              </Button>
            </InputGroup>
          </Form.Group>

          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

          <Button variant="primary" type="submit" className="w-100 mb-3">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModel;
