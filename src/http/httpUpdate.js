import {avatarURL, updateURL} from './urls';

const updatePerson = (firstName, lastName, email, id, onUpdateOk, onUpdateWarning, onUpdateError) => {
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
    .then(res => {
      if (!res.ok) { throw res }
      return res.json()
    })
    .then(res => {
      if (res.status === 'error') {
        onUpdateWarning(`${res.message}`);
      }
      onUpdateOk();
    })
    .catch(err => { 
      onUpdateError(`${err.status}; ${err.statusText}`);
    });
}

export default updatePerson;
