// Import required modules
import jwt from 'jsonwebtoken';
import ApiError from '../utils/ApiError.js';
import User from '../models/user.model.js'; // Import User model
import asyncHandler from '../utils/asyncHandler.js'; // Async handler for error management

// Middleware to verify JWT token
export const verifyToken = asyncHandler(async (req, res, next) => {
  try {
    // Get token from cookies or Authorization header
    const token = req.cookies?.accessToken || req.headers['authorization']?.split(' ')[1];

    // Check if token is provided
    if (!token) {
      throw new ApiError(403, 'Unauthorized request: No token provided');
    }

    // Verify token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by ID and exclude sensitive fields
    const user = await User.findById(decoded?.id).select('-password -refreshToken');

    // Check if user exists
    if (!user) {
      throw new ApiError(401, 'Invalid Access Token: User not found');
    }

    // Attach the user to the request object
    req.user = user;

    // Proceed to the next middleware or route
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || 'Unauthorized! Invalid token.');
  }
});

// ========================
// ✅ Auth Middleware to Verify JWT
// ========================
export const protect = (req, res, next) => {
  let token;

  // Get token from headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Check if token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized, no token',
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Not authorized, invalid token',
    });
  }
};


// ✅ Auth Middleware
export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};
