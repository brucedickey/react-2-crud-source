import {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import DisplayPersonModal from './DisplayPersonModal.js';
//import UpdatePersonModal from './UpdatePersonModal.js';
//import DeletePersonModal from './DeletePersonModal.js';
import Table from 'react-bootstrap/Table';
import PersonTableRow from './PersonTableRow.js';
import {getPeople} from '../httpIndex.js';
import './PeopleTable.css';

function PeopleTable(props) {
  const [showProfile, setShowProfile] = useState(false);
  //const onShowProfile = () => setShowProfile(true);

  const [showUpdate, setShowUpdate] = useState(false);
  //const onShowEdit = () => setShowEdit(true);

  const [showDelete, setShowDelete] = useState(false);
  //const onShowDelete = () => setShowDelete(true);

  // const onSubmitDisplay = () => {
  // }

  // const onSubmitUpdate = () => {
  // }

  // const onSubmitDelete = () => {
  // }

  useEffect(() => {
     getPeople(onGetOk);
  });

  const onGetOk = (peopleList) => {
    props.setPeopleList(peopleList);
  }

  let personRows = "";
  if (props.peopleList) {
    personRows = props.peopleList.map((person) => (
      <PersonTableRow 
        person={person} 
        key={person.id} 
        peopleList={props.peopleList} 
        setPeopleList={props.setPeopleList} 
        showProfile = {showProfile}
        setShowProfile = {setShowProfile}
        showUpdate = {showUpdate}
        setShowUpdate = {setShowUpdate}
        showDelete = {showDelete}
        setShowDelete = {setShowDelete}
      />
    ))
  }

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
  /*
      <DisplayPersonModal show={props.showProfile} onCancel={setShowProfile(false)} onSubmit={onSubmitDisplay} />
      <UpdatePersonModal  show={props.showUpdate}  onCancel={setShowUpdate(false)}  onSubmit={onSubmitUpdate} />
      <DeletePersonModal  show={props.showDelete}  onCancel={setShowDelete(false)}  onSubmit={onSubmitDelete} />
  */
}

export default PeopleTable;
