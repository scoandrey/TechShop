import React from "react";
import { Image } from "react-bootstrap";
import Star from "../assets/Star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      style={{
        width: "100%",
        cursor: "pointer",
        border: "1px solid lightgrey",
        marginTop: "10px",
      }}
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Image
        width="100%"
        height={150}
        src={`${process.env.REACT_APP_API_URL}/${device.img}`}
        style={{ objectFit: "cover" }}
      />
      <div className="p-2 text-center">
        <div className="d-flex justify-content-center align-items-center">
          <div>{device.rating}</div>
          <Image src={Star} width={15} height={15} className="ms-1" />
        </div>
        <div className="mt-2" style={{ wordWrap: "break-word" }}>
          {device.name}
        </div>
      </div>
    </div>
  );
};

export default DeviceItem;
