import { processPayment, getPaymentStatus } from '../api/paymentAPI';

// Process Payment
export const initiatePayment = async (paymentData) => {
  try {
    return await processPayment(paymentData);
  } catch (error) {
    throw error || 'Error processing payment.';
  }
};

// Get Payment Status
export const checkPaymentStatus = async (paymentId) => {
  try {
    return await getPaymentStatus(paymentId);
  } catch (error) {
    throw error || 'Error fetching payment status.';
  }
};
