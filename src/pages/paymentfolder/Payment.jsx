import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { PaystackButton } from "react-paystack";

function Payment() {
  const publicKey = "pk_test_a8dc3ca7a6a4267353004f0370d5a181114155f3";
  const amount = 100000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    currency: "GHS",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <Row>
      <Col></Col>
      <Col>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="phone no"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Form.Group>
        </Form>{" "}
        <PaystackButton {...componentProps} />
      </Col>
      <Col></Col>
    </Row>
  );
}

export default Payment;
