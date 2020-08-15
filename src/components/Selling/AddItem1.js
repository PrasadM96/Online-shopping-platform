import React from "react";
import { Form, InputGroup, Col, Button, Spinner } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required().min(3, "Too Short!").max(50, "Too Long!"),
  category: yup.string().required(),
  subCategory: yup.string().required(),
  condition: yup.string().required(),
  description: yup
    .string()
    .required()
    .min(2, "Too Short!")
    .max(1200, "Too Long!"),
  sellingArea: yup.string().required(),
  quantity: yup.number().required().integer("Must be an integer").min(0),
  price: yup.number().required().min(0),
  shippingFee: yup.number().required().min(0),
  terms: yup.string().required("You must agree before submitting"),
});

function FormExample(props) {
  //const values = props.values;
  //console.log(values.firstName);
  var {
    title,
    category,
    subCategory,
    condition,
    description,
    sellingArea,
    price,
    shippingFee,
    quantity,
  } = props.item;

  return (
    <Formik
      validationSchema={schema}
      onSubmit={props.onSubmitHandler}
      initialValues={{
        title: title,
        category: category,
        condition: condition,
        subCategory: subCategory,
        description: description,
        sellingArea: sellingArea,
        price: price,
        shippingFee: shippingFee,
        quantity: quantity,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} style={{ margin: "2% 10%" }}>
          <Form.Group sm controlId="validationFormik01">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={values.title}
              onChange={(e) => {
                handleChange(e);
                props.onChangeHandler(e);
              }}
              placeholder="title"
              //   onChange={props.onchangeHandler}
              isInvalid={!!errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} sm controlId="validationFormik02">
              <Form.Label>Category</Form.Label>
              <Form.Control
                onChange={(e) => {
                  handleChange(e);
                  props.onChangeHandler(e);
                }}
                as="select"
                name="category"
                value={values.category}
                // onChange={props.onchangeHandler}
                isInvalid={!!errors.category}
              >
                <option value="" disabled="true" selected>
                  Select a Category
                </option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Health</option>
                <option>Home</option>
                <option>Sports</option>
                <option>Stationary</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.category}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm controlId="validationFormik03">
              <Form.Label>Sub Category</Form.Label>
              <Form.Control
                onChange={(e) => {
                  handleChange(e);
                  props.onChangeHandler(e);
                }}
                as="select"
                name="subCategory"
                value={values.subCategory}
                // onChange={props.onchangeHandler}
                isInvalid={!!errors.subCategory}
              >
                <option value="" disabled="true" selected>
                  Select a SubCategory
                </option>
                {props.subCateArr.map((i) => (
                  <option>{i}</option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.subCategory}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group sm controlId="validationFormik04">
            <Form.Label>Condition</Form.Label>
            <Form.Control
              onChange={(e) => {
                handleChange(e);
                props.onChangeHandler(e);
              }}
              as="select"
              name="condition"
              value={values.condition}
              //   onChange={handleChange}
              isInvalid={!!errors.condition}
            >
              <option value="" disabled="true" selected>
                Select an Condition
              </option>
              <option>New</option>
              <option>Used</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.condition}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationFormik05">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) => {
                handleChange(e);
                props.onChangeHandler(e);
              }}
              as="textarea"
              rows="6"
              placeholder="description"
              name="description"
              value={values.description}
              //   onChange={handleChange}
              isInvalid={!!errors.description}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group sm controlId="validationFormik06">
            <Form.Label>Selling Area</Form.Label>
            <Form.Control
              onChange={(e) => {
                handleChange(e);
                props.onChangeHandler(e);
              }}
              as="select"
              name="sellingArea"
              value={values.sellingArea}
              isInvalid={!!errors.sellingArea}
            >
              <option value="" disabled="true" selected>
                Select an option
              </option>
              <option>Worldwide</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Africa</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.shippingArea}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group sm controlId="validationFormik07">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              onChange={(e) => {
                handleChange(e);
                props.onChangeHandler(e);
              }}
              type="number"
              placeholder="quantity"
              name="quantity"
              value={values.quantity}
              //   onChange={handleChange}
              isInvalid={!!errors.quantity}
            />
            <Form.Control.Feedback type="invalid">
              {errors.quantity}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group sm controlId="validationFormik08">
            <Form.Label>Price</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">USD</InputGroup.Text>
              </InputGroup.Append>
              <Form.Control
                onChange={(e) => {
                  handleChange(e);
                  props.onChangeHandler(e);
                }}
                type="text"
                placeholder="price"
                defaultValue=""
                type="text"
                name="price"
                value={values.price}
                // onChange={handleChange}
                isInvalid={!!errors.price}
              />
              <Form.Control.Feedback type="invalid">
                {errors.price}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group sm controlId="validationFormik09">
            <Form.Label>Shipping fee</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">USD</InputGroup.Text>
              </InputGroup.Append>
              <Form.Control
                onChange={(e) => {
                  handleChange(e);
                  props.onChangeHandler(e);
                }}
                required
                type="text"
                placeholder="shipping fee"
                name="shippingFee"
                value={values.shippingFee}
                // onChange={handleChange}
                isInvalid={!!errors.shippingFee}
              />
              <Form.Control.Feedback type="invalid">
                {errors.shippingFee}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="validationFormik10">
            {props.children}
            <Form.Control.Feedback type="invalid">
              {errors.terms}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik0"
            />
          </Form.Group>
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
      )}
    </Formik>
  );
}

export default FormExample;
