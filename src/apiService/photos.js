import axios from 'axios';

const API_KEY = 'yH8584CgXwVI7KGuoQ6et7JkbesednZT8h4Sfy4x9S7gF01DQdwTWyd5';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};
