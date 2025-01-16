import axios from 'axios';

const axiosUrl = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Set the base URL
  headers: {
    'Content-Type': 'application/json', // Set default headers if needed
    // Add other headers here if required
  },
});

export default axiosUrl;
