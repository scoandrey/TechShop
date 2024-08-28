import React, { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { createType } from "../../http/deviceApi"; // Assuming this API exists

const CreateType = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");

  const addType = async () => {
    try {
      await createType({ name }); // Send the type name to the server
      device.setTypes([...device.types, { id: Date.now(), name }]); // Update the types in state
      setName("");
      onHide();
    } catch (error) {
      alert("Failed to add type. Please try again.");
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter type name"
          required
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="outline-success"
          onClick={addType}
          disabled={!name}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateType;
