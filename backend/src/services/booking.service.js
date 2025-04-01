// Import Booking model
import Booking from '../models/booking.model.js';

/**
 * @description Service to book a pooja
 * @param {Object} bookingData - Booking details
 * @returns {Object} - Created booking
 */
const bookPooja = async (bookingData) => {
  const newBooking = await Booking.create(bookingData);
  return newBooking;
};

/**
 * @description Service to get all bookings for a user
 * @param {String} userId - User ID
 * @returns {Array} - List of bookings
 */
const getBookingHistory = async (userId) => {
  const bookings = await Booking.find({ userId }).populate('userId', 'name email');
  return bookings;
};

/**
 * @description Service to cancel a booking
 * @param {String} bookingId - Booking ID
 * @returns {String} - Confirmation message
 */
const cancelBooking = async (bookingId) => {
  const booking = await Booking.findById(bookingId);
  if (!booking) {
    throw new Error('Booking not found or already canceled');
  }
  await Booking.findByIdAndDelete(bookingId);
  return 'Booking canceled successfully!';
};

// Export all booking services
export { bookPooja, getBookingHistory, cancelBooking };
