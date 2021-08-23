import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AlertMsg from './AlertMsg';
import {validatePerson} from '../../utils/utils';
import createPerson from '../../http/httpCreate';
import AddPersonModal from '../modals/AddPersonModal';
import './PeopleHeader.css';

const clearForm = () => {
  document.getElementById('add-first-name').value = '';
  document.getElementById('add-last-name').value = '';
  document.getElementById('add-email').value = '';
}

const PeopleHeader = (props) => {
  const [show, setShow] = useState(false);
  const onShow = () => {
    props.setAlertMsg('');
    setShow(true);
  }
  const onClearClose = () => {
    clearForm();
    setShow(false);
  }
  const onCreateOk = () => {
    props.refreshTable();
  }
  const onCreateWarning = (message) => {
    props.setAlertMsgVariant('warning');
    props.setAlertMsg(`DELETE PERSON -- ${message}.`);
  }
  const onCreateError = (message) => {
    props.setAlertMsg(`ADD PERSON -- Error ${message}; please try again later.`);
    props.setAlertMsgVariant('danger');
  }
  const onSubmit = () => {
    const firstName = document.getElementById('add-first-name').value;
    const lastName  = document.getElementById('add-last-name').value;
    const email     = document.getElementById('add-email').value;

    if (!validatePerson(firstName, lastName, email)) return false;

    onClearClose();
    createPerson(firstName, lastName, email, onCreateOk, onCreateWarning, onCreateError);
  }
  
  return (
    <>
      <Row id="people-header-row">
        <Col>
          <div className="content-title">People</div>
          <Button variant="primary" id="add-btn" onClick={onShow}>Add a person</Button>
        </Col>
      </Row>
      <AlertMsg message={props.alertMsg} variant={props.alertMsgVariant} />
      <AddPersonModal show={show} onCancel={onClearClose} onSubmit={onSubmit} />
    </>
  );
}

export default PeopleHeader;
