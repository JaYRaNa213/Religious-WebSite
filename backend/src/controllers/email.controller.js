import nodemailer from 'nodemailer';

// ✅ Send email controller
export const sendEmail = async (req, res) => {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields (to, subject, message) are required',
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error sending email', error: error.message });
  }
};

// ✅ Contact Form Submission Controller
export const submitContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // ⚠️ Validate Required Fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, email, subject, message) are required.',
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Admin email where form submission will be sent
    subject: `Contact Form Submission: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully. We will get back to you soon.',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting contact form',
      error: error.message,
    });
  }
};
