import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import './DeletePersonModal.css';

const DeletePersonModal = (props) => {
  const onSubmit = () => {
    props.onSubmit(props.person.id);
  };

  return (
    <Modal show={props.show} onHide={props.onHide} animation={false}>
      <Modal.Header closeButton closeLabel=''>
        <Modal.Title>Delete person</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Confirm that you want to delete {props.person.fname} {props.person.lname}. </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
        <Button variant="primary" onClick={onSubmit}>Delete person</Button>
      </Modal.Footer>
    </Modal>
  );  
}

export default DeletePersonModal;
