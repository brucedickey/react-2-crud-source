import Button from 'react-bootstrap/Button';
import { Eye, PencilSquare, TrashFill } from 'react-bootstrap-icons';
import './PersonTableRow.css';

const PersonTableRow = (props) => {
  const person = props.person;

  const onProfileModal = () => {
    props.showProfileModal(person)
  }
  const onUpdateModal = () => {
    props.showUpdateModal(person)
  }
  const onDeleteModal = () => {
    props.showDeleteModal(person)
  }
  
  // The mecallapi API index endpoint returns the email in the username field.
  return (
    <tr>
      <td>{person.id}</td>
      <td>{person.fname}</td>
      <td>{person.lname}</td>
      <td>{person.username}</td>
      <td>
        <Button variant="primary" className="action-btn" title="Display profile" onClick={onProfileModal}><Eye />         </Button>
        <Button variant="primary" className="action-btn" title="Update profile"  onClick={onUpdateModal} ><PencilSquare /></Button>
        <Button variant="danger"  className="action-btn" title="Delete"          onClick={onDeleteModal} ><TrashFill />   </Button>
      </td>
    </tr>
  );
}

export default PersonTableRow;
