// asyncHandler.js

/**
 * @description Middleware to handle async/await errors in route handlers
 * @param {Function} fn - Async route handler function
 * @returns {Function} - Returns a function that wraps the async function and handles errors
 */
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    // Execute the async function and pass req, res, next
    await fn(req, res, next);
  } catch (error) {
    // Pass error to the global error handler middleware
    next(error);
  }
};

export default asyncHandler;
