import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import {validatePerson} from '../../utils/utils';
import './PersonInfoModal.css';

const FIRST_NAME = 0;
const LAST_NAME= 1;
const EMAIL = 2;

const PersonInfoModal = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target.form[FIRST_NAME].value.trim();
    const lastName = event.target.form[LAST_NAME].value.trim();
    const email = event.target.form[EMAIL].value.trim();

    const errorsMap = validatePerson(firstName, lastName, email);
    props.setErrors(errorsMap);

    if (Object.keys(errorsMap).length === 0) {
      props.onSubmit( {"id":props.person.id, "firstName":firstName, "lastName":lastName, "email":email} );
    }
  }

  const errorClass = error => {
    return ((error && error.length !== 0)? 'invalid-input' : '');
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
            <input type="text" className={`form-control ${errorClass(props.errors.firstName)}`} 
                   id="form-first-name" defaultValue={props.defaults.fname} />
            {props.errors.firstName && <p className="error-msg">{props.errors.firstName}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="form-last-name" className="form-label">Last name</label>
            <input type="text" className={`form-control ${errorClass(props.errors.lastName)}`}
                   id="form-last-name" defaultValue={props.defaults.lname} />
            {props.errors.lastName && <p className="error-msg">{props.errors.lastName}</p>}
          </div>                            
          <div className="mb-3">
            <label htmlFor="form-email" className="form-label">Email address</label>
            <input type="email" className={`form-control ${errorClass(props.errors.email)}`} 
                   id="form-email" defaultValue={props.defaults.email} />
            {props.errors.email && <p className="error-msg">{props.errors.email}</p>}
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
