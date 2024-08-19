import React, { useContext, useState } from "react";
import { Context } from "..";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import BasketModal from "../components/modals/BasketModal";

const BasketButton = observer(() => {
  const { basket } = useContext(Context);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        variant="outline-dark"
        style={{ position: "fixed", bottom: 20, right: 20 }}
        onClick={handleShow}
      >
        Basket ({basket.totalItems})
      </Button>

      <BasketModal show={show} handleClose={handleClose} />
    </>
  );
});

export default BasketButton;
