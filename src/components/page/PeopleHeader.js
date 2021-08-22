import $ from 'jquery';
import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {validatePerson} from '../../utils/utils.js';
import createPerson from '../../http/httpCreate.js';
import AddPersonModal from '../modals/AddPersonModal.js';
import './PeopleHeader.css';

function clearForm() {
  $('#add-first-name').val('');
  $('#add-last-name').val('');
  $('#add-email').val('');
}

function PeopleHeader(props) {
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
    const firstName = $('#add-first-name').val();
    const lastName  = $('#add-last-name').val();
    const email     = $('#add-email').val();

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
