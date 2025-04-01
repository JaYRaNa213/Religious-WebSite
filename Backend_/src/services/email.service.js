import nodemailer from 'nodemailer';

// ✅ Configure the SMTP Transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // smtp.gmail.com
  port: process.env.EMAIL_PORT, // 587
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER, // Gmail email
    pass: process.env.EMAIL_PASSWORD, // App Password
  },
});

// ✅ Send Email
export const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email Sent:', info.response);
    return info.response;
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    throw new Error('Error sending email');
  }
};
