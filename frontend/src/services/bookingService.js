import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking } from '../api/bookingAPI';

// Get All Bookings
export const fetchAllBookings = async () => {
  try {
    return await getAllBookings();
  } catch (error) {
    throw error || 'Failed to fetch bookings.';
  }
};

// Get Booking by ID
export const fetchBookingById = async (id) => {
  try {
    return await getBookingById(id);
  } catch (error) {
    throw error || 'Error fetching booking.';
  }
};

// Create New Booking
export const createNewBooking = async (bookingData) => {
  try {
    return await createBooking(bookingData);
  } catch (error) {
    throw error || 'Error creating booking.';
  }
};

// Update Booking
export const updateExistingBooking = async (id, updatedData) => {
  try {
    return await updateBooking(id, updatedData);
  } catch (error) {
    throw error || 'Error updating booking.';
  }
};

// Delete Booking
export const deleteBookingById = async (id) => {
  try {
    return await deleteBooking(id);
  } catch (error) {
    throw error || 'Error deleting booking.';
  }
};
