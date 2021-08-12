import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import './AddPersonModal.css';

function AddPersonModal(props) {
  return (
    <Modal show={props.show} onHide={props.onCancel} animation={true}>
      <Modal.Header closeButton closeLabel=''>
        <Modal.Title>Add a person</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="mb-3">
            <label for="add-first-name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="add-first-name" />
          </div>
          <div class="mb-3">
            <label for="add-last-name" class="form-label">Last name</label>
            <input type="text" class="form-control" id="add-last-name" />
          </div>                            
          <div class="mb-3">
            <label for="add-email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="add-email" />
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
