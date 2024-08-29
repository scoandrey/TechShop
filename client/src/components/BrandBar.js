import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className="container text-center mt-2">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {device.brands.map((brand) => (
          <div
            className="card p-1"
            key={brand.id}
            onClick={() => device.setSelectedBrand(brand)}
            style={{
              cursor: "pointer",
              border:
                brand.id === device.selectedBrand.id
                  ? "2px solid blue"
                  : "2px solid lightgrey",
              borderRadius: "5px",
              marginRight: "10px"
            }}
          >
            {brand.name}
          </div>
        ))}
      </div>
    </div>
  );
});

export default BrandBar;
