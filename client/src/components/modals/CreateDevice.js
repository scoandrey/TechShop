import React, { useContext, useState } from "react";
import { Modal, Button, Dropdown, Form, Col, Row } from "react-bootstrap";
import { Context } from "../..";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Select Device</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Select Brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className="mt-3" placeholder="Enter device" />
          <Form.Control
            className="mt-3"
            placeholder="Enter price"
            type="number"
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter device"
            type="file"
          />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add property
          </Button>
          {info.map((i) => (
            <Row className="mt-2" key={i.number}>
              <Col md={4}>
                <Form.Control placeholder="Enter name of property" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Enter description of property" />
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(i.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
