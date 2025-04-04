import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Contact = () => {
  return (
    <MainLayout>
      <div className="container contact-container">
        <h1>Contact Us</h1>
        <p>
          For any inquiries or assistance, feel free to reach out to us:
        </p>
        <ul>
          <li>Email: <strong>support@religiousweb.com</strong></li>
          <li>Phone: <strong>+91-9876543210</strong></li>
          <li>Address: Vrindavan, Mathura, Uttar Pradesh, India</li>
        </ul>

        {/* Optional: Contact Form */}
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
