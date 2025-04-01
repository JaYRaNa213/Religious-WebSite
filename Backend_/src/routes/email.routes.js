import express from 'express';
import { sendEmail, submitContactForm } from '../controllers/email.controller.js';

const router = express.Router();

// ✅ Route to send email
router.post('/send', sendEmail);

// ✅ Route to handle contact form submission
router.post('/contact', submitContactForm);

export default router;
