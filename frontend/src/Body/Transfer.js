import React from "react";
import { Form, Button } from "react-bootstrap";
import countries from "../utils/countries";

function Transfer(props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="senderAddress">
        <Form.Label>Sender Address</Form.Label>
        <Form.Control type="plaintext" readOnly placeholder={props.sender} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="receiverAddress">
        <Form.Label>Receiver Address</Form.Label>
        <Form.Control
          type="plaintext"
          placeholder="Enter the receiver address"
        />
        <Form.Text style={{ color: "white" }}>
          Please check the address before pressing send.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="receiverCountry">
        <Form.Label>Receiver Country</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select the country</option>
          {countries.map((country, idx) => (
            <option value={idx + 1}>{country}</option>
          ))}
        </Form.Select>
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
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Transfer;
