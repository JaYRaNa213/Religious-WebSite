// Import required packages and modules
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import routes from './routes/index.routes.js';

// Import route files
import authRoutes from './routes/auth.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import productRoutes from './routes/product.routes.js';
import blogRoutes from './routes/blog.routes.js';
import paymentRoutes from './routes/payment.routes.js';




// Import error handling middlewares
import errorHandler from './middleware/error.middleware.js';
import notFound from './middleware/error.middleware.js';


// Load environment variables from .env file
dotenv.config();

// Get the __dirname equivalent in ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json({ limit: '16kb' }));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// Enable CORS to allow requests from different origins
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Middleware to log HTTP requests for easier debugging
app.use(morgan('dev'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing cookies
app.use(cookieParser());

// Define base routes for API endpoints
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/products', productRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/payments', paymentRoutes);
app.use('api/emails', emailRoutes);
app.use('api/test',testRoutes)



// Home route to test the API
app.get('/', (req, res) => {
  res.send('Welcome to the Religious Website API!');
});

// Handle 404 errors (resource not found)
app.use(notFound);

// Global error handling middleware
app.use(errorHandler);

export default app;
