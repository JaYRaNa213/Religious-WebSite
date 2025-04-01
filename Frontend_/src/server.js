// Import required modules
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app = express();

// Enable CORS for specific origins (recommended for production)
const allowedOrigins = [
  'http://localhost:3000', // Development
  'http://192.168.240.43:3000', // Network device
  'https://your-production-domain.com', // Production domain
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

// Security: Add HTTP headers
app.use(helmet());

// Enable compression for better performance
app.use(compression());

// Set __dirname correctly for ES module
const __dirname = path.resolve();

// Serve static files from the 'public' folder (build folder for React)
app.use(express.static(path.join(__dirname, 'public')));

// Handle React frontend routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define PORT from .env or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on: http://localhost:${PORT}`);
});









// import express from 'express';
// import next from 'next';
// import dotenv from 'dotenv';
// import cors from 'cors';

// dotenv.config();
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const server = express();

// server.use(cors()); // Allow CORS

// server.all('*', (req, res) => {
//   return handle(req, res);
// });

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });
