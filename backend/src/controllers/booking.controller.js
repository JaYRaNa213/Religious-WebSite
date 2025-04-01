// src/controllers/booking.controller.js

// Array to store booking data temporarily (use DB for real applications)
const bookings = [];

// ✅ Create Booking Controller
export const createBooking = async (req, res) => {
  try {
    const { user, service, date, time } = req.body;

    // Debugging line (optional)
    console.log(req.body);

    // Validate required fields
    if (!user || !service || !date || !time) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Create a new booking object
    const booking = {
      id: Date.now().toString(), // Unique ID as string
      user,
      service,
      date,
      time,
    };

    // Push booking to the array (simulating DB save)
    bookings.push(booking);

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// ✅ Get All Bookings Controller
export const getAllBookings = async (req, res) => {
  try {
    // Check if any bookings exist
    if (bookings.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No bookings found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'All bookings retrieved successfully',
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// ✅ Get Single Booking by ID
export const getSingleBooking = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the booking with the given ID
    const booking = bookings.find((b) => b.id === id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Booking retrieved successfully',
      data: booking,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// ✅ Update Booking Controller
export const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { user, service, date, time } = req.body;

    // Find the index of the booking to update
    const bookingIndex = bookings.findIndex((b) => b.id === id);

    if (bookingIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    // Update booking details
    bookings[bookingIndex] = {
      ...bookings[bookingIndex],
      user: user || bookings[bookingIndex].user,
      service: service || bookings[bookingIndex].service,
      date: date || bookings[bookingIndex].date,
      time: time || bookings[bookingIndex].time,
    };

    res.status(200).json({
      success: true,
      message: 'Booking updated successfully',
      data: bookings[bookingIndex],
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// ✅ Delete Booking Controller
export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the index of the booking to delete
    const bookingIndex = bookings.findIndex((b) => b.id === id);

    if (bookingIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    // Remove the booking from the array
    const deletedBooking = bookings.splice(bookingIndex, 1);

    res.status(200).json({
      success: true,
      message: 'Booking deleted successfully',
      data: deletedBooking[0],
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
