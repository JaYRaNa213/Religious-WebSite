import { sendEmail } from '../api/emailAPI';

// Send Email
export const sendContactEmail = async (emailData) => {
  try {
    return await sendEmail(emailData);
  } catch (error) {
    throw error || 'Error sending email.';
  }
};
