import React, { useState } from 'react';
import axiosInstance from '../../config/axiosConfig';
import MainLayout from '../../layouts/MainLayout';

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', date: '', poojaType: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await axiosInstance.post('/bookings', formData);
      setSuccessMessage('🙏 Booking successful! May God bless you!');
      setFormData({ name: '', date: '', poojaType: '' });
    } catch (error) {
      console.error(error);
      setErrorMessage('❌ Error booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="booking-container">
        <h1>📿 Book Your Pooja</h1>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

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
            <option value="Satyanarayan Katha">Satyanarayan Katha</option>
            <option value="Rudrabhishek">Rudrabhishek</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? 'Booking...' : '📅 Book Now'}
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default BookingForm;
