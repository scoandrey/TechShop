import { Image } from "react-bootstrap";
import Star from "../assets/Star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <div
      className="col-md-3 mt-3"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <div
        className="card"
        style={{ width: 150, cursor: "pointer", border: "1px solid lightgrey" }}
      >
        <Image
          width={150}
          height={150}
          src={`${process.env.REACT_APP_API_URL}/${device.img}`}
        />
        <div className="d-flex justify-content-between align-items-center p-2 ">
          <div className="text-black-50">samsung</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image src={Star} width={15} height={15} className="ms-1" />
          </div>
        </div>
        <div className="text-center">{device.name}</div>
      </div>
    </div>
  );
};

export default DeviceItem;
