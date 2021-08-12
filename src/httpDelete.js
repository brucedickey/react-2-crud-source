import {deleteURL} from './urls.js';

export const deletePerson = (id, onDeleteOk) => {
  //const id     = $("#delete-modal-body span").data('id');
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
        //$("#delete-person-modal .btn-close").click();
        //getPeople();   // Data round trip; UI to show person deleted
        onDeleteOk();
      } else {
        alert(res.message);
      }
    });
}
