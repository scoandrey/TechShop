import React, { useContext, useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import axios from "axios";

const Admin = observer(() => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const { device } = useContext(Context);

  const handleDeleteType = async (typeId) => {
    try {
      await axios.delete(`http://localhost:7000/api/type/${typeId}`);
      device.setTypes(device.types.filter((type) => type.id !== typeId));
    } catch (error) {
      console.error("Error deleting type:", error);
    }
  };

  const handleDeleteBrand = async (brandId) => {
    try {
      await axios.delete(`http://localhost:7000/api/brand/${brandId}`);
      device.setBrands(device.brands.filter((brand) => brand.id !== brandId));
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      <Button
        onClick={() => setBrandVisible(true)}
        variant="outline-dark"
        className="mt-4 p-2 w-50"
      >
        Add Brand
      </Button>
      <Button
        onClick={() => setTypeVisible(true)}
        variant="outline-dark"
        className="mt-4 p-2 w-50"
      >
        Add Type
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant="outline-dark"
        className="mt-4 p-2 w-50"
      >
        Add Device
      </Button>

      <div className="mt-4 w-50">
        <h3 className="text-primary">Manage Types</h3>
        {device.types.map((type) => (
          <div
            key={type.id}
            className="d-flex justify-content-between align-items-center"
          >
            <span>{type.name}</span>
            <Button
              variant="danger mt-2"
              onClick={() => handleDeleteType(type.id)}
            >
              Delete Type
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-4 w-50">
        <h3 className="text-primary">Manage Brands</h3>
        {device.brands.map((brand) => (
          <div
            key={brand.id}
            className="d-flex justify-content-between align-items-center"
          >
            <span>{brand.name}</span>
            <Button
              variant="danger mt-2"
              onClick={() => handleDeleteBrand(brand.id)}
            >
              Delete Brand
            </Button>
          </div>
        ))}
      </div>

      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
});

export default Admin;
