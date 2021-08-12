import { useState, useEffect } from 'react'
import getPeople from './utilities.js';

const usePeopleList = () => {
  const [ peopleList, setPeopleList ] = useState([]);

  useEffect(() => {
    getPeople(setPeopleList);
  }, []);

  return {
    peopleList
  }
}

export default usePeopleList;
