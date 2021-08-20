import {indexURL} from './urls.js';

const getPeople = (onGetOk) => {
  const options = {
    method:  'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  fetch(indexURL, options)
    .then( (res) => res.json() )
    .then( (data) => {
        onGetOk(data);
    }).catch( (err) => {
        alert(err);
    })
}

export default getPeople;
