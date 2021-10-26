import Button from 'react-bootstrap/Button';
import { Eye, PencilSquare, TrashFill } from 'react-bootstrap-icons';
import css from './PersonTableRow.module.css';

const PersonTableRow = (props) => {
  const onProfileModal = () => {
    props.showProfileModal(props.person)
  }
  const onUpdateModal = () => {
    props.showUpdateModal(props.person)
  }
  const onDeleteModal = () => {
    props.showDeleteModal(props.person)
  }
  
  // The mecallapi API index endpoint returns the email in the username field.
  return (
    <tr>
      <td>{props.person.id}</td>
      <td>{props.person.fname}</td>
      <td>{props.person.lname}</td>
      <td>{props.person.username}</td>
      <td>
        <Button variant="primary" className={css.actionBtn} title="Display profile" onClick={onProfileModal}><Eye />         </Button>
        <Button variant="primary" className={css.actionBtn} title="Update profile"  onClick={onUpdateModal} ><PencilSquare /></Button>
        <Button variant="danger"  className={css.actionBtn} title="Delete"          onClick={onDeleteModal} ><TrashFill />   </Button>
      </td>
    </tr>
  );
}

export default PersonTableRow;
