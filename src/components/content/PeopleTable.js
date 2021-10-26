import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import css from './PeopleTable.module.css';

const PeopleTable = (props) => {
  return (
    <>
      <Row> 
        <Col>
          <Table striped id={css.peopleTable}>
            <thead>
              <tr>
                <th id={css.idCol}>ID</th>
                <th id={css.firstnameCol}>First Name</th>
                <th id={css.lastnameCol}>Last Name</th>
                <th id={css.emailCol}>Email</th>
                <th id={css.actionsCol}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.personRows}
            </tbody>
          </Table> 
        </Col>
      </Row> 
    </>
  );
}

export default PeopleTable;
