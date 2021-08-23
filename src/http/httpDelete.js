import {deleteURL} from './urls';

const deletePerson = (id, onDeleteOk, onDeleteWarning, onDeleteError) => {
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
    .then(res => {
      if (!res.ok) { throw res }
      return res.json()
    })
    .then(res => {
      if (res.status === 'error') {
        onDeleteWarning(`${res.message}`);
      }
      onDeleteOk();
    })
    .catch(err => { 
      onDeleteError(`${err.status}; ${err.statusText}`);
    });
}

export default deletePerson;
