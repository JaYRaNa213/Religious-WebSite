// Load environment variables
require('dotenv').config();

// Email configuration settings
module.exports = {
  // SMTP host for sending emails
  host: process.env.SMTP_HOST || 'smtp.example.com',

  // SMTP port for secure email transfer
  port: process.env.SMTP_PORT || 587,

  // Email authentication credentials
  auth: {
    user: process.env.SMTP_USER || 'your_email@example.com',
    pass: process.env.SMTP_PASS || 'your_email_password',
  },

  // Email sender name and address
  sender: {
    name: process.env.EMAIL_SENDER_NAME || 'Religious Website',
    address: process.env.EMAIL_SENDER_ADDRESS || 'no-reply@example.com',
  },
};
