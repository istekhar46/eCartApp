import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API routes
app.use('/api/user', userRoutes);

// Serve the frontend in production
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  // Display a message if not in production
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

// Error handling middleware - Place it after all your routes and middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(port, () => console.log(`Server is running on the port http://localhost:${port}`));
