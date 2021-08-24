import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AlertMsg from './AlertMsg';
import {validatePerson} from '../../utils/utils';
import createPerson from '../../http/httpCreate';
import PersonInfoModal from '../modals/PersonInfoModal';
import './PeopleHeader.css';

const PeopleHeader = (props) => {
  const [show, setShow] = useState(false);
  const onShow = () => {
    props.setAlertMsg('');
    setShow(true);
  }
  const onHide = () => {
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
  const onSubmit = (person_id) => {
    const firstName = document.getElementById('form-first-name').value;
    const lastName  = document.getElementById('form-last-name').value;
    const email     = document.getElementById('form-email').value;

    if (!validatePerson(firstName, lastName, email)) return false;

    setShow(false);
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
      <PersonInfoModal person={ {"id":null} } show={show} onCancel={onHide} onSubmit={onSubmit} 
                       title="Add a person" submitBtnLabel="Add person" 
                       defaults={ {"fname":"", "lname":"", "email":""} } />
    </>
  );
}

export default PeopleHeader;
