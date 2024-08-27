import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { Button } from "react-bootstrap";
import axios from "axios";

const CreateBrand = observer(() => {
  const { device } = useContext(Context);

  const handleDeleteBrand = async (brandId) => {
    try {
      await axios.delete(`http://localhost:7000/api/brand/${brandId}`);
      device.setBrands(device.brands.filter(brand => brand.id !== brandId));
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  };

  return (
    <div className="">
      <h3 className="m-2 text-center">Manage Brand</h3>
      <div className="d-flex flex-wrap">
        {device.brands.map(brand => (
          <div key={brand.id} className="m-2">
            <Button
              variant="outline-primary"
              className="mr-2"
              onClick={() => device.setSelectedBrand(brand)}
            >
              {brand.name}
            </Button>
            <Button variant="danger" onClick={() => handleDeleteBrand(brand.id)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default CreateBrand;
