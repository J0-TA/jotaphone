import axios from 'axios';

const baseUrl = 'https://itx-frontend-test.onrender.com/api';

export const fetchItems = () => {
  return axios.get(`${baseUrl}/product`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const fetchItemDetail = (id) => {
  return axios.get(`${baseUrl}/product/${id}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
