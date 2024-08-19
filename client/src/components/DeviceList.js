import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { getDevices } from "../http/deviceApi";
import { Button } from "react-bootstrap";

const DeviceList = observer(() => {
  const { device, basket } = useContext(Context);

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

  const handleAddToBasket = (device) => {
    basket.addItem(device);
  };

  return (
    <div>
      {device.devices.length === 0 ? (
        <p>No devices available</p>
      ) : (
        device.devices.map((device, index) => (
          <div key={`${device.id}-${index}`}> {/* Ensuring unique keys */}
            <h4>{device.name}</h4>
            <p>${device.price}</p>
            <Button onClick={() => handleAddToBasket(device)}>Add to Basket</Button>
          </div>
        ))
      )}
    </div>
  );
});

export default DeviceList;
