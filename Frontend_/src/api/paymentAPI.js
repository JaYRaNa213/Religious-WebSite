import axiosInstance from '../config/axiosConfig';

// Initiate a payment
export const initiatePayment = async (paymentData) => {
  try {
    const response = await axiosInstance.post('/payments/initiate', paymentData);
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error initiating payment.';
  }
};

// Verify payment status
export const verifyPayment = async (paymentId) => {
  try {
    const response = await axiosInstance.get(`/payments/verify/${paymentId}`);
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error verifying payment.';
  }
};

// Fetch payment history
export const getPaymentHistory = async () => {
  try {
    const response = await axiosInstance.get('/payments/history');
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error fetching payment history.';
  }
};
