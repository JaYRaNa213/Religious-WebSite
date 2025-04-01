import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:7000/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error('Network error:', error);
      return Promise.reject({ message: 'Network error. Please check your connection.' });
    }

    const { status } = error.response;

    if (status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    } else if (status === 403) {
      alert('You do not have permission to perform this action.');
    } else if (status >= 500) {
      alert('Server error. Please try again later.');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
// 


// import axios from 'axios';

// const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:7000/api';

// const axiosInstance = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Add a request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Add a response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem('authToken');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
