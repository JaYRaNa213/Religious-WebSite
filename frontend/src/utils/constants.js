// API URLs
export const BASE_API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api';

// Auth Constants
export const AUTH_TOKEN_KEY = 'authToken';

// Status Codes
export const STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

// Common Messages
export const MESSAGES = {
  LOGIN_SUCCESS: 'Login successful!',
  LOGIN_FAILED: 'Invalid credentials. Please try again.',
  LOGOUT_SUCCESS: 'Logged out successfully.',
  REGISTRATION_SUCCESS: 'Registration successful!',
  FETCH_ERROR: 'Error fetching data. Please try again later.',
};
