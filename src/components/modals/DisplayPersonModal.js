import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import css from './DisplayPersonModal.module.css';

const DisplayPersonModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide} animation={false}>
      <Modal.Header closeButton closeLabel=''>
        <Modal.Title>Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Badge className={css.idBadge}> ID: {props.person.id} </Badge>
        <img src={props.person.avatar} className={css.profileImage} alt="Profile"></img>
        <div className={`text-center ${css.personDetails}`}>
          <p className={css.personName}>{props.person.fname} {props.person.lname}</p>
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
