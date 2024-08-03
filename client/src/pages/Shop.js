import React, { useContext, useEffect } from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { getBrands, getDevices, getTypes } from "../http/deviceApi";

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    getTypes().then((data) => device.setTypes(data));
    getBrands().then((data) => device.setBrands(data));
    getDevices().then((data) => device.setDevices(data.rows));
  }, [device]);

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
});

export default Shop;
