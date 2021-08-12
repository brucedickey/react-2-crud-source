import Button from 'react-bootstrap/Button';
import { Eye, PencilSquare, TrashFill } from 'react-bootstrap-icons';
import './PersonTableRow.css';

function PersonTableRow(props) {
  const person = props.person;

  // The mecallapi API index endpoint returns the email in the username field.
  return (
    <tr>
      <td>{person.id}</td>
      <td>{person.fname}</td>
      <td>{person.lname}</td>
      <td>{person.username}</td>
      <td>
        <Button variant="primary" className="action-btn" title="Display profile" onClick={props.setShowProfile(person.id)} > <Eye />          </Button>
        <Button variant="primary" className="action-btn" title="Update profile"  onClick={props.setShowUpdate(person.id)}  > <PencilSquare /> </Button>
        <Button variant="danger"  className="action-btn" title="Delete"          onClick={props.setShowDelete(person.id)}  > <TrashFill />    </Button>
      </td>
    </tr>
  );
}

export default PersonTableRow;
