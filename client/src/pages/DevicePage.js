import React from "react";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import BigStar from "../assets/Star.png";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Iphone 15 pro max",
    price: 1000,
    rating: 5,
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZWVodDhQODlsUWorNVh3SzNuSFFmNUFOL1haWCt6TDJ0UWlLb09XajVNdEV0cFVnZ3ZFSFRBQ3V3NlRDYUtORXlEY2Y3dHhKeERyUmluVjl5N1pOZ3hnRGpDc3VDTHRwelE5dFR1YWs0b0tnPT0=&traceId=1",
  };
  const description = [
    {
      id: 1,
      title: "RAM",
      description: "5Gb",
    },
    {
      id: 2,
      title: "Camera",
      description: "12pmx",
    },
    {
      id: 3,
      title: "Chip",
      description: "A 17 Pro",
    },
    {
      id: 4,
      title: "Core",
      description: "6",
    },
    {
      id: 5,
      title: "Battery",
      description: "10000Ah",
    },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex align-items-center justify-content-center">
            <h2>{device.name}</h2>
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
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 24,
              border: "5px solid lightgray",
            }}
          >
            <h3>{device.price}$</h3>
            <Button variant={"outline-dark"}>Add to basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
      <h3>Description</h3>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}:{info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
