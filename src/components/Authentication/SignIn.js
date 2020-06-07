import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const signIn = props => {
  return (
    <Card style={{ width: "22rem", margin: "3rem auto " }}>
      <Card.Header className="text-center">Sign In</Card.Header>
      <Card.Body>
        <Form>
        { props.err &&
         <p style={{color: 'red' ,fontSize:15,fontStyle: 'italic'}}> {props.err } </p> }
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email" value={props.email} 
              onChange={props.onChangeValue}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password" value={props.password} 
              onChange={props.onChangeValue}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check 
            checked={props.isChecked} name="lsRememberMe"
            onChange={props.isCheckedHandler}  type="checkbox" label="Remember me" />
          </Form.Group>
          <Button
            onClick={e => {
              props.submitHandler(e);
            }}
            style={{ width: "100%" }}
            variant="primary"
            type="Submit"
          >
            Submit
          </Button>
          <p style={{ marginTop: "0.1rem" }}>Create an account?signUP</p>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default signIn;
