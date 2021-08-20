import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import './AddPersonModal.css';

function AddPersonModal(props) {
  // animation={false} to not run code that triggers a deprecation warining, per:
  // https://stackoverflow.com/questions/60903335/warning-finddomnode-is-deprecated-in-strictmode-finddomnode-was-passed-an-inst
  return (
    <Modal show={props.show} onHide={props.onCancel} animation={false}>
      <Modal.Header closeButton closeLabel=''>
        <Modal.Title>Add a person</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="add-first-name" className="form-label">First Name</label>
            <input type="text" className="form-control" id="add-first-name" />
          </div>
          <div className="mb-3">
            <label htmlFor="add-last-name" className="form-label">Last name</label>
            <input type="text" className="form-control" id="add-last-name" />
          </div>                            
          <div className="mb-3">
            <label htmlFor="add-email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="add-email" />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCancel}>Cancel</Button>
        <Button variant="primary" onClick={props.onSubmit}>Add person</Button>
      </Modal.Footer>
    </Modal>
  );  
}

export default AddPersonModal;
