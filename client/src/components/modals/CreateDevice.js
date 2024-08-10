import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Dropdown, Form, Col, Row } from "react-bootstrap";
import { Context } from "../..";
import { createDevice, getBrands, getTypes } from "../../http/deviceApi";
import { observer } from "mobx-react-lite";

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTypes().then((data) => device.setTypes(data));
    getBrands().then((data) => device.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (number, key, value) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const addDevice = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", `${price}`);
      formData.append("img", file);
      formData.append("brandId", device.selectedBrand.id);
      formData.append("typeId", device.selectedType.id);
      formData.append("info", JSON.stringify(info));

      await createDevice(formData);
      setName("");
      setPrice(0);
      setFile(null);
      setInfo([]);
      onHide();
    } catch (error) {
      alert("Failed to add device. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedType.name || "Select Device"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedBrand.name || "Select Brand"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Group className="mt-3">
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter device"
              required
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Control
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Enter price"
              type="number"
              required
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Control type="file" onChange={selectFile} required />
          </Form.Group>
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add property
          </Button>
          {info.map((i) => (
            <Row className="mt-2" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo(i.number, "title", e.target.value)
                  }
                  placeholder="Enter name of property"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) =>
                    changeInfo(i.number, "description", e.target.value)
                  }
                  placeholder="Enter description of property"
                />
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
        <Button
          variant="outline-success"
          onClick={addDevice}
          disabled={loading || !name || !price || !file}
        >
          {loading ? "Adding..." : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
