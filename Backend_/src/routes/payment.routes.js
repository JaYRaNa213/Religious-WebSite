// src/routes/payment.routes.js
import express from 'express';
import {
  initiatePayment,
  verifyPayment,
  getPaymentStatus,
  getUserPayments,
} from '../controllers/payment.controller.js';

const router = express.Router();

/**
 * @route POST /api/payments/initiate
 * @description Initiate a new payment
 */
router.post('/initiate', initiatePayment);

/**
 * @route POST /api/payments/verify
 * @description Verify payment status
 */
router.post('/verify', verifyPayment);

/**
 * @route GET /api/payments/status/:id
 * @description Get payment status by ID
 */
router.get('/status/:id', getPaymentStatus);

/**
 * @route GET /api/payments/user/:userId
 * @description Get all payments for a user
 */
router.get('/user/:userId', getUserPayments);

export default router;
