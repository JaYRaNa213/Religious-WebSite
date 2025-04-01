// Import required modules
import express from 'express';
import authRoutes from './auth.routes.js';
import bookingRoutes from './booking.routes.js';
import productRoutes from './product.routes.js';
import blogRoutes from './blog.routes.js';
import paymentRoutes from './payment.routes.js';
import emailRoutes from './email.routes.js';
import testRoutes from './test.routes.js';

const router = express.Router();

// Use routes with respective prefixes
router.use('/auth', authRoutes);
router.use('/booking', bookingRoutes);
router.use('/products', productRoutes);
router.use('/blogs', blogRoutes);
router.use('/payment', paymentRoutes);
router.use('/email', emailRoutes);
router.use('/api/test', testRoutes);


export default router; // Export the main router
