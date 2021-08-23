import {avatarURL, createURL} from './urls';

const createPerson = (firstName, lastName, email, onCreateOk, onCreateWarning, onCreateError) => {
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
    .then(res => {
      if (!res.ok) { throw res }
      return res.json()
    })
    .then(res => {
      if (res.status === 'error') {
        onCreateWarning(`${res.message}`);
      }
      onCreateOk();
    })
    .catch(err => { 
      onCreateError(`${err.status}; ${err.statusText}`);
    });
} 

export default createPerson;
