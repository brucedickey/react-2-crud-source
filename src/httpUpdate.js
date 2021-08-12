import {avatarURL, updateURL} from './urls.js';

export const updatePerson = (firstName, lastName, email, id, onUpdateOk) => {
  const person = {
    "id":       id,
    "fname":    firstName,
    "lname":    lastName,
    "username": email,   // In the mecallapi API, username and email are aliases of each other
    "email":    email,
    "avatar":   avatarURL
  };
  const options = {
    method:  'PUT',
    body:    JSON.stringify(person),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(updateURL, options)
    .then(res => res.json())
    .then(res => {
      if (res.status === 'ok') {
        //$("#update-person-modal .btn-close").click();
        //getPeople();   // Data round trip; UI to show person updated
        onUpdateOk();
      } else {
        alert(res.message);
      }
    });
}
