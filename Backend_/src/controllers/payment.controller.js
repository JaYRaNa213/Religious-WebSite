// src/controllers/payment.controller.js
import mongoose from 'mongoose';
import Payment from '../models/payment.model.js';
import User from '../models/user.model.js';

// ✅ Validate MongoDB ObjectId format
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

/**
 * @description Initiate a payment
 * @route POST /api/payments/initiate
 */
export const initiatePayment = async (req, res) => {
  try {
    const { userId, amount, paymentMethod } = req.body;
    console.log("This is User Id---------------------------",userId);

    // ✅ Validate userId format
    if (!isValidObjectId(userId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid userId format. Must be a valid ObjectId.',
      });
     
    }

    // ✅ Check if the user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: 'User not found. Please provide a valid userId.',
      });
    }

    // ✅ Validate amount and payment method
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid amount. Amount should be greater than 0.',
      });
    }

    if (!paymentMethod || !['credit_card', 'debit_card', 'upi', 'net_banking'].includes(paymentMethod)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid payment method. Supported methods: credit_card, debit_card, upi, net_banking.',
      });
    }

    // ✅ Create a pending payment record
    const payment = new Payment({
      user: userId,
      amount,
      paymentMethod,
      status: 'pending',
    });

    // ✅ Save payment to database
    await payment.save();

    res.status(201).json({
      success: true,
      message: 'Payment initiated successfully',
      paymentId: payment._id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error initiating payment',
      error: error.message,
    });
  }
};

/**
 * @description Verify payment status
 * @route POST /api/payments/verify
 */
export const verifyPayment = async (req, res) => {
  try {
    const { paymentId, status } = req.body;

    // ✅ Validate paymentId format
    if (!isValidObjectId(paymentId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid paymentId format. Must be a valid ObjectId.',
      });
    }

    // ✅ Find and update payment status
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found',
      });
    }

    // ✅ Update payment status
    payment.status = status;
    await payment.save();

    res.status(200).json({
      success: true,
      message: `Payment ${status} successfully`,
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error verifying payment',
      error: error.message,
    });
  }
};

/**
 * @description Get payment status by ID
 * @route GET /api/payments/status/:id
 */
export const getPaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ Validate paymentId format
    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid paymentId format. Must be a valid ObjectId.',
      });
    }

    // ✅ Find payment by ID
    const payment = await Payment.findById(id);
    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found',
      });
    }

    res.status(200).json({
      success: true,
      status: payment.status,
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching payment status',
      error: error.message,
    });
  }
};

/**
 * @description Get all payments for a user
 * @route GET /api/payments/user/:userId
 */
export const getUserPayments = async (req, res) => {
  try {
    const { userId } = req.params;

    // ✅ Validate userId format
    if (!isValidObjectId(userId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid userId format. Must be a valid ObjectId.',
      });
    }

    // ✅ Find all payments by the user
    const payments = await Payment.find({ user: userId }).populate('user');

    res.status(200).json({
      success: true,
      payments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching payments',
      error: error.message,
    });
  }
};

