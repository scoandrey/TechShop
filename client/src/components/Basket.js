import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Button } from "react-bootstrap";

const Basket = observer(() => {
  const { basket } = useContext(Context);

  return (
    <div>
      {basket.items.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        basket.items.map((item, index) => (
          <div key={`${item.id}-${index}`}>
            {" "}
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <Button onClick={() => basket.removeItem(item.id)}>Remove</Button>
          </div>
        ))
      )}
    </div>
  );
});

export default Basket;
