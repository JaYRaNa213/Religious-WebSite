import axiosInstance from '../config/axiosConfig';

// User login API
export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error during login.';
  }
};

// User registration API
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error during registration.';
  }
};

// Fetch logged-in user data
export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get('/auth/profile');
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error fetching user profile.';
  }
};
