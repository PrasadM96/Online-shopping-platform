import React from "react";
import { Form, InputGroup, Col, Button, Spinner, Row } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().min(3, "Too short").required(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  country: yup.string().required(),
  zip: yup.string().required(),
  teleNumber: yup
    .string()
    .min(10, "Not a phone number")
    .max(10, "Not a phone number")
    .required(),
  //   terms: yup
  //     .string()
  //     .required(),
});

function FormExample(props) {
  const {
    name,
    address,
    city,
    state,
    zip,
    teleNumber,
    country,
  } = props.details;
  return (
    <Formik
      validationSchema={schema}
      onSubmit={props.onSubmitHandler}
      initialValues={{
        name: name,
        address: address,
        city: city,
        state: state,
        zip: zip,
        teleNumber: teleNumber,
        country: country,
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
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="validationFormik101">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="name"
              value={values.name}
              onChange={(e) => {
                handleChange(e);
                props.onChangeHandler(e);
              }}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationFormik102">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder="address"
              value={values.address}
              onChange={(e) => {
                handleChange(e);
                props.onChangeHandler(e);
              }}
              isInvalid={!!errors.address}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.address}
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Row> */}
          <Form.Group as={Col} controlId="validationFormik103">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="city"
              value={values.city}
              onChange={(e) => {
                handleChange(e);
                props.onChangeHandler(e);
              }}
              isInvalid={!!errors.city}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.city}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationFormik104">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              placeholder="state"
              value={values.state}
              onChange={(e) => {
                handleChange(e);
                props.onChangeHandler(e);
              }}
              isInvalid={!!errors.state}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.state}
            </Form.Control.Feedback>
          </Form.Group>
          {/* </Form.Row> */}
          <Form.Group as={Col} controlId="validationFormik104">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="country"
              placeholder="country"
              value={values.country}
              onChange={(e) => {
                handleChange(e);
                props.onChangeHandler(e);
              }}
              isInvalid={!!errors.country}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.country}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationFormik105">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              name="zip"
              placeholder="zip"
              value={values.zip}
              onChange={(e) => {
                handleChange(e);
                props.onChangeHandler(e);
              }}
              isInvalid={!!errors.zip}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.zip}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationFormik106">
            <Form.Label>Tele Number</Form.Label>
            <Form.Control
              type="text"
              name="teleNumber"
              placeholder="teleNumber"
              value={values.teleNumber}
              onChange={(e) => {
                handleChange(e);
                props.onChangeHandler(e);
              }}
              isInvalid={!!errors.teleNumber}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.teleNumber}
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik107"
              feedbackTooltip
            />
          </Form.Group> */}
          <Button
            style={{ width: "100%" }}
            type="submit"
            disabled={props.loading}
          >
            {!props.loading ? (
              "Submit"
            ) : (
              <div>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Submitting...
              </div>
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample;
