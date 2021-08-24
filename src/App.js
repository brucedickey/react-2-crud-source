
import {useReducer, useState} from 'react';
import Container from 'react-bootstrap/Container';
import {validatePerson} from './utils/utils';
import readPerson from './http/httpRead';
import updatePerson from './http/httpUpdate';
import deletePerson from './http/httpDelete';
import AlertMsg from './components/page/AlertMsg';
import DisplayPersonModal from './components/modals/DisplayPersonModal';
import PersonInfoModal from './components/modals/PersonInfoModal';
import DeletePersonModal from './components/modals/DeletePersonModal';
import Header from './components/page/Header';
import Footer from './components/page/Footer';
import PeopleHeader from './components/page/PeopleHeader';
import PeopleTable from './components/page/PeopleTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const refreshTable = () => {
    forceUpdate();
  };

  const [person, setPerson] = useState([]);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertMsgVariant, setAlertMsgVariant] = useState('');

  //=== Read Profile ===
  const [showProfile, setShowProfile] = useState(false);
  const onReadError = (message) => {
    setAlertMsgVariant('danger');
    setAlertMsg(`READ PROFILE -- Error ${message}; please try again later.`);
  }
  const onReadWarning = (message) => {
    setAlertMsgVariant('warning');
    setAlertMsg(`READ PROFILE -- ${message}.`);
  }
  const onReadOk = (person) => {
    setPerson(person);
    setShowProfile(true);   
  }
  const showProfileModal = (person) => {
    setAlertMsg('');
    readPerson(person.id, onReadOk, onReadWarning, onReadError);
  }
  const hideProfileModal = () => {
    setShowProfile(false);
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
  const onUpdateError = (message) => {
    setAlertMsgVariant('danger');
    setAlertMsg(`UPDATE PERSON -- Error ${message}; please try again later.`);
  }
  const onUpdateWarning = (message) => {
    setAlertMsgVariant('warning');
    setAlertMsg(`UPDATE PERSON -- ${message}.`);
  }
  const onUpdateOk = () => {
    refreshTable();
  }
  const onSubmitUpdate = (values) => {
    if (!validatePerson(values.firstName, values.lastName, values.email)) return false;

    setShowUpdate(false);
    updatePerson(values.firstName, values.lastName, values.email, values.id, 
                 onUpdateOk, onUpdateWarning, onUpdateError);
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
    setAlertMsg(`DELETE PERSON -- Error ${message}; please try again later.`);
  }
  const onDeleteWarning = (message) => {
    setAlertMsgVariant('warning');
    setAlertMsg(`DELETE PERSON -- ${message}.`);
  }
  const onDeleteOk = () => {
    refreshTable();
  }
  const onSubmitDelete = (person_id) => {
    setShowDelete(false);
    deletePerson(person_id, onDeleteOk, onDeleteWarning, onDeleteError);
  }

  return (
    <div className="App">
      <Container fluid className="content">
        <Header />
        <div className="container">
          <PeopleHeader refreshTable={refreshTable} 
                        setAlertMsg={setAlertMsg} setAlertMsgVariant={setAlertMsgVariant} />
          <AlertMsg message={alertMsg} variant={alertMsgVariant} />
          <PeopleTable refreshTable={refreshTable} showProfileModal={showProfileModal} 
                       showUpdateModal={showUpdateModal} showDeleteModal={showDeleteModal} />
        </div>
        <DisplayPersonModal person={person} show={showProfile} onCancel={hideProfileModal} />
        <PersonInfoModal person={person} show={showUpdate} onCancel={hideUpdateModal} 
                         onSubmit={onSubmitUpdate} 
                         title="Update person" submitBtnLabel="Update person" 
                         defaults={ {"fname":person.fname, "lname":person.lname, "email":person.username} } />
        <DeletePersonModal person={person} show={showDelete} onCancel={hideDeleteModal} 
                           onSubmit={onSubmitDelete} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
