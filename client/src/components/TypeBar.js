import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="container text-center">
      <div className="row">
        {device.types.map((type) => (
          <div
            className="card p-1 mt-2"
            key={type.id}
            onClick={() => device.setSelectedType(type)}
            style={{
              cursor: "pointer",
              border:
                type.id === device.selectedType.id
                  ? "2px solid blue"
                  : "2px solid lightgrey",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            {type.name}
          </div>
        ))}
      </div>
    </div>
  );
});

export default TypeBar;
