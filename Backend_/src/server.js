// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import authRoutes from './routes/auth.routes.js';
// import bookingRoutes from './routes/booking.routes.js';
// import productRoutes from './routes/product.routes.js';
// import paymentRoutes from './routes/payment.routes.js';
// import blogRoutes from './routes/blog.routes.js';
// import emailRoutes from './routes/email.routes.js';
// import testRoutes from './routes/test.routes.js';

// // src/server.js

// dotenv.config();


// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// // Initialize express app
// const app = express();

// // Middleware to parse incoming requests
// app.use(express.json());

// // Use routes
// app.use('/api/auth', authRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/products', productRoutes);

// app.use('/api/payments', paymentRoutes);
// app.use('/api/blogs', blogRoutes);
// app.use('/api/emails', emailRoutes);
// app.use('/api/auth', authRoutes);
// app.use('api/test',testRoutes);

// // Define a basic route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Religious Website API!');
// });

// // Start the server
// const PORT = process.env.PORT || 7000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
//   console.log("connected to the database");
//   console.log("Press Ctrl+C to stop");
// });




import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.routes.js';
import connectDB from './config/db.js';

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app = express();

// // Middleware
// app.use(express.json()); // Parse JSON requests
// app.use(cors()); // Enable CORS for all requests
// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(morgan('dev'));


// ✅ Use Routes
app.use('/', routes);

// Define PORT from .env or default to 7000
const PORT = process.env.PORT || 7000;

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log("✅ connected to the database");
  console.log("✅ Press Ctrl+C to stop");

});
