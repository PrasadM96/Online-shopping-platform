import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

function ReuseableModal(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
        props.click();
      }}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            handleClose();
            //props.click();
          }}
          //   onClick={(e) => props.submitHandler(e)}

          variant="primary"
          type="submit"
        >
          Update Details
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReuseableModal;
