import {indexURL} from './urls';

const getPeople = (onGetOk, onGetError) => {
  const options = {
    method:  'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  fetch(indexURL, options)
    .then(res => {
      if (!res.ok) { throw res }
      return res.json()
    })
    .then( (data) => {
      onGetOk(data);    
    })
    .catch(err => { 
      onGetError(`${err.status}; ${err.statusText}`);
    });
}

export default getPeople;
