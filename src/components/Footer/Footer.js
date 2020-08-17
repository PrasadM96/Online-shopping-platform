import React from "react";
import { Jumbotron, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Telephone, Envelope, Twit } from "react-bootstrap-icons";

import "./Footer.css";

const footer = (props) => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul class="list-unstyled quick-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/category/fashion">Fashion</a>
              </li>
              <li>
                <a href="/category/stationary">Stationary</a>
              </li>
              <li>
                <a href="/category/health">Health</a>
              </li>
              <li>
                <a href="/category/electronics">Electronics</a>
              </li>
              <li>
                <a href="/category/sports">Sports</a>
              </li>
              <li>
                <a href="/category/home">Home</a>
              </li>
            </ul>
          </div>


				
		
	

          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Contact Us</h5>
            <ul class="list-unstyled quick-links">
              <Telephone color="white" />{" "}
              <label style={{ color: "white" }}>0702451804</label>
              <br></br>
              <Telephone color="white" />{" "}
              <label style={{ color: "white" }}>0702451804</label>
              <hr />
              <Envelope color="white" />{" "}
              <label style={{ color: "white" }}>shopping@gmail.com</label>
              <br></br>
              <Envelope color="white" />{" "}
              <label style={{ color: "white" }}>shopping@gmail.com</label>
              <hr />
              <Envelope color="white" />{" "}
              <label style={{ color: "white" }}>0702451804</label>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Contact Us</h5>
            <ul class="list-unstyled quick-links">
              <Form>
                <Form.Group controlId="formemail">
                  <Form.Label style={{ color: "white" }}>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={props.name}
                    className="mb-3"
                    onChange={props.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formemail">
                  <Form.Label style={{ color: "white" }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={props.email}
                    className="mb-3"
                    onChange={props.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label style={{ color: "white" }}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    type="text"
                    name="message"
                    value={props.message}
                    className="mb-3"
                    onChange={props.handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => {
                      props.handleSubmit(e);
                    }}
                    size="sm"
                    style={
                      ({ marginTop: "2rem" },
                      { borderRadius: "20px" },
                      { width: "80px" })
                    }
                    block
                  >
                    Send
                  </Button>
                </Form.Group>
              </Form>
            </ul>
          </div>
		  </div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-google-plus"></i></a></li>
						<li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank"><i className="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr />
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
					<p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
				</div>
				<hr />
			</div>	
		</div>
       
    
   
		</section>
  );
};

export default footer;
