import React from "react";

import { Form, Button, Card ,Col } from "react-bootstrap";

const Signup = props => {
    return (
      <Card style={{ width: "22rem", margin: "3rem auto " }}>
        <Card.Header className="text-center">Sign Up</Card.Header>
        <Card.Body>
            <Form>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control  placeholder="first name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="last name" />
                </Form.Group>
            </Form.Row>

 

           
                <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
           
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="show" />
                </Form.Group>

                <Button style={{ width: "100%" }} variant="primary" type="Submit">
                    Create account
                </Button>
            </Form>
        </Card.Body>


        </Card>
  );
};

export default Signup;
