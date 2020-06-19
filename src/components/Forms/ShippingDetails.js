import React from "react";
import { Form, Button, Card, Col } from "react-bootstrap";

const details = (props) => {
  return (
    <div style={{ width: "100%", margin: "1rem auto " }}>
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
          <Form.Label>Address 1</Form.Label>
          <Form.Control
            onChange={props.address1Handler}
            placeholder="1234 Main St"
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            onChange={props.address2Handler}
            placeholder="1234 Main St"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Country</Form.Label>
            <Form.Control
              onChange={props.countryHandler}
              placeholder="country"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Province</Form.Label>
            <Form.Control
              onChange={props.provinceHandler}
              placeholder="Western"
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control onChange={props.zipCodeHandler} placeholder="zip" />
          </Form.Group>
        </Form.Row>

        {/* <Button
          onClick={(e) => props.submitHandler(e)}
          style={{ width: "100%" }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button> */}
      </Form>
    </div>
  );
};

export default details;
