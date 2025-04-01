import React, { useState } from 'react';
import { validateForm } from '../utils/formValidation';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validations
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Check for valid email
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Check if message length is valid
    if (formData.message.length < 10) {
      alert('Message should be at least 10 characters.');
      return;
    }

    // Validate form fields using validateForm
    const formErrors = validateForm(formData, ['name', 'email', 'message']);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Set loading state
    setLoading(true);

    // Simulate sending a message
    setTimeout(() => {
      alert('Message sent successfully!');
      setLoading(false);
      setFormData({ name: '', email: '', message: '' }); // Clear form
      setErrors({});
    }, 1000);
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Message Input */}
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
