// booking/BookingForm.jsx
// booking/BookingForm.jsx

import React, { useState } from 'react';
import axiosInstance from '../../config/axiosConfig';
import MainLayout from '../../layouts/MainLayout';

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', date: '', poojaType: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/bookings', formData);
      setSuccessMessage('🙏 Booking successful! May God bless you!');
      setFormData({ name: '', date: '', poojaType: '' }); // Clear form after booking
    } catch (error) {
      alert('❌ Error booking. Try again.');
    }
  };

  return (
    <MainLayout>
      <div className="booking-container">
        <h1>📿 Book Your Pooja</h1>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <select name="poojaType" value={formData.poojaType} onChange={handleChange} required>
            <option value="">Select Pooja Type</option>
            <option value="Ganesh Pooja">Ganesh Pooja</option>
            <option value="Lakshmi Pooja">Lakshmi Pooja</option>
            <option value="Sundar Kand">Sundar Kand</option>
          </select>
          <button type="submit">📅 Book Now</button>
        </form>
      </div>
    </MainLayout>
  );
};

export default BookingForm;
