import express from 'express';
import cors from 'cors';
import { postsRouter } from './routes/posts.js';
import { projectsRouter } from './routes/projects.js';
import { contactRouter } from './routes/contact.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});