import Button from 'react-bootstrap/Button';
import { Eye, PencilSquare, TrashFill } from 'react-bootstrap-icons';
import './PersonTableRow.css';

function PersonTableRow(props) {
  const person = props.person;

  const showProfileModal = () => {
    props.setShowProfile(person.id)
  }
  const showUpdateModal = () => {
    props.setShowUpdate(person.id)
  }
  const showDeleteModal = () => {
    props.setShowDelete(person.id)
  }
  
  // The mecallapi API index endpoint returns the email in the username field.
  return (
    <tr>
      <td>{person.id}</td>
      <td>{person.fname}</td>
      <td>{person.lname}</td>
      <td>{person.username}</td>
      <td>
        <Button variant="primary" className="action-btn" title="Display profile" onClick={showProfileModal} > <Eye />          </Button>
        <Button variant="primary" className="action-btn" title="Update profile"  onClick={showUpdateModal}  > <PencilSquare /> </Button>
        <Button variant="danger"  className="action-btn" title="Delete"          onClick={showDeleteModal}  > <TrashFill />    </Button>
      </td>
    </tr>
  );
}

export default PersonTableRow;
