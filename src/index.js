import axios from 'axios';

export const API = 'https://reactnative.dev/movies.json';

export const fetchData = async query => {
  const url = API;
  return await axios.get(url);
};

fetchData().then(result => console.log(result.data))