import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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

  const onShow = () => setShow(true);

  const onClearClose = () => {
    clearForm();
    setShow(false);
  }
  
  const onCreateOk = () => {
    props.refreshTable();
  }
  
  const onSubmit = () => {
    const firstName = document.getElementById('add-first-name').value;
    const lastName  = document.getElementById('add-last-name').value;
    const email     = document.getElementById('add-email').value;

    if (!validatePerson(firstName, lastName, email)) return false;

    onClearClose();
    createPerson(firstName, lastName, email, onCreateOk);
  }
  
  return (
    <>
      <Row id="people-header-row">
        <Col>
          <div className="content-title">People</div>
          <Button variant="primary" id="add-btn" onClick={onShow}>Add a person</Button>
        </Col>
      </Row>
      <AddPersonModal show={show} onCancel={onClearClose} onSubmit={onSubmit} />
    </>
  );
}

export default PeopleHeader;
