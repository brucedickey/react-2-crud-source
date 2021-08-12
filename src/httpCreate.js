import {avatarURL, createURL} from './urls.js';

export const createPerson = (firstName, lastName, email, onCreateOk) => {
  const person = {
    "fname":    firstName,
    "lname":    lastName,
    "username": email,   // In the mecallapi API, username and email are aliases of each other
    "email":    email,
    "avatar":   avatarURL,
  };
  const options = {
    method:  'POST',
    body:    JSON.stringify(person),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(createURL, options)
    .then(res => res.json())
    .then(res => {
      if (res.status === 'ok') {
        onCreateOk();
      } else {
        alert(res.message);
      }
    });
}
