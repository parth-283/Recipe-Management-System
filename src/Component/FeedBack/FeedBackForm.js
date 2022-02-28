import React from "react";
import { Container, Form } from "react-bootstrap";

function FeedBackForm() {
  return (
    <div>
      <div className="  border-info border-top border-3 rounded-3">
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="msg">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Your Message"
              />
            </Form.Group>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default FeedBackForm;
