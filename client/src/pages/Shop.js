import React, { useContext, useEffect } from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import {
  createDevice,
  getBrands,
  getDevices,
  getTypes,
} from "../http/deviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    getTypes().then((data) => device.setTypes(data));
    getBrands().then((data) => device.setBrands(data));
    getDevices(null, null, 1, 3).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device]);

  useEffect(() => {
    createDevice(
      device.selectedType.id,
      device.selectedBrand.id,
      device.page,
      2
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device, device.page, device.selectedType, device.selectedBrand]);

  return (
    <div className="container text-center">
      <div className="row mt-4">
        <div className="col-md-3">
          <TypeBar />
        </div>
        <div className="col-md-9">
          <BrandBar />
          <DeviceList />
          <Pages />
        </div>
      </div>
    </div>
  );
});

export default Shop;
