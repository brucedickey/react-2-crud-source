import {readURL} from './urls';

const readPerson = (id, onReadOk, onReadWarning, onReadError) => {
  fetch(readURL + `${id}`)
    .then(res => {
      if (!res.ok) { throw res }
      return res.json()
    })
    .then(res => {
      if (res.status === 'error') {
        onReadWarning(`${res.message}`);
      }
      onReadOk(res.user);
    })
    .catch(err => { 
      onReadError(`${err.status}; ${err.statusText}`);
    });
}

export default readPerson;
