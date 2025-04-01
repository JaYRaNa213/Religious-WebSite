// sendEmail.js
import nodemailer from 'nodemailer';

/**
 * @description Send an email using nodemailer
 * @param {Object} options - Contains email data (to, subject, text, html)
 * @returns {Object} - Email info or error
 */
const sendEmail = async (options) => {
  try {
    // Configure the transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Using Gmail as the mail service
      auth: {
        user: process.env.EMAIL_USER, // Sender email address from .env
        pass: process.env.EMAIL_PASS, // Sender email password from .env
      },
    });

    // Define email options
    const mailOptions = {
      from: `"Religious Website" <${process.env.EMAIL_USER}>`, // Sender name and email
      to: options.to, // Recipient email address
      subject: options.subject, // Email subject
      text: options.text, // Plain text content
      html: options.html, // HTML formatted content (optional)
    };

    // Send the email and return info
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw new Error('Email sending failed!');
  }
};

export default sendEmail;
