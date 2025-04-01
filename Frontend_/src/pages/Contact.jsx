import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Contact = () => {
  return (
    <MainLayout>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          For any inquiries or assistance, please reach out to us via email at{' '}
          <strong>support@religiousweb.com</strong> or call us at <strong>+91-9876543210</strong>.
        </p>
      </div>
    </MainLayout>
  );
};

export default Contact;
