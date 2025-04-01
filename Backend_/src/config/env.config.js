// Load environment variables from .env file
require('dotenv').config();

// Export environment variables for easy access
module.exports = {
  // Application port
  PORT: process.env.PORT || 7000,

  // JWT secret key for authentication
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key',

  // JWT token expiration time
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',

  // Base URL for API
  BASE_URL: process.env.BASE_URL || 'http://localhost:7000',

  // Payment gateway API keys (optional)
  PAYMENT_API_KEY: process.env.PAYMENT_API_KEY || 'your_payment_api_key',
};
