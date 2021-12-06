import React from "react";
import { Form, Button } from "react-bootstrap";
import transferMoney from "../utils/transferMoney";

function Transfer(props) {
  return (
    <Form onSubmit={transferMoney} id="form">
      <Form.Group className="mb-3" controlId="senderAddress">
        <Form.Label>Sender Address</Form.Label>
        <Form.Control
          type="plaintext"
          readOnly
          placeholder={props.sender}
          value={props.sender}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="receiverCountry">
        <Form.Label>Receiver Address</Form.Label>
        <Form.Control type="plaintext" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="0"
          min="0"
          max="100000"
          step="0.1"
          style={{ margin: "0 auto", width: "25vw" }}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Transfer;
