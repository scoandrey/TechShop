import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { getDevices } from "../http/deviceApi";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const data = await getDevices();
        if (data && data.rows && Array.isArray(data.rows)) {
          device.setDevices(data.rows);
        } else {
          console.error("Fetched data is not an array:", data);
          device.setDevices([]);
        }
      } catch (error) {
        console.error("Failed to fetch devices:", error);
        device.setDevices([]);
      }
    };

    fetchDevices();
  }, [device]);

  return (
    <div className="container">
      <div className="row">
        {device.devices.length === 0 ? (
          <p className="mt-4">No devices available</p>
        ) : (
          device.devices.map((device, index) => (
            <div
              key={`${device.id}-${index}`}
              className="col-6 col-sm-4 col-md-3 col-lg-3 mb-4"
            >
              <DeviceItem device={device} />
            </div>
          ))
        )}
      </div>
    </div>
  );
});

export default DeviceList;
