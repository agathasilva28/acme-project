import axios from 'axios'

const API_KEY = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

 export async function search(query) {
  return axios.get(BASE_URL, {
    params: {
      q: query,
      api_key: API_KEY,
    }
  });
}