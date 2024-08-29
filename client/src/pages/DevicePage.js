import React, { useEffect, useState, useContext } from "react";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import BigStar from "../assets/Star.png";
import { useParams } from "react-router";
import { getOneDevice } from "../http/deviceApi";
import { Context } from "../index";

const DevicePage = () => {
  const { basket } = useContext(Context);
  const [device, setDevice] = useState({
    info: [],
  });
  const { id } = useParams();

  useEffect(() => {
    getOneDevice(id)
      .then((data) => {
        setDevice(data);
      })
      .catch((error) => {
        console.error("Error fetching device data:", error);
      });
  }, [id]);

  const handleAddToBasket = () => {
    basket.addItem(device);
  };

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col md={4} className="d-flex flex-column align-items-center">
          <Image
            width={300}
            height={300}
            src={`${process.env.REACT_APP_API_URL}/${device.img}`}
            alt={device.name}
          />
          <h2 className="mt-3">{device.name}</h2>
        </Col>

        <Col
          md={4}
          className="d-flex align-items-center justify-content-center"
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              background: `url(${BigStar}) no-repeat center center`,
              width: 240,
              height: 240,
              backgroundSize: "cover",
              fontSize: 64,
            }}
          >
            {device.rating}
          </div>
        </Col>

        <Col
          md={4}
          className="d-flex align-items-center justify-content-center"
        >
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 24,
              border: "5px solid lightgray",
            }}
          >
            <h3>Price: {device.price}$</h3>
            <Button variant="outline-dark" onClick={handleAddToBasket}>
              Add to basket
            </Button>
          </Card>
        </Col>
      </Row>

      <Row className="d-flex flex-column m-3">
        <h3>Description:</h3>
        {device.info && device.info.length > 0 ? (
          device.info.map((info, index) => (
            <Row
              key={info.id || index}
              style={{
                background: index % 2 === 0 ? "lightgray" : "transparent",
                padding: 10,
              }}
            >
              <strong>{info.title}:</strong> {info.description}
            </Row>
          ))
        ) : (
          <p>No description available for this device.</p>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;
