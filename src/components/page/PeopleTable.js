import React from 'react';
import {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import PersonTableRow from './PersonTableRow';
import getPeople from '../../http/httpIndex';
import './PeopleTable.css';

const PeopleTable = (props) => {
  const [personRows, setPersonRows] = useState([]);

  useEffect(() => {

    const onGetOk = (origPeopleList) => {

      if (origPeopleList) {
        const people = origPeopleList.reverse();   // Place new people on top

        let rows = people.map((person) => (
          <PersonTableRow 
            person={person} 
            key={person.id} 
            showProfileModal = {props.showProfileModal}
            showUpdateModal = {props.showUpdateModal}
            showDeleteModal = {props.showDeleteModal}
          />
        ))
        setPersonRows(rows);
      }
    };

    getPeople(onGetOk);

  }, [props.refreshTable, props.showProfileModal, props.showUpdateModal, props.showDeleteModal]);

  return (
    <>
      <Row> 
        <Col>
          <Table striped id="people-table">
            <thead>
              <tr>
                <th id="id-col">ID</th>
                <th id="firstname-col">First Name</th>
                <th id="lastname-col">Last Name</th>
                <th id="email-col">Email</th>
                <th id="actions-col">Actions</th>
              </tr>
            </thead>
            <tbody id="people-table-body">
              {personRows}
            </tbody>
          </Table> 
        </Col>
      </Row> 
    </>
  );
}

export default PeopleTable;
