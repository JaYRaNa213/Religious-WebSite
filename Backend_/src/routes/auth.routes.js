import express from 'express';
import { register, login, logout, getProfile, getUsers } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

// ✅ Auth Routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', authMiddleware, getProfile);

// ✅ New Route for Get All Users
router.get('/users', authMiddleware, getUsers);

export default router;
