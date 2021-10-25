import {useEffect, useState } from 'react';

const usePeople = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const fullResponse = await fetch('https://reqres.in/api/users');
      const responseJson = await fullResponse.json();
      setPeople(responseJson.data);
    }

    fetchUsers();
  }, []);

  return [people];
};

export default usePeople;
