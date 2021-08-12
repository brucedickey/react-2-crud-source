import $ from 'jquery';
import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {createPerson} from '../httpCreate.js';
import AddPersonModal from './AddPersonModal.js';
import './PeopleHeader.css';

function validatePerson(firstName, lastName, email) {
  // A simplistic and incomplete email regex
  const emailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,20}$/i;

  if (firstName.trim() === '' ) {
    alert('Please enter your first name.');
    document.getElementById('add-first-name').focus();  // focus() is deprecated in jQuery
    return false;
  } else if (lastName.trim() === '' ) {
    alert('Please enter your last name.');
    document.getElementById('add-last-name').focus();
    return false;
  } else if (email.trim() === '' ) {
      alert('Please enter your email address.');
      document.getElementById('add-email').focus();    
      return false;
  } else if (email.trim() !== '' && !emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      document.getElementById('add-email').focus(); 
      return false;
  }
  return true;
}

function clearForm() {
  $('#add-first-name').val('');
  $('#add-last-name').val('');
  $('#add-email').val('');
}

function PeopleHeader() {
  const [show, setShow] = useState(false);
  const onShow   = () => setShow(true);

  const onCancel = () => {
    clearForm();
    setShow(false);
  }
  
  const onCreateOk = () => {
    // FIXME Hacky shortcut for the time being...
    window.location.reload();
  }
  
  const onSubmit = () => {
    const firstName = $('#add-first-name').val();
    const lastName  = $('#add-last-name').val();
    const email     = $('#add-email').val();

    if (!validatePerson(firstName, lastName, email)) return false;

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
      <AddPersonModal show={show} onCancel={onCancel} onSubmit={onSubmit} />
    </>
  );
}

export default PeopleHeader;
