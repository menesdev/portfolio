import { Router } from 'express';
import { getPosts, getPostBySlug, createPost } from '../controllers/posts.js';

const router = Router();

router.get('/', getPosts);
router.get('/:slug', getPostBySlug);
router.post('/', createPost);

export { router as postsRouter };