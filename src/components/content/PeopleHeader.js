import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PersonInfoModal from '../modals/PersonInfoModal';  // Create and Update modal
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

  return (
    <>
      <Row id="people-header-row">
        <Col>
          <div className="content-title">People</div>
          <Button variant="primary" id="add-btn" onClick={onShow}>Add a person</Button>
        </Col>
      </Row>
      <PersonInfoModal 
        show={show} type={'ADD PERSON'} onHide={onHide}
        id={null} title="Add a person" submitBtnLabel="Add person" 
        defaults={ {"fname":"", "lname":"", "email":""} } 
        refreshTable={props.refreshTable} 
        setAlertMsgVariant={props.setAlertMsgVariant} setAlertMsg={props.setAlertMsg}
      /> 
    </>
  );
}

export default PeopleHeader;
