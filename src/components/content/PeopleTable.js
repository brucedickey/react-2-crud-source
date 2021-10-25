import React from 'react';
import {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import AlertMsg from './AlertMsg';
import PersonTableRow from './PersonTableRow';
import getPeople from '../../http/httpIndex';
import css from './PeopleTable.module.css';

const PeopleTable = (props) => {
  const [personRows, setPersonRows] = useState([]);

  const [alertMsg, setAlertMsg] = useState('');
  const [alertMsgVariant, setAlertMsgVariant] = useState('');

  const {refreshTable, showProfileModal, showUpdateModal, showDeleteModal} = props;

  useEffect(() => {
    const onGetError = (message) => {
      setAlertMsg(`FETCH PEOPLE -- Error ${message}; please try again later`);
      setAlertMsgVariant('danger');
    }    
    const onGetOk = (origPeopleList) => {
      if (origPeopleList) {
        const people = origPeopleList.reverse();   // Place new people on top

        let rows = people.map((person) => (
          <PersonTableRow 
            person={person} 
            key={person.id} 
            showProfileModal = {showProfileModal}
            showUpdateModal = {showUpdateModal}
            showDeleteModal = {showDeleteModal}
          />
        ))
        setPersonRows(rows);
      }
    };

    setAlertMsg('');
    getPeople(onGetOk, onGetError);

  }, [refreshTable, showProfileModal, showUpdateModal, showDeleteModal]);

  return (
    <>
      <AlertMsg message={alertMsg} variant={alertMsgVariant} />
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
              {personRows}
            </tbody>
          </Table> 
        </Col>
      </Row> 
    </>
  );
}

export default PeopleTable;
