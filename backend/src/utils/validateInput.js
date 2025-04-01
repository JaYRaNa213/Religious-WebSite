// Import required package
import Joi from 'joi';

// Validate user input
/**
 * @param {Object} schema - Joi schema for validation
 * @returns {Function} - Middleware for validating request body
 */
const validateInput = (schema) => {
  return (req, res, next) => {
    // Validate request body against the schema
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      // Send validation error response
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.details.map((err) => err.message),
      });
    }

    // Proceed if validation passes
    next();
  };
};

export default validateInput;
