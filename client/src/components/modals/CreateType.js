import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { Button } from "react-bootstrap";
import axios from "axios";

const CreateType = observer(() => {
  const { device } = useContext(Context);

  const handleDeleteType = async (typeId) => {
    try {
      await axios.delete(`http://localhost:7000/api/type/${typeId}`);
      device.setTypes(device.types.filter(type => type.id !== typeId));
    } catch (error) {
      console.error("Error deleting type:", error);
    }
  };

  return (
    <div>
      <h3 className="m-2 text-center">Manage Type</h3>
      <div className="d-flex flex-wrap">
        {device.types.map(type => (
          <div key={type.id} className="m-2">
            <Button
              variant="outline-primary"
              className="mr-2"
              onClick={() => device.setSelectedType(type)}
            >
              {type.name}
            </Button>
            <Button variant="danger" onClick={() => handleDeleteType(type.id)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default CreateType;
