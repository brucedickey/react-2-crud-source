import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AlertMsg from './AlertMsg';
import createPerson from '../../http/httpCreate';
import PersonInfoModal from '../modals/PersonInfoModal';
import './PeopleHeader.css';

const PeopleHeader = (props) => {
  const [errors, setErrors] = useState({});

  const [show, setShow] = useState(false);
  const onShow = () => {
    setErrors({});
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
    props.setAlertMsg(`ADD PERSON -- ${message}.`);
  }
  const onCreateError = (message) => {
    props.setAlertMsg(`ADD PERSON -- Error ${message}; please try again later.`);
    props.setAlertMsgVariant('danger');
  }
  const onSubmit = (values) => {
    setShow(false);
    createPerson(values.firstName, values.lastName, values.email, onCreateOk, onCreateWarning, onCreateError);
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
                       errors={errors} setErrors={setErrors}
                       title="Add a person" submitBtnLabel="Add person" 
                       defaults={ {"fname":"", "lname":"", "email":""} } />
    </>
  );
}

export default PeopleHeader;
