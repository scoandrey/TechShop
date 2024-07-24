import React from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
  return (
    <div className="container text-center">
      <div className="row mt-4">
        <div className="col-md-3">
          <TypeBar />
        </div>
        <div className="col-md-9">
          <BrandBar />
          <DeviceList />
        </div>
      </div>
    </div>
  );
};

export default Shop;
