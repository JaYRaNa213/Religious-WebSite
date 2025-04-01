// Import models and required packages
import Payment from '../models/payment.model.js';
import axios from 'axios';

/**
 * @description Service to initiate payment
 * @param {Object} paymentData - Payment details
 * @returns {Object} - Payment initiation response
 */
const initiatePayment = async (paymentData) => {
  // Create a new payment record in the database
  const newPayment = await Payment.create({
    userId: paymentData.userId,
    amount: paymentData.amount,
    status: 'pending',
    paymentMethod: paymentData.paymentMethod,
  });

  // Simulate payment gateway integration
  const response = await axios.post('https://fake-payment-gateway.com/api/pay', {
    amount: paymentData.amount,
    currency: 'INR',
    customer_email: paymentData.email,
    description: 'Religious Service Payment',
  });

  // Update payment status based on the gateway response
  if (response.data.status === 'success') {
    newPayment.status = 'completed';
  } else {
    newPayment.status = 'failed';
  }
  await newPayment.save();

  return { success: true, data: newPayment };
};

/**
 * @description Service to get payment status
 * @param {String} paymentId - Payment ID
 * @returns {Object} - Payment status
 */
const getPaymentStatus = async (paymentId) => {
  const payment = await Payment.findById(paymentId);

  if (!payment) {
    throw new Error('Payment not found');
  }

  return {
    success: true,
    data: {
      id: payment._id,
      amount: payment.amount,
      status: payment.status,
      paymentMethod: payment.paymentMethod,
    },
  };
};

/**
 * @description Service to handle payment webhook
 * @param {Object} webhookData - Webhook payload
 * @returns {String} - Confirmation message
 */
const handleWebhook = async (webhookData) => {
  const payment = await Payment.findById(webhookData.paymentId);

  if (!payment) {
    throw new Error('Invalid payment ID in webhook data');
  }

  // Update payment status based on webhook event
  payment.status = webhookData.status;
  await payment.save();

  return 'Webhook processed successfully!';
};

// Export all payment services
export { initiatePayment, getPaymentStatus, handleWebhook };
