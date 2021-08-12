import {indexURL} from './urls.js';

export const getPeople = async (onGetOk) => {
  const response = await fetch(indexURL);
  const jsonData = await response.json();
  
  const reversedListData = jsonData.reverse();      // Place new people on top
  onGetOk(reversedListData);
};
