// Load environment variables
require('dotenv').config();

// Payment gateway configuration
module.exports = {
  // Payment API key
  apiKey: process.env.PAYMENT_API_KEY || 'your_payment_api_key',

  // Payment environment (sandbox or production)
  environment: process.env.PAYMENT_ENV || 'sandbox',

  // Webhook URL for payment notifications
  webhookUrl: process.env.PAYMENT_WEBHOOK_URL || 'http://localhost:5000/webhook',
};
