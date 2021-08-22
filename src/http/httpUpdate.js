import {avatarURL, updateURL} from './urls.js';

const updatePerson = (firstName, lastName, email, id, onUpdateOk) => {
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
        onUpdateOk();
      } else {
        alert(res.message);
      }
    });
}

export default updatePerson;
