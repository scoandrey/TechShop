import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const BasketModal = observer(({ show, handleClose }) => {
  const { basket } = useContext(Context);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Basket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {basket.items.length === 0 ? (
          <p>Your basket is empty</p>
        ) : (
          basket.items.map((item, index) => (
            <div key={`${item.id}-${index}`} className="d-flex justify-content-between align-items-center">
              <div>
                <h5>{item.name}</h5>
                <p>${item.price}</p>
              </div>
              <Button variant="outline-danger" onClick={() => basket.removeItem(item.id)}>
                Remove
              </Button>
            </div>
          ))
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Proceed to Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default BasketModal;
