import React from 'react';
import {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import readPerson from './http/httpRead';
import deletePerson from './http/httpDelete';
import AlertMsg from './components/content/AlertMsg';
import DisplayPersonModal from './components/modals/DisplayPersonModal';
import PersonInfoModal from './components/modals/PersonInfoModal';
import DeletePersonModal from './components/modals/DeletePersonModal';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PeopleHeader from './components/content/PeopleHeader';
import PeopleTable from './components/content/PeopleTable';
import PersonTableRow from './components/content/PersonTableRow';
import getPeople from './http/httpIndex';  
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './App.module.css';

const App = () => {
  const [alertMsg, setAlertMsg] = useState('');
  const [alertMsgVariant, setAlertMsgVariant] = useState('');

  const [personRows, setPersonRows] = useState([]);
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
      ));
      setPersonRows(rows);
    }
  };
  const getCurrentPeople = () => {
    setAlertMsg('');
    getPeople(onGetOk, onGetError);
  }
 
  useEffect(() => {
      getCurrentPeople()
    }, 
    // eslint-disable-next-line
    []  // Run upon mounting only. Ignore pesky ESLint. 
  );

  //=== Create / Add ===
  const [showAdd, setShowAdd] = useState(false);
  const showAddModal = () => {
    setAlertMsg('');
    setShowAdd(true);
  }
  const hideAddModal = () => {
    setShowAdd(false);
  }

  //=== Read Profile ===
  const [person, setPerson] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const showProfileModal = (person) => {
    setAlertMsg('');
    readPerson(person.id, onReadOk, onReadWarning, onReadError);
  }
  const hideProfileModal = () => {
    setShowProfile(false);
  }

  const onReadError = (message) => {
    setAlertMsgVariant('danger');
    setAlertMsg(`READ PROFILE -- Error ${message}; please try again later`);
  }
  const onReadWarning = (message) => {
    setAlertMsgVariant('warning');
    setAlertMsg(`READ PROFILE -- ${message}`);
  }
  const onReadOk = (person) => {
    setPerson(person);
    setShowProfile(true);
  }
 
  //=== Update ===
  const [showUpdate, setShowUpdate] = useState(false);
  const showUpdateModal = (person) => {
    setAlertMsg('');
    setPerson(person);
    setShowUpdate(true);
  }
  const hideUpdateModal = () => {
    setShowUpdate(false);
  }

  //=== Delete ===
  const [showDelete, setShowDelete] = useState(false);
  const showDeleteModal = (person) => {
    setAlertMsg('');
    setPerson(person);
    setShowDelete(true);
  }
  const hideDeleteModal = () => {
    setShowDelete(false);
  }
  const onDeleteError = (message) => {
    setAlertMsgVariant('danger');
    setAlertMsg(`DELETE PERSON -- Error ${message}; please try again later`);
  }
  const onDeleteWarning = (message) => {
    setAlertMsgVariant('warning');
    setAlertMsg(`DELETE PERSON -- ${message}`);
  }
  const onDeleteOk = () => {
    getCurrentPeople();
  }
  const onSubmitDelete = (person_id) => {
    setShowDelete(false);
    deletePerson(person_id, onDeleteOk, onDeleteWarning, onDeleteError);
  }

  return (
    <div className={css.App}>
      <Container fluid className={css.content}>
        <Header />
        <div className={css.container}>
          <PeopleHeader showAddModal={showAddModal} />
          <AlertMsg message={alertMsg} variant={alertMsgVariant} />
          <PeopleTable 
            personRows={personRows}
            showProfileModal={showProfileModal} 
            showUpdateModal={showUpdateModal} 
            showDeleteModal={showDeleteModal} 
          />
        </div>

        <DisplayPersonModal 
           show={showProfile} person={person} 
           onHide={hideProfileModal}
        />
        <PersonInfoModal
          show={showUpdate} type={'UPDATE PROFILE'}
          title="Update person" submitBtnLabel="Update person" personId={person.id} 
          defaults={ {"fname":person.fname, "lname":person.lname, "email":person.username} } 
          onHide={hideUpdateModal} getCurrentPeople={getCurrentPeople}
          setAlertMsg={setAlertMsg} setAlertMsgVariant={setAlertMsgVariant}
        />        
        <PersonInfoModal
          show={showAdd} type={'ADD PERSON'}
          personId={null} title="Add a person" submitBtnLabel="Add person" 
          defaults={ {"fname":"", "lname":"", "email":""} } 
          onHide={hideAddModal} getCurrentPeople={getCurrentPeople}
          setAlertMsg={setAlertMsg} setAlertMsgVariant={setAlertMsgVariant}
        />
        <DeletePersonModal 
          show={showDelete} person={person} 
          onHide={hideDeleteModal}
          onSubmit={onSubmitDelete} 
        />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
