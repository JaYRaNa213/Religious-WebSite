import axios from "axios";

// Base URL of your backend API
const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Change this to your backend URL
  withCredentials: true, // This allows sending cookies if using auth
});

// Interceptor (optional): Automatically attach tokens to headers
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Blog APIs
export const getBlogs = () => API.get("/blogs");
export const getBlogById = (id) => API.get(`/blogs/${id}`);

// Product APIs
export const getProducts = () => API.get("/products");

// Booking API
export const bookPuja = (data) => API.post("/booking", data);

// Auth APIs
export const login = (data) => api.post("/auth/login", data);
export const register = (data) => api.post("/auth/register", data);
export const getUser = () => api.get("/auth/me");


export default API;
