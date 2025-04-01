// generateToken.js
import jwt from 'jsonwebtoken';

/**
 * @description Generate JWT token for user authentication
 * @param {String} id - User ID to include in the token
 * @returns {String} - Signed JWT token
 */
const generateToken = (id) => {
  // Sign token with user ID and secret key
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token expires in 30 days
  });
};

export default generateToken;
