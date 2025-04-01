import axiosInstance from '../config/axiosConfig';

// Send contact form email
export const sendContactEmail = async (emailData) => {
  try {
    const response = await axiosInstance.post('/email/contact', emailData);
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error sending contact email.';
  }
};

// Send booking confirmation email
export const sendBookingConfirmation = async (bookingId) => {
  try {
    const response = await axiosInstance.post(`/email/confirm/${bookingId}`);
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error sending booking confirmation email.';
  }
};

// Send newsletter email
export const sendNewsletter = async (newsletterData) => {
  try {
    const response = await axiosInstance.post('/email/newsletter', newsletterData);
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error sending newsletter.';
  }
};
