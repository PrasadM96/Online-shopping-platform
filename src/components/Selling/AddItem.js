import React, { useState } from "react";
import { Form, InputGroup, Col, Button, Spinner } from "react-bootstrap";

function AddItem(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("error");
    } else {
      props.onSubmitHandler(event);
    }

    setValidated(true);
  };

  return (
    <Form
      style={{ margin: "2% 10%" }}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <h2>Selling Item Form</h2>
      <Form.Group sm controlId="validationCustom01">
        <Form.Label>Title</Form.Label>
        <Form.Control
          onChange={props.titleHandler}
          required
          type="text"
          placeholder="title"
        />
        <Form.Control.Feedback type="invalid">required</Form.Control.Feedback>
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} sm controlId="validationCustom02">
          <Form.Label>Category</Form.Label>
          <Form.Control onChange={props.categoryHandler} as="select" required>
            <option value="" disabled="true" selected>
              Select a Category
            </option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Health</option>
            <option>Home</option>
            <option>Sports</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">required</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} sm controlId="validationCustom03">
          <Form.Label>Sub Category</Form.Label>
          <Form.Control
            onChange={props.subCategoryHandler}
            as="select"
            required
          >
            <option value="" disabled="true" selected>
              Select a SubCategory
            </option>
            {props.subCateArr.map((i) => (
              <option>{i}</option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">required</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group sm controlId="validationCustom04">
        <Form.Label>Condition</Form.Label>
        <Form.Control onChange={props.conditionHandler} as="select" required>
          <option value="" disabled="true" selected>
            Select an Condition
          </option>
          <option>New</option>
          <option>Used</option>
        </Form.Control>{" "}
        <Form.Control.Feedback type="invalid">required</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="validationCustom05">
        <Form.Label>Description</Form.Label>
        <Form.Control
          onChange={props.descriptionHandler}
          as="textarea"
          rows="6"
          required
        />
        <Form.Control.Feedback type="invalid">required</Form.Control.Feedback>
      </Form.Group>

      <Form.Group sm controlId="validationCustom06">
        <Form.Label>Selling Area</Form.Label>
        <Form.Control onChange={props.sellingAreaHandler} as="select" required>
          <option value="" disabled="true" selected>
            Select an option
          </option>
          <option>Worldwide</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Africa</option>
        </Form.Control>{" "}
        <Form.Control.Feedback type="invalid">required</Form.Control.Feedback>
      </Form.Group>

      <Form.Group sm controlId="validationCustom08">
        <Form.Label>Price</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={props.priceHandler}
            required
            type="text"
            placeholder="price"
            defaultValue=""
          />

          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">USD</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <Form.Control.Feedback type="invalid">required</Form.Control.Feedback>
      </Form.Group>
      <Form.Group sm controlId="validationCustom07">
        <Form.Label>Shipping fee</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={props.shippingFeeHandler}
            required
            type="text"
            placeholder="shipping fee"
          />

          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">USD</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Form.Control.Feedback type="invalid">required</Form.Control.Feedback>
      </Form.Group>
      {props.children}
      <Form.Check
        style={{ marginBottom: "2%" }}
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
      />
      {!props.loading ? (
        <Button style={{ width: "100%" }} type="submit">
          Submit
        </Button>
      ) : (
        <Button style={{ width: "100%" }} variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Submitting...
        </Button>
      )}
    </Form>
  );
}

export default AddItem;
