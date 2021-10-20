import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import createPerson from '../../http/httpCreate';
import updatePerson from '../../http/httpUpdate';
import {validatePerson} from '../../utils/utils';
import './PersonInfoModal.css';

const PersonInfoModal = (props) => {
  const [errors, setErrors] = useState({});

  const errorClass = error => {
    return ((error && error.length > 0)? 'invalid-input' : '');
  };

  const onHttpError = (message) => {
    props.setAlertMsgVariant('danger');
    props.setAlertMsg(`${props.type} -- Error ${message}; please try again later`);
  }
  const onHttpWarning = (message) => {
    props.setAlertMsgVariant('warning');
    props.setAlertMsg(`${props.type} -- ${message}`);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    // We have the event so React refs are not needed.
    const firstName = event.target.form[0].value.trim();
    const lastName = event.target.form[1].value.trim();
    const email = event.target.form[2].value.trim();

    const errorsMap = validatePerson(firstName, lastName, email);
    setErrors(errorsMap);

    if (Object.keys(errorsMap).length === 0) {
      props.onHide();
      if (props.type === 'UPDATE PROFILE') {
        updatePerson(firstName, lastName, email, props.id, props.refreshTable, onHttpWarning, onHttpError);
      } 
      else if (props.type === 'ADD PERSON') {
        createPerson(firstName, lastName, email, props.refreshTable, onHttpWarning, onHttpError);
      }
    }
  }

  return (
    <Modal show={props.show} onHide={props.onHide} animation={false}>
      <Modal.Header closeButton closeLabel=''>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="person-info-form">
          <div className="mb-3">
            <label htmlFor="form-first-name" className="form-label">First Name</label>
            <input type="text" className={`form-control ${errorClass(errors.firstName)}`} 
                  id="form-first-name" defaultValue={props.defaults.fname} />
            {errors.firstName && <p className="error-msg">{errors.firstName}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="form-last-name" className="form-label">Last name</label>
            <input type="text" className={`form-control ${errorClass(errors.lastName)}`}
                  id="form-last-name" defaultValue={props.defaults.lname} />
            {errors.lastName && <p className="error-msg">{errors.lastName}</p>}
          </div>                            
          <div className="mb-3">
            <label htmlFor="form-email" className="form-label">Email address</label>
            <input type="email" className={`form-control ${errorClass(errors.email)}`} 
                  id="form-email" defaultValue={props.defaults.email} />
            {errors.email && <p className="error-msg">{errors.email}</p>}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
        <Button variant="primary" type="submit" form="person-info-form" onClick={onSubmit}>
          {props.submitBtnLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PersonInfoModal;
