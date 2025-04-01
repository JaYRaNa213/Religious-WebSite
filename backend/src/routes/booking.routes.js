

// src/routes/booking.routes.js
import express from 'express';
import {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
} from '../controllers/booking.controller.js';

const router = express.Router();

// Booking Routes
router.post('/', createBooking); // Create booking
router.get('/', getAllBookings); // Get all bookings
router.get('/:id', getSingleBooking); // Get single booking by ID
router.put('/:id', updateBooking); // Update booking
router.delete('/:id', deleteBooking); // Delete booking

export default router;

