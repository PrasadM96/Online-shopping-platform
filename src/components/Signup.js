import React from "react";
import { Form, Button, Card, Col } from "react-bootstrap";

const signup = props => {
  return (
    <Card style={{ width: "22rem", margin: "3rem auto " }}>
      <Card.Header className="text-center">Shipping Details</Card.Header>
      <Card.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                onChange={props.firstnameHandler}
                placeholder="first name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                onChange={props.lastnameHandler}
                placeholder="lastname"
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={props.address1Handler}
              placeholder="1234 Main St"
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              onChange={props.address2Handler}
              placeholder="Apartment, studio, or floor"
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control onChange={props.cityHandler} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control onChange={props.statesHandler} as="select">
                <option>western</option>
                <option>north</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control onChange={props.zipHandler} />
            </Form.Group>
          </Form.Row>

          <Button
            onClick={e => props.submitHandler(e)}
            style={{ width: "100%" }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default signup;
