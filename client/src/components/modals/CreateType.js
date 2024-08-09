import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { createType } from "../../http/deviceApi";

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState();
  const addType = () => {
    createType({ name: value }).then((data) => setValue(""));
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="form-control"
            placeholder="Enter Type"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addType}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
