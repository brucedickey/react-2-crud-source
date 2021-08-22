import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import './UpdatePersonModal.css';

function UpdatePersonModal(props) {
  const onSubmit = () => {
    props.onSubmit(props.person.id);
  };

  return (
    <Modal show={props.show} onHide={props.onCancel} animation={false}>
      <Modal.Header closeButton closeLabel=''>
        <Modal.Title>Update person</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="add-first-name" className="form-label">First Name</label>
            <input type="text" className="form-control" id="update-first-name" defaultValue={props.person.fname} />
          </div>
          <div className="mb-3">
            <label htmlFor="add-last-name" className="form-label">Last name</label>
            <input type="text" className="form-control" id="update-last-name" defaultValue={props.person.lname}/>
          </div>                            
          <div className="mb-3">
            <label htmlFor="add-email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="update-email" defaultValue={props.person.username}/>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCancel}>Cancel</Button>
        <Button variant="primary" onClick={onSubmit}>Update person</Button>
      </Modal.Footer>
    </Modal>
  );  
}

export default UpdatePersonModal;
