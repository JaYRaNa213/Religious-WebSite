import { loginUser, registerUser, getUserProfile } from '../api/authAPI';

// Login Service
export const handleLogin = async (credentials) => {
  try {
    const data = await loginUser(credentials);
    localStorage.setItem('authToken', data.token);
    return data.user;
  } catch (error) {
    throw error || 'Login failed.';
  }
};

// Register Service
export const handleRegistration = async (userData) => {
  try {
    const data = await registerUser(userData);
    return data.message || 'Registration successful!';
  } catch (error) {
    throw error || 'Registration failed.';
  }
};

// Fetch User Profile
export const fetchUserProfile = async () => {
  try {
    const user = await getUserProfile();
    return user;
  } catch (error) {
    throw error || 'Error fetching user profile.';
  }
};

// Logout Service
export const handleLogout = () => {
  localStorage.removeItem('authToken');
  return true;
};
