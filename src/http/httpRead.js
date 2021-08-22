import {readURL} from './urls.js';

const readPerson = (id, onReadOk) => {
  fetch(readURL + `${id}`)
    .then(res => res.json())
    .then(data => {
      if (data.status === 'ok') {
        onReadOk(data.user);
      } else {
        alert(data.message);
      }
    });
}

export default readPerson;
