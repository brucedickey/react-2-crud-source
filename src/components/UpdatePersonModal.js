import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import './UpdatePersonModal.css';

function UpdatePersonModal(props) {
  return (
    <Modal show={props.showProfile} onHide={props.onCancel} animation={true}>
      <Modal.Header closeButton closeLabel=''>
        <Modal.Title>Update person</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="mb-3">
            <label for="update-first-name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="update-first-name" />
          </div>
          <div class="mb-3">
            <label for="update-last-name" class="form-label">Last name</label>
            <input type="text" class="form-control" id="update-last-name" />
          </div>                            
          <div class="mb-3">
            <label for="update-email" class="form-label">Email updateress</label>
            <input type="email" class="form-control" id="update-email" />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCancel}>Cancel</Button>
        <Button variant="primary" onClick={props.onSubmit}>Update person</Button>
      </Modal.Footer>
    </Modal>
  );  
}

export default UpdatePersonModal;
