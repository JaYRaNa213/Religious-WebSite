// Import winston for logging
const winston = require('winston');

// Define logger configuration
const logger = winston.createLogger({
  // Set log format
  format: winston.format.combine(
    winston.format.timestamp(), // Add timestamp to logs
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),

  // Define transport options for logging
  transports: [
    // Save logs to a file
    new winston.transports.File({ filename: 'logs/app.log' }),

    // Log to console during development
    new winston.transports.Console({
      level: 'debug', // Log only debug and above during development
      format: winston.format.combine(
        winston.format.colorize(), // Add color for better readability
        winston.format.simple()
      ),
    }),
  ],
});

// Export logger instance
module.exports = logger;
