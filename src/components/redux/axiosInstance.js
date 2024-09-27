import axios from 'axios';
import BaseUrl from '../../BaseUrl'; // Adjust the import path as necessary

const axiosInstance = axios.create({
  baseURL: BaseUrl, // Set the base URL here
  headers: {
    'Content-Type': 'application/json', // Set common headers if needed
  },
});

// Optionally, you can add interceptors if you need to handle tokens globally
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Attach token for authenticated requests
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
