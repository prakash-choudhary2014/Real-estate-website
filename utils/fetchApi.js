import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '66411e7dd4msh57ae956d02d97b7p15ed5fjsnb4fcf3e3e04a' ,
    },
  });
    
  return data;
}