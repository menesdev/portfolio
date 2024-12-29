import { Router } from 'express';
import { getProjects } from '../controllers/projects.js';

const router = Router();

router.get('/', getProjects);

export { router as projectsRouter };