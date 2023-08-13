import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://157.245.61.32:7979',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
