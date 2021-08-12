import {readURL} from './urls.js';

export const readPerson = (id, onReadOk) => {
  fetch(readURL + `${id}`)
    .then(res => res.json())
    .then(data => {
      if (data.status === 'ok') {
        onReadOk();
      } else {
        alert(data.message);
      }
    });
}
