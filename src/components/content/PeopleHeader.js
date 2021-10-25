import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PersonInfoModal from '../modals/PersonInfoModal';  // Create and Update modal
import css from './PeopleHeader.module.css';

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
      <Row id={css.peopleHeaderRow}>
        <Col>
          <div className={css.contentTitle}>People</div>
          <Button variant="primary" id={css.addBtn} onClick={onShow}>Add a person</Button>
        </Col>
      </Row>
      <PersonInfoModal 
        show={show} type={'ADD PERSON'} onHide={onHide}
        personId={null} title="Add a person" submitBtnLabel="Add person" 
        defaults={ {"fname":"", "lname":"", "email":""} } 
        refreshTable={props.refreshTable} 
        setAlertMsgVariant={props.setAlertMsgVariant} setAlertMsg={props.setAlertMsg}
      /> 
    </>
  );
}

export default PeopleHeader;
