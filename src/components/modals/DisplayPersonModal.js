import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import './DisplayPersonModal.css';

const DisplayPersonModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide} animation={false}>
      <Modal.Header closeButton closeLabel=''>
        <Modal.Title>Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Badge className="id-badge"> ID: {props.person.id} </Badge>
        <img src={props.person.avatar} className="profile-image" alt="Profile"></img>
        <div className="text-center person-details">
          <p className="person-name">{props.person.fname} {props.person.lname}</p>
          <p>{props.person.username}</p>
        </div>  
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );  
}

export default DisplayPersonModal;
