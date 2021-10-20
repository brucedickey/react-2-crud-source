import {useReducer, useState} from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [, refreshTable] = useReducer(x => x + 1, 0);

  const [person, setPerson] = useState([]);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertMsgVariant, setAlertMsgVariant] = useState('');

  //=== Read Profile ===
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
  const onSubmitDelete = (person_id) => {
    setShowDelete(false);
    deletePerson(person_id, refreshTable, onDeleteWarning, onDeleteError);
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

        {/* Bootstrap modals (below) fail to be added to React portals by ReactDOM.createPortal().
            So not using portals for them; letting them do their own thing. 
        */}

        <DisplayPersonModal 
           show={showProfile} person={person} 
           onHide={hideProfileModal} refreshTable={refreshTable} 
        />
        <PersonInfoModal
          show={showUpdate} type={'UPDATE PROFILE'}
          title="Update person" submitBtnLabel="Update person" id={person.id} 
          defaults={ {"fname":person.fname, "lname":person.lname, "email":person.username} } 
          onHide={hideUpdateModal} refreshTable={refreshTable} 
          setAlertMsgVariant={setAlertMsgVariant} setAlertMsg={setAlertMsg}
        />
        <DeletePersonModal 
          show={showDelete} person={person} 
          onHide={hideDeleteModal} refreshTable={refreshTable}
          onSubmit={onSubmitDelete} 
        />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
