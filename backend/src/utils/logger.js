// logger.js
import winston from 'winston';

/**
 * @description Configure logger for logging application events
 */
const logger = winston.createLogger({
  level: 'info', // Default logging level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    // Log to console
    new winston.transports.Console(),
    // Log errors to error.log file
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
  ],
});

/**
 * @description Log messages with different levels
 * @param {String} level - Log level (info, error, warn, etc.)
 * @param {String} message - Log message
 */
const log = (level, message) => {
  logger.log({ level, message });
};

export default log;
