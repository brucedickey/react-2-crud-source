import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import css from './PeopleHeader.module.css';

const PeopleHeader = (props) => {

  return (
    <>
      <Row id={css.peopleHeaderRow}>
        <Col>
          <div className={css.contentTitle}>People</div>
          <Button variant="primary" id={css.addBtn} onClick={props.showAddModal}>Add a person</Button>
        </Col>
      </Row>
    </>
  );
}

export default PeopleHeader;
