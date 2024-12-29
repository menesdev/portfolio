import { BlogPost } from '../types/blog';

export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with TypeScript and React',
    excerpt: 'Learn how to build modern web applications with TypeScript and React',
    content: 'TypeScript and React make a powerful combination for building scalable web applications...',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  },
  {
    id: '2',
    title: 'Best Practices for React Development',
    excerpt: 'Discover the essential best practices for React development',
    content: 'When developing React applications, following established patterns can greatly improve...',
    author: 'Michael Chen',
    date: '2024-03-14',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  },
];