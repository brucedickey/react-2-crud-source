
import {useReducer, useState} from 'react';
import Container from 'react-bootstrap/Container';
import $ from 'jquery';
import {validatePerson} from './utils/utils.js';
import readPerson from './http/httpRead.js';
import updatePerson from './http/httpUpdate.js';
import deletePerson from './http/httpDelete.js';
import DisplayPersonModal from './components/modals/DisplayPersonModal.js';
import UpdatePersonModal from './components/modals/UpdatePersonModal';
import DeletePersonModal from './components/modals/DeletePersonModal.js';
import Header from './components/page/Header.js';
import Footer from './components/page/Footer.js';
import PeopleHeader from './components/page/PeopleHeader.js';
import PeopleTable from './components/page/PeopleTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const refreshTable = () => {
    forceUpdate();
  };

  const [person, setPerson] = useState([]);

  //=== Read Profile ===
  const [showProfile, setShowProfile] = useState(false);
  const onReadOk = (person) => {
    setPerson(person);
    setShowProfile(true);   
  }
  const showProfileModal = (person) => {
    readPerson(person.id, onReadOk);
  }
  const hideProfileModal = () => {
    setShowProfile(false);
  }

  //=== Update ===
  const [showUpdate, setShowUpdate] = useState(false);
  const showUpdateModal = (person) => {
    setPerson(person);
    setShowUpdate(true);
  }
  const hideUpdateModal = () => {
    setShowUpdate(false);
  }
  const onUpdateOk = () => {
    refreshTable();
  }
  const onSubmitUpdate = (person_id) => {
    const firstName = $('#update-first-name').val();
    const lastName  = $('#update-last-name').val();
    const email     = $('#update-email').val();

    if (!validatePerson(firstName, lastName, email)) return false;

    setShowUpdate(false);
    updatePerson(firstName, lastName, email, person_id, onUpdateOk);
  }

  //=== Delete ===
  const [showDelete, setShowDelete] = useState(false);
  const showDeleteModal = (person) => {
    setPerson(person);
    setShowDelete(true);
  }
  const hideDeleteModal = () => {
    setShowDelete(false);
  }
  const onDeleteOk = () => {
    refreshTable();
  }
  const onSubmitDelete = (person_id) => {
    setShowDelete(false);
    deletePerson(person_id, onDeleteOk);
  }

  return (
    <div className="App">
      <Container fluid className="content">
        <Header />
        <div className="container">
          <PeopleHeader refreshTable={refreshTable} />
          <PeopleTable refreshTable={refreshTable} showProfileModal={showProfileModal} 
                       showUpdateModal={showUpdateModal} showDeleteModal={showDeleteModal} />
        </div>
        <DisplayPersonModal person={person} show={showProfile} onCancel={hideProfileModal} />
        <UpdatePersonModal person={person} show={showUpdate} showUpdateModal={showUpdateModal}
                           onCancel={hideUpdateModal} onSubmit={onSubmitUpdate} />
        <DeletePersonModal person={person} show={showDelete} showDeleteModal={showDeleteModal}
                           onCancel={hideDeleteModal} onSubmit={onSubmitDelete} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
