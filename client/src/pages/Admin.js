import React, { useContext, useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Admin = observer(() => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const {device} = useContext(Context)

  const handleDeleteType = (typeId) => {
    device.removeType(typeId);
  };

  const handleDeleteBrand = (brandId) => {
    device.removeBrand(brandId);
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
        <h3>Manage Types</h3>
        {device.types.map((type) => (
          <div
            key={type.id}
            className="d-flex justify-content-between align-items-center"
          >
            <span>{type.name}</span>
            <Button variant="danger" onClick={() => handleDeleteType(type.id)}>
              Delete Type
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-4 w-50">
        <h3>Manage Brands</h3>
        {device.brands.map((brand) => (
          <div
            key={brand.id}
            className="d-flex justify-content-between align-items-center"
          >
            <span>{brand.name}</span>
            <Button
              variant="danger"
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
