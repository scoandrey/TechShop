import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div>
      <ul className="list-group">
        {device.types.map((type) => (
          <li
            className={`list-group-item ${
              type.id === device.selectedType.id ? "active" : ""
            }`}
            key={type.id}
            onClick={() => device.setSelectedType(type)}
            style={{ cursor: "pointer", padding: "10px 0"}}
          >
            {type.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TypeBar;
