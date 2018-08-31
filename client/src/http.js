/* eslint-disable */
import axios from 'axios';
import store from './store/index';

console.log('http store', store)
export default () => {
  return axios.create({
    baseURL: store.state.baseUrl,
    timeout: 5000,
    headers:  {
      Authorization: `Bearer ${store.state.authentication.token}`,
    },
  });
};
