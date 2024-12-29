import { Request, Response } from 'express';
import { Post } from '../models/Post.js';
import { extractExcerpt } from '../utils/markdown.js';

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
};

export const getPostBySlug = async (req: Request, res: Response) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post' });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, markdown, author, imageUrl, tags } = req.body;
    
    // Generate excerpt from markdown content
    const excerpt = extractExcerpt(markdown);
    
    const post = new Post({
      title,
      markdown,
      excerpt,
      author,
      imageUrl,
      tags,
    });
    
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: 'Error creating post' });
  }
};