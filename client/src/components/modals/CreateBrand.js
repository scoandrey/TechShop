import { Form } from "react-bootstrap";

const CreateBrand = (show, onHide) => {
  return (
    <div
      className="modal-dialog modal-dialog-centered"
      show={show}
      onHide={onHide}
    >
      <div className="modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Brand</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form></Form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                variant="outlone-success"
                data-bs-dismiss="modal"
                onClick={onHide}
              >
                Close
              </button>
              <button
                type="button"
                variant="outlone-success"
                data-bs-dismiss="modal"
                onClick={onHide}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBrand;
