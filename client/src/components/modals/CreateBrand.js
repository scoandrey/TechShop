import React, { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { createBrand } from "../../http/deviceApi"; 

const CreateBrand = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");

  const addBrand = async () => {
    try {
      await createBrand({ name }); 
      device.setBrands([...device.brands, { id: Date.now(), name }]); 
      setName("");
      onHide();
    } catch (error) {
      alert("Failed to add brand. Please try again.");
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter brand name"
          required
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="outline-success"
          onClick={addBrand}
          disabled={!name}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateBrand;
