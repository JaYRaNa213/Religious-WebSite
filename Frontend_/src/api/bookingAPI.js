import axiosInstance from '../config/axiosConfig';

// Fetch available booking slots
export const getAvailableSlots = async () => {
  try {
    const response = await axiosInstance.get('/bookings/slots');
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error fetching available slots.';
  }
};

// Create a new booking
export const createBooking = async (bookingData) => {
  try {
    const response = await axiosInstance.post('/bookings', bookingData);
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error creating booking.';
  }
};

// Get user-specific bookings
export const getUserBookings = async () => {
  try {
    const response = await axiosInstance.get('/bookings/my');
    return response.data;
  } catch (error) {
    throw error.response.data || 'Error fetching user bookings.';
  }
};
