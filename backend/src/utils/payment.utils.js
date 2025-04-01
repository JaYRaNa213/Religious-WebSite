// payment.utils.js

// Import Stripe package as ES Module
import Stripe from 'stripe';

// Initialize Stripe with secret key from environment variable
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * @description Create a payment intent using Stripe API
 * @param {Number} amount - Amount to be charged in smallest currency unit (e.g., paisa or cents)
 * @param {String} currency - Currency for the payment (e.g., INR, USD)
 * @param {String} customerEmail - Email address of the customer
 * @returns {Object} - Payment intent object or error
 */
const createPaymentIntent = async (amount, currency, customerEmail) => {
  try {
    // Create a payment intent using Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in smallest unit
      currency, // Currency type
      receipt_email: customerEmail, // Email for receipt
      description: 'Religious Service Payment', // Payment description
    });

    // Return the payment intent
    return paymentIntent;
  } catch (error) {
    // Throw error if something goes wrong
    throw new Error(`Payment creation failed: ${error.message}`);
  }
};

/**
 * @description Verify payment using Stripe API
 * @param {String} paymentId - ID of the payment to be verified
 * @returns {Object} - Payment verification result
 */
const verifyPayment = async (paymentId) => {
  try {
    // Retrieve payment intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentId);

    // Check payment status
    if (paymentIntent.status === 'succeeded') {
      return { success: true, message: 'Payment successful' };
    } else {
      return { success: false, message: 'Payment failed or pending' };
    }
  } catch (error) {
    // Handle any errors during verification
    throw new Error(`Payment verification failed: ${error.message}`);
  }
};

// Export the functions using ES module syntax
export { createPaymentIntent, verifyPayment };
