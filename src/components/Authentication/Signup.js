import React from "react";

import { Form, Button, Card ,Col } from "react-bootstrap";

const Signup = props => {
    return (
      <Card style={{ width: "22rem", margin: "3rem auto " }}>
        <Card.Header className="text-center">Sign Up</Card.Header>
        <Card.Body>
            <Form>
            { props.err &&
              <p style={{color: 'red' ,fontSize:15,fontStyle: 'italic'}}> {props.err } </p> }
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                onChange={props.firstnameHandler}
                errorText={props.firstnameError}
                placeholder="first name" />
                { props.firstnameError &&
                 <p style={{color: 'red' ,fontSize:10,fontStyle: 'italic'}}> {props.firstnameError } </p> }
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                 onChange={props.lastnameHandler}
                 errorText={props.lastnameError}
                 placeholder="last name" />
                 { props.lastnameError &&
                 <p style={{color: 'red' ,fontSize:10,fontStyle: 'italic'}}> {props.lastnameError } </p> }

                </Form.Group>
            </Form.Row>

 

           
                <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                onChange={props.emailHandler}
                
                type="email" placeholder="Enter email" />
                 { props.emailError &&
                <p style={{color: 'red' ,fontSize:10,fontStyle: 'italic'}}> {props.emailError } </p> }
                </Form.Group>
                

                <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                onChange={props.passwordHandler}
                errorText={props.passwordErr}
                type="password" placeholder="Password" />
                { props.passwordErr &&
                 <p style={{color: 'red' ,fontSize:10,fontStyle: 'italic'}}> {props.passwordErr } </p> }
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                onChange={props.confirmpasswordHandler}
                errorText={props.confirmErr}
                type="password" placeholder="Confirm Password" />
                { props.confirmErr &&
                 <p style={{color: 'red' ,fontSize:10,fontStyle: 'italic'}}> {props.confirmErr } </p> }
                </Form.Group>
           
                

                <Button 
                onClick={e => {
                    props.submitHandler(e);
                  }}
                  style={{ width: "100%" }} variant="primary" type="Submit">
                    Create account
                </Button>
            </Form>
        </Card.Body>


        </Card>
  );
};

export default Signup;
