import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import { connectDB } from './config/database.js';
import { errorHandler } from './middleware/errorHandler.js';
import { postsRouter } from './routes/posts.js';
import { projectsRouter } from './routes/projects.js';
import { contactRouter } from './routes/contact.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/contact', contactRouter);

// Error handling
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});