import {deleteURL} from './urls';

const deletePerson = (id, onDeleteOk) => {
  const person = {
    "id": id
  };
  const options = {
    method:  'DELETE',
    body:    JSON.stringify(person),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(deleteURL, options)
    .then(res => res.json())
    .then(res => {
      if (res.status === 'ok') {
        onDeleteOk();
      } else {
        alert(res.message);
      }
    });
}

export default deletePerson;
