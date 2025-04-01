// sendEmail.js

// Import required packages
import nodemailer from 'nodemailer';

// Send email utility
/**
 * @param {Object} options - Email options (to, subject, text, html)
 * @returns {Object} - Email response
 */
const sendEmail = async (options) => {
  try {
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Sender email
        pass: process.env.EMAIL_PASS, // Email password
      },
    });

    // Define email options
    const mailOptions = {
      from: `"Religious Website" <${process.env.EMAIL_USER}>`,
      to: options.to, // Recipient email
      subject: options.subject, // Email subject
      text: options.text, // Email content (plain text)
      html: options.html, // Optional: HTML content for the email
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error(`Error sending email: ${error.message}`);
    throw new Error('Email sending failed');
  }
};

// Export the sendEmail function
export default sendEmail;
