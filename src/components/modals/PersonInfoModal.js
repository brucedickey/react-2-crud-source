import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import './PersonInfoModal.css';

const FIRST_NAME = 0;
const LAST_NAME= 1;
const EMAIL = 2;

const PersonInfoModal = (props) => {
  const onSubmit = (event) => {
    const firstName = event.target.form[FIRST_NAME].value;
    const lastName = event.target.form[LAST_NAME].value;
    const email = event.target.form[EMAIL].value;
    props.onSubmit( {"id":props.person.id, "firstName":firstName, "lastName":lastName, "email":email} );
  }

  // animation={false} to not run code that triggers a deprecation warining in Bootstrap, per:
  // https://stackoverflow.com/questions/60903335/warning-finddomnode-is-deprecated-in-strictmode-finddomnode-was-passed-an-inst
  return (
    <Modal show={props.show} onHide={props.onCancel} animation={false}>
      <Modal.Header closeButton closeLabel=''>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="person-info-form">
          <div className="mb-3">
            <label htmlFor="form-first-name" className="form-label">First Name</label>
            <input type="text" className="form-control" id="form-first-name" defaultValue={props.defaults.fname} />
          </div>
          <div className="mb-3">
            <label htmlFor="form-last-name" className="form-label">Last name</label>
            <input type="text" className="form-control" id="form-last-name" defaultValue={props.defaults.lname} />
          </div>                            
          <div className="mb-3">
            <label htmlFor="form-email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="form-email" defaultValue={props.defaults.email} />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCancel}>Cancel</Button>
        <Button variant="primary" type="submit" form="person-info-form" onClick={onSubmit}>{props.submitBtnLabel}</Button>
      </Modal.Footer>
    </Modal>
  );  
}

export default PersonInfoModal;
